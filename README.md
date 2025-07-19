#     Smart Goal Planner

A simple and intuitive savings goal tracking app built with React, styled using TailwindCSS, and powered by JSON Server for persistent local data.

  ## Features

1. Create savings goals (e.g., Travel, Emergency Fund, Education)

2. Track progress with a visual progress bar

3. Make deposits to any goal

4. View stats: total saved, goals completed, time left, and overdue alerts

5. Delete or update any goal anytime

6. Fully supports CRUD operations with local JSON data

  ## Project Structure

smart-goal-planner/
│
├── public/ # Static assets
├── src/
│ ├── components/
│ │ ├── GoalCard.jsx
│ │ ├── GoalForm.jsx
│ │ ├── DepositForm.jsx
│ │ └── OverviewStats.jsx
|   |__depositForm.css
│ ├── App.jsx # Main React component
│ ├── index.css #styling
│ └── main.jsx # React entry point
├── db.json # Mock backend data
└── package.json

##  Getting Started

### 1. Clone the repository
``bash
git clone https://github.com/your-username/smart-goal-planner.git
cd smart-goal-planner

### 2.Install dependencies
npm install

### 3.Start JSON Server
  json-server --watch db.json --port 3000 --cors

### 4.Start the React App

npm run dev

  ## Tech Stack
React – UI library

style.css stylings

JSON Server – Mock REST API

Vite – Lightning-fast dev server and build tool

   ## Author
Grace Kamau
 Junior Frontend Developer
Based in Kenya
email: kelgraygraykel@gmail.com

## License
This project is licensed under the MIT License.




