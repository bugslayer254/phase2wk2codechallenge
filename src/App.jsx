import React from "react";
import GoalDashboard from "./components/GoalDashboard";
import GoalCard from "./components/GoalCard";
import "./index.css";

function App() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 text-center">Smart Goal Planner tailwimd is working!</h1>
            <GoalDashboard />
        </div>
    );
}

export default App;
