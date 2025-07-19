
import React, { useState } from "react";
import "./depositform.css";

const DepositForm = ({ goals, onDeposit }) => {
    const [selectedGoalId, setSelectedGoalId] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const goal = goals.find((g) => g.id === selectedGoalId);
        if (!goal) return;

        const updatedAmount = parseFloat(amount);

        onDeposit(goal.id, { savedAmount: updatedAmount });


        setSelectedGoalId("");
        setAmount("");
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="goal-form-input">
                <h2 className="text-xl font-semibold mb-4">Update Deposit</h2>

                <select
                    value={selectedGoalId}
                    onChange={(e) => setSelectedGoalId(e.target.value)}
                    className="goal-form"
                    required
                >
                    <option value="">Select a Goal</option>
                    {goals.map((goal) => (
                        <option key={goal.id} value={goal.id}>
                            {goal.name}
                        </option>
                    ))}
                </select>

                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="New Deposit Amount"
                    className="goal-form"
                    required
                />

                <button type="submit" className="button">
                    Deposit
                </button>
            </form>
        </div>
    );
};




export default DepositForm;