import google.generativeai as genai
import os
import json
import re
from dotenv import load_dotenv

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel(
    "gemini-2.5-flash"
)


def rank_candidates(job_description, resumes):

    prompt = f"""
You are a senior HR recruiter.

JOB DESCRIPTION:
{job_description}

CANDIDATES:
{json.dumps(resumes, indent=2)}

TASK:

Analyze each candidate against the job description.

Evaluate:

1. Skill Match
2. Experience Relevance
3. Education
4. Projects
5. Certifications
6. Overall Fit

Return ONLY valid JSON.

Example:

[
  {{
    "name": "John Doe",
    "score": 85,
    "fit": "Strong",
    "summary": "Excellent match for the role.",
    "strengths": ["React", "Node.js"],
    "gaps": ["AWS"],
    "skills": ["React", "Node.js", "JavaScript"]
  }}
]

Rules:

- score must be 0-100
- fit must be:
  Strong
  Good
  Average
  Weak

Strong = 80+
Good = 60-79
Average = 40-59
Weak = below 40

Return ONLY JSON.
No markdown.
No explanations.
No code blocks.

Sort highest score first.
"""

    response = model.generate_content(prompt)

    text = response.text.strip()

    print("\n========== RAW GEMINI ==========")
    print(text)
    print("================================\n")

    try:

        # remove markdown if exists
        text = text.replace("```json", "")
        text = text.replace("```", "")
        text = text.strip()

        # extract JSON array safely
        match = re.search(r"\[.*\]", text, re.DOTALL)

        if not match:
            raise Exception("No JSON array found")

        json_text = match.group(0)

        results = json.loads(json_text)

        results = sorted(
            results,
            key=lambda x: x.get("score", 0),
            reverse=True
        )

        return results

    except Exception as e:

        print("PARSE ERROR")
        print(text)

        raise Exception(
            f"Failed parsing Gemini JSON: {str(e)}"
        )