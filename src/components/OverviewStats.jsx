import React from "react";

const OverviewStats = ({ goals }) => {
    const totalGoals = goals.length;
    const totalSaved = goals.reduce((sum, g) => sum + g.savedAmount, 0);
    const goalsCompleted = goals.filter((g) => g.savedAmount >= g.targetAmount).length;

    const today = new Date();

    const getDaysLeft = (deadline) => {
        const deadlineDate = new Date(deadline);
        const timeDiff = deadlineDate - today;
        return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    };

    return (
        <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <p>Total Goals: {totalGoals}</p>
            <p>Total Saved: KES {totalSaved.toLocaleString()}</p>
            <p>Goals Completed: {goalsCompleted}</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">Warnings</h3>
            {goals.map((goal) => {
                const daysLeft = getDaysLeft(goal.deadline);
                const isCompleted = goal.savedAmount >= goal.targetAmount;

                if (isCompleted) return null;

                if (daysLeft < 0) {
                    return (
                        <p key={goal.id} className="text-red-600">
                            ⚠️ {goal.name} is overdue (deadline passed).
                        </p>
                    );
                } else if (daysLeft <= 30) {
                    return (
                        <p key={goal.id} className="text-yellow-600">
                            ⏳ {goal.name} has only {daysLeft} days left!
                        </p>
                    );
                }

                return null;
            })}
        </div>
    );
};

export default OverviewStats;



