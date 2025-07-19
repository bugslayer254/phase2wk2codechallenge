import React, { useEffect, useState } from "react";
import GoalForm from "./GoalForm";
import GoalCard from "./GoalCard";
import DepositForm from "./DepositForm";
import OverviewStats from "./OverviewStats";

const API_BASE = "http://localhost:3000/goals";

const GoalDashboard = () => {
    const [goals, setGoals] = useState([]);

    useEffect(() => {
        fetchGoals();
    }, []);

    const fetchGoals = async () => {
        const res = await fetch(API_BASE);
        const data = await res.json();
        setGoals(data);
    };

    const addGoal = async (goal) => {
        if (goal === null || goal === undefined) {
            return 
        }
        const res = await fetch(API_BASE, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(goal),
        });
        const newGoal = await res.json();
        setGoals([...goals, newGoal]);
    };

    const updateGoal = async (id, updatedFields) => {
        const res = await fetch(`${API_BASE}/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedFields),
        });
        const updatedGoal = await res.json();
        setGoals(goals.map((g) => (g.id === id ? updatedGoal : g)));
    };

    const deleteGoal = async (id) => {
        await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
        setGoals(goals.filter((g) => g.id !== id));
    };

    return (
        <div className="space-y-6">
            <OverviewStats goals={goals} />
            <div className="goaldepositrow">
                <div className="goalform">
                    <GoalForm onAdd={addGoal} />
                </div>
                <div className="depositgoal">
                    <DepositForm goals={goals} onDeposit={updateGoal} />
                </div>

            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {goals.map((goal) => (
                    <GoalCard
                        key={goal.id}
                        goal={goal}
                        onUpdate={updateGoal}
                        onDelete={deleteGoal}
                    />
                ))}
            </div>
        </div>
    );
};

export default GoalDashboard;