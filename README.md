# AI-Powered Resume Screening & Candidate Ranking

An AI-powered web application that automatically analyzes, evaluates, and ranks candidate resumes against a given job description using Google Gemini AI.

## 🚀 Features

* Upload multiple PDF resumes
* Automatic resume text extraction
* AI-powered candidate evaluation
* Candidate ranking based on job requirements
* Match score generation (0-100)
* Candidate fit analysis (Strong, Good, Average, Weak)
* Strengths identification
* Skill gap detection
* Professional candidate summaries
* Skills extraction
* Responsive and modern user interface

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* React Circular Progressbar

### Backend

* Flask
* Flask-CORS
* Python

### AI

* Google Gemini AI

### PDF Processing

* PDF.js

---

## 📂 Project Structure

```text
AI-Resume-Screening/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── ScoreRing.jsx
│   │   ├── utils/
│   │   │   └── pdf.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── app.py
│   ├── ranking.py
│   ├── requirements.txt
│   └── .env
│
└── README.md
```

---

## ⚙️ How It Works

1. Enter the job title and job description.
2. Upload one or more candidate resumes in PDF format.
3. The application extracts text from each resume.
4. Resume data is sent to the Flask backend.
5. Gemini AI evaluates every candidate against the job requirements.
6. The system generates:

   * Candidate Score
   * Fit Rating
   * Strengths
   * Skill Gaps
   * Skills Detected
   * Professional Summary
7. Candidates are automatically ranked from highest score to lowest score.

---

## 📊 Candidate Evaluation Criteria

The AI evaluates candidates based on:

* Technical Skills
* Relevant Experience
* Education
* Projects
* Tools & Technologies
* Job Requirement Matching
* Overall Candidate Fit

---

## 🔧 Installation

### Clone Repository

```bash
git clone https://github.com/ananyaehh11/AI_RESUME_SCREENING.git
cd AI_RESUME_SCREENING
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

### Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python app.py
```

Backend runs on:

```text
http://127.0.0.1:5000
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

---

## 📡 API Endpoints

### Health Check

```http
GET /
```

Response:

```json
{
  "message": "Resume Screening API Running"
}
```

### Rank Candidates

```http
POST /rank
```

Request Body:

```json
{
  "jobTitle": "Full Stack Developer",
  "jobDescription": "Job description here",
  "resumes": [
    {
      "name": "Candidate Name",
      "text": "Resume Text"
    }
  ]
}
```

Response:

```json
[
  {
    "name": "John Doe",
    "score": 92,
    "fit": "Strong",
    "summary": "Excellent match for the role",
    "strengths": ["React", "Node.js"],
    "gaps": ["AWS"],
    "skills": ["React", "Node.js", "JavaScript"]
  }
]
```

---

## ✨ Key Highlights

* AI-based resume analysis
* Multiple PDF resume support
* Intelligent candidate ranking
* Skill extraction and matching
* Modern recruiter dashboard
* Fast and scalable architecture

---

## 📈 Future Enhancements

* Export results to PDF
* Export results to Excel
* Candidate search and filters
* Authentication system
* Resume database integration
* Advanced analytics dashboard
* Cloud deployment

---

## 👩‍💻 Author

**Ananya Ollem**

B.Tech – Computer Science Engineering

---

## 📄 License

This project is developed for educational, internship, and learning purposes.
