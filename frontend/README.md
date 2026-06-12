# AI Resume Screening & Candidate Ranking System

## Overview

AI Resume Screening & Candidate Ranking System is a full-stack web application that automates the resume screening process using Artificial Intelligence.

The system allows recruiters to:

* Upload multiple PDF resumes
* Enter a job description
* Analyze candidate profiles using Google Gemini AI
* Rank candidates based on job-role fit
* View strengths, skill gaps, detected skills, and overall candidate assessment

This project helps reduce manual effort and speeds up the recruitment process.

---

## Features

### Resume Upload

* Upload multiple PDF resumes
* Extract resume text automatically

### AI Candidate Analysis

* Uses Google Gemini AI for intelligent resume evaluation
* Compares candidate skills with job requirements

### Candidate Ranking

* Generates match scores (0–100)
* Categorizes candidates as:

  * Strong Fit
  * Good Fit
  * Average Fit
  * Weak Fit

### Detailed Evaluation

* Professional assessment summary
* Strengths
* Skill gaps
* Extracted technical skills

### Dashboard Analytics

* Total candidates analyzed
* Average match score
* Top-ranked candidate
* Strong-fit candidates
* Candidates needing review

### Search Functionality

* Search candidates by name

---

## Tech Stack

### Frontend

* React.js
* Vite
* Axios
* PDF.js
* React Circular Progressbar
* React Loader Spinner

### Backend

* Python
* Flask
* Flask-CORS

### AI Integration

* Google Gemini API
* Gemini 2.5 Flash Model

---

## Project Structure

AI-Resume-Screening/

├── backend/

│ ├── app.py

│ ├── ranking.py

│ ├── pdf_parser.py

│ ├── .env

│ └── venv/

│

├── frontend/

│ ├── src/

│ │ ├── components/

│ │ │ └── ScoreRing.jsx

│ │ ├── utils/

│ │ │ └── pdf.js

│ │ ├── App.jsx

│ │ └── main.jsx

│ │

│ ├── public/

│ ├── package.json

│ └── vite.config.js

│

└── README.md

---

## How It Works

1. User uploads one or more PDF resumes.
2. PDF.js extracts text from the resumes.
3. Job description is entered.
4. React sends data to Flask backend.
5. Flask sends the prompt to Gemini AI.
6. Gemini analyzes candidate suitability.
7. Candidates are ranked based on scores.
8. Results are displayed in the dashboard.

---

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/AI-Resume-Screening.git

cd AI-Resume-Screening
```

### Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt
```

Create `.env`

```env
GEMINI_API_KEY=YOUR_API_KEY
```

Run Backend

```bash
python app.py
```

Backend runs on:

```text
http://127.0.0.1:5000
```

---

### Frontend Setup

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

## API Endpoint

### Rank Candidates

```http
POST /rank
```

Request Body

```json
{
  "jobTitle": "Full Stack Developer",
  "jobDescription": "Job description...",
  "resumes": [
    {
      "name": "Candidate",
      "text": "Resume content"
    }
  ]
}
```

---

## Future Enhancements

* Authentication System
* Resume Database Storage
* Candidate Comparison Dashboard
* Export Results to PDF
* Email Integration
* ATS Compatibility Scoring
* Dark Mode
* Analytics Charts

---

## Challenges Faced

* PDF text extraction from different resume formats
* Parsing Gemini AI responses into structured JSON
* Handling multiple resume uploads
* Ranking candidates accurately
* Managing frontend-backend communication

---

## Learning Outcomes

Through this project I learned:

* React Development
* Flask API Development
* REST API Communication
* Google Gemini AI Integration
* Prompt Engineering
* JSON Parsing
* PDF Processing
* Full-Stack Application Development

---

## Author

Ananya Ollem

AI Resume Screening & Candidate Ranking System
