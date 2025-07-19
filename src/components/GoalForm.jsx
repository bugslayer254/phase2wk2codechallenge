
import React, { useState } from "react";

const initialForm = {
    name: "",
    targetAmount: "",
    category: "",
    deadline: "",
};

const GoalForm = ({ onAdd }) => {
    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };
    const handleSubmit = () => {
        const newGoal = {
            ...form,
            targetAmount: parseFloat(form.targetAmount),
            savedAmount: 0,
            createdAt: new Date().toISOString().split("T")[0],
        };

        onAdd(newGoal);
        setForm(initialForm);

    }


    return (

        <form onSubmit={handleSubmit} className="goal-form-input">
            <h2 className="add-goal">Add New Goal</h2>

            <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Goal Name"
                className="goal-form"
                required
            />

            <input
                type="number"
                name="targetAmount"
                value={form.targetAmount}
                onChange={handleChange}
                placeholder="Target Amount"
                className="goal-form"
                required
            />

            <input
                type="text"
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="Category (e.g. Travel, Emergency)"
                className="goal-form"
                required
            />

            <input
                type="date"
                name="deadline"
                value={form.deadline}
                onChange={handleChange}
                className="goal-form"
                required
            />

            <button type="submit" className="button">
                Add Goal
            </button>
        </form>
    );
};
export default GoalForm;