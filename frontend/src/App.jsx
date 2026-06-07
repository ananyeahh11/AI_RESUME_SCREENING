import { useState } from "react";
import axios from "axios";
import { extractPdfText } from "./utils/pdf";
import ScoreRing from "./components/ScoreRing";

function App() {
const [jobTitle, setJobTitle] = useState("");
const [jobDescription, setJobDescription] = useState("");
const [resumes, setResumes] = useState([]);
const [result, setResult] = useState([]);
const [loading, setLoading] = useState(false);

const handleFileUpload = async (e) => {
  const files = Array.from(e.target.files);

  const newResumes = [];

  for (const file of files) {
    try {
      const text = await extractPdfText(file);

      newResumes.push({
        name: file.name.replace(".pdf", ""),
        text: text,
      });
    } catch (error) {
      console.error(error);
    }
  }

  setResumes((prev) => [...prev, ...newResumes]);
};

const removeResume = (indexToRemove) => {
setResumes(
resumes.filter((_, index) => index !== indexToRemove)
);
};

const analyzeCandidates = async () => {
  console.log("Analyze button clicked");

  if (!jobDescription.trim()) {
    alert("Please enter a Job Description");
    return;
  }

  if (resumes.length === 0) {
    alert("Please upload at least one resume");
    return;
  }

  try {
    setLoading(true);

    console.log("Sending request to backend...");

    const response = await axios.post(
      "http://127.0.0.1:5000/rank",
      {
        jobTitle,
        jobDescription,
        resumes,
      }
    );

    console.log("Backend Response:");
    console.log(response.data);

    setResult(response.data);
  } catch (error) {
    console.error("ERROR:", error);
    alert("Failed to analyze candidates");
  } finally {
    setLoading(false);
  }
};

const averageScore =
result.length > 0
? Math.round(
result.reduce((sum, c) => sum + c.score, 0) /
result.length
)
: 0;

return (
<div
style={{
minHeight: "100vh",
background: "#f8fafc",
fontFamily: "Arial, sans-serif",
}}
>
<div
style={{
background:
"linear-gradient(135deg,#0f172a,#1e3a8a,#2563eb)",
color: "white",
padding: "80px 40px",
}}
>
<h1
style={{
fontSize: "48px",
fontWeight: "700",
lineHeight: "1.2",
marginBottom: "20px",
maxWidth: "900px",
}}
>
AI-Powered Resume Screening & Candidate Ranking </h1>


    <p
      style={{
        fontSize: "20px",
        maxWidth: "800px",
      }}
    >
      Analyze resumes, identify top talent,
      and shortlist the best candidates
      in minutes.
    </p>
  </div>

  <div
    style={{
      maxWidth: "1200px",
      margin: "30px auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
      padding: "20px",
    }}
  >
    <div
      style={{
        background: "white",
        padding: "24px",
        borderRadius: "20px",
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.08)",
      }}
    >
      <h2>Job Requirements</h2>

      <input
        value={jobTitle}
        onChange={(e) =>
          setJobTitle(e.target.value)
        }
        placeholder="Enter Job Title"
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "12px",
          marginBottom: "15px",
          borderRadius: "10px",
          border: "1px solid #d1d5db",
        }}
      />

      <textarea
        value={jobDescription}
        onChange={(e) =>
          setJobDescription(e.target.value)
        }
        placeholder="Paste complete job description, responsibilities, required skills, and qualifications..."
        rows="12"
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          border: "1px solid #d1d5db",
        }}
      />
    </div>

    <div
      style={{
        background: "white",
        padding: "24px",
        borderRadius: "20px",
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.08)",
      }}
    >
      <h2>Candidate Resumes</h2>

      <div
        style={{
          border: "2px dashed #2563eb",
          padding: "50px",
          textAlign: "center",
          borderRadius: "20px",
          marginTop: "15px",
        }}
      >
        <h3>Upload Candidate Resumes</h3>

        <p style={{ color: "#64748b" }}>
          Supports multiple PDF files
        </p>

        <input
          type="file"
          multiple
          accept=".pdf"
          onChange={(e) => {
            handleFileUpload(e);
            e.target.value = null;
          }}
        />
      </div>

      {resumes.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Resume Library</h3>

          {resumes.map((resume, index) => (
            <div
              key={index}
              style={{
                marginTop: "10px",
                padding: "12px",
                background: "#f1f5f9",
                borderRadius: "12px",
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <strong>{resume.name}</strong>

                <p>
                  Characters Extracted:
                  {" "}
                  {resume.text.length}
                </p>
              </div>

              <button
                onClick={() =>
                  removeResume(index)
                }
                style={{
                  background: "#ef4444",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={analyzeCandidates}
        disabled={loading}
        style={{
          marginTop: "20px",
          width: "100%",
          padding: "14px",
          border: "none",
          borderRadius: "12px",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
          background:
            "linear-gradient(135deg,#2563eb,#1d4ed8)",
        }}
      >
        {loading
          ? "Processing Resumes..."
          : "Analyze & Rank Candidates"}
      </button>
    </div>
  </div>

  {result.length > 0 && (
    <>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(3,1fr)",
          gap: "20px",
          padding: "20px",
        }}
      >
        <StatCard
          title="Total Candidates"
          value={result.length}
        />

        <StatCard
          title="Average Match Score"
          value={averageScore}
        />

        <StatCard
          title="Top Ranked Candidate"
          value={result[0]?.name}
        />
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "20px auto",
          padding: "20px",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
          }}
        >
          Candidate Evaluation Report
        </h2>

        {result.map(
          (candidate, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "25px",
                marginBottom: "20px",
                display: "flex",
                justifyContent:
                  "space-between",
                gap: "20px",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <div style={{ flex: 1 }}>
                <h2>
                  #{index + 1}
                  {" "}
                  {candidate.name}
                </h2>

                <FitBadge
                  fit={candidate.fit}
                />

                <p>
                  <strong>
                    Professional Assessment:
                  </strong>
                  {" "}
                  {candidate.summary}
                </p>

                <h4>Key Strengths</h4>

                <ul>
                  {candidate.strengths?.map(
                    (item, i) => (
                      <li key={i}>
                        {item}
                      </li>
                    )
                  )}
                </ul>

                <h4>
                  Areas for Improvement
                </h4>

                <ul>
                  {candidate.gaps?.map(
                    (item, i) => (
                      <li key={i}>
                        {item}
                      </li>
                    )
                  )}
                </ul>

                <h4>
                  Detected Skills
                </h4>

                <div>
                  {candidate.skills?.map(
                    (skill, i) => (
                      <span
                        key={i}
                        style={{
                          display:
                            "inline-block",
                          background:
                            "#dbeafe",
                          padding:
                            "6px 12px",
                          margin: "4px",
                          borderRadius:
                            "20px",
                        }}
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              <ScoreRing
                score={candidate.score}
              />
            </div>
          )
        )}
      </div>
    </>
  )}

  <div
    style={{
      textAlign: "center",
      padding: "30px",
      color: "#64748b",
    }}
  >
    AI Resume Screening System • Powered by Gemini AI
  </div>
</div>


);
}

function StatCard({ title, value }) {
return (
<div
style={{
background: "white",
padding: "20px",
borderRadius: "20px",
boxShadow:
"0 10px 30px rgba(0,0,0,0.08)",
}}
> <h4>{title}</h4> <h2>{value}</h2> </div>
);
}

function FitBadge({ fit }) {
const colors = {
Strong: "#16a34a",
Good: "#2563eb",
Average: "#f59e0b",
Weak: "#dc2626",
};

return (
<span
style={{
display: "inline-block",
background:
colors[fit] || "#64748b",
color: "white",
padding: "6px 12px",
borderRadius: "20px",
marginBottom: "10px",
}}
>
{fit} Fit </span>
);
}

export default App;
