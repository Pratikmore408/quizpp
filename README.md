# Quiz Application

## Overview
This React-based quiz application allows users to select tags, fetch and answer questions based on those tags, and track their score. The app uses Redux for state management and a custom timer hook to handle question timeouts.

## Features
- **Tag Selection:** Users select up to 10 tags to filter quiz questions.
- **Question Display:** Fetches questions from the backend and displays them based on selected tags.
- **Timer:** Each question is timed with a 30-second countdown. The timer resets upon answering a question.
- **Scoring:** Answers are scored, and the final score is displayed upon completing all questions.

## Setup

1. **Clone the Repository**

Install Dependencies


npm install
Run the Application


npm start
Backend Setup
Ensure the backend server is running at http://127.0.0.1:5000 with the appropriate API endpoints for tags and questions.

Components
WelcomeScreen: Allows users to select tags and start the quiz.
QuizScreen: Displays quiz questions, handles user answers, and manages the timer.
Dependencies
React
Redux
React-Router-Dom
Custom Hooks
API Endpoints
GET /api/tags: Fetches available tags.
GET /api/quiz: Fetches all questions.
