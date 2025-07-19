import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GoalDashboard from './components/GoalDashboard.jsx'
import "./index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoalDashboard></GoalDashboard>
  </StrictMode>,
)
