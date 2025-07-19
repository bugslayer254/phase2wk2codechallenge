import React from "react";

const GoalCard = ({ goal, onUpdate, onDelete }) => {
    const progress = (goal.savedAmount / goal.targetAmount) * 100;
    const remaining = goal.targetAmount - goal.savedAmount;
    return (
        <div className="border p-4 rounded shadow-md bg-white">
            <h2 className="text-xl font-semibold mb-2">{goal.name}</h2>
            <p>Category: {goal.category}</p>
            <p>Target: KES {goal.targetAmount}</p>
            <p>Saved: KES {goal.savedAmount}</p>
            <p>Remaining: KES {remaining}</p>
            <div className="progress-container">
                <div
                    className="progress-bar"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <div className="flex justify-between mt-4">
                <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => onDelete(goal.id)}
                >
                    Delete
                </button>

            </div>
        </div>
    );
};







export default GoalCard;