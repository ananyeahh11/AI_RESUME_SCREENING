# AI Resume Screening & Candidate Ranking System

An AI-powered web application that automatically screens resumes, evaluates candidates against a job description, and ranks them based on suitability using Google's Gemini AI.

---

## 🚀 Features

- Upload multiple PDF resumes
- Extract text from resumes automatically
- Enter any Job Description
- AI-based candidate evaluation
- Candidate ranking from best to worst
- Match Score (0-100)
- Strengths & Skill Analysis
- Gap Identification
- Candidate Fit Classification
- Search Candidates
- Modern Dashboard UI
- Real-time AI Processing

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- Axios
- PDF.js
- React Circular Progressbar
- React Loader Spinner

### Backend
- Python
- Flask
- Flask-CORS

### AI
- Google Gemini API
- Gemini 2.5 Flash Model

---

## 📂 Project Structure

```text
AI-Resume-Screening
│
├── backend
│   ├── app.py
│   ├── ranking.py
│   ├── pdf_parser.py
│   ├── .env
│   └── venv
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   └── ScoreRing.jsx
│   │   │
│   │   ├── utils
│   │   │   └── pdf.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/AI-Resume-Screening.git

cd AI-Resume-Screening
```

---

### 2. Backend Setup

```bash
cd backend

python -m venv venv
```

Activate Virtual Environment:

Windows

```bash
venv\Scripts\activate
```

Install Dependencies

```bash
pip install flask
pip install flask-cors
pip install python-dotenv
pip install google-generativeai
```

---

### 3. Create .env File

Inside backend folder:

```env
GEMINI_API_KEY=YOUR_API_KEY
```

---

### 4. Run Backend

```bash
python app.py
```

Backend runs on:

```text
http://127.0.0.1:5000
```

---

### 5. Frontend Setup

```bash
cd frontend

npm install
```

Run Frontend

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## 🔄 Application Workflow

```text
User Uploads PDF Resumes
            ↓
PDF.js Extracts Resume Text
            ↓
React Sends Data to Flask API
            ↓
Flask Sends Prompt to Gemini AI
            ↓
Gemini Evaluates Candidates
            ↓
JSON Ranking Response
            ↓
React Displays Results
```

---

## 🤖 AI Evaluation Parameters

The Gemini AI model evaluates:

- Technical Skills
- Experience
- Education
- Job Description Match
- Strengths
- Missing Skills
- Candidate Suitability

Each candidate receives:

- Score (0-100)
- Fit Category
- Summary
- Strengths
- Gaps
- Skills

---

## 📊 Sample Output

```json
[
  {
    "name": "John Doe",
    "score": 92,
    "fit": "Strong",
    "summary": "Excellent candidate with strong technical background.",
    "strengths": [
      "React",
      "Node.js"
    ],
    "gaps": [
      "AWS"
    ],
    "skills": [
      "React",
      "Node.js",
      "JavaScript"
    ]
  }
]
```

---

## 🔮 Future Enhancements

- ATS Score Calculation
- Candidate Comparison Dashboard
- Resume Database Storage
- Authentication & Authorization
- Export Reports as PDF
- Email Integration
- Recruiter Dashboard
- Interview Scheduling


---

## 🎯 Learning Outcomes

Through this project I learned:

- React Development
- Flask API Development
- Gemini AI Integration
- Prompt Engineering
- PDF Text Extraction
- REST API Communication
- JSON Parsing
- Full Stack Development

---

## 👨‍💻 Author

Ananya Ollem

AI Resume Screening & Candidate Ranking System
