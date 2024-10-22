"use client";

import { useState } from 'react';

export default function DogForm({ onAddDog }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newId = Math.floor(Math.random() * 1000000);
        const newDog = { id: newId, name, age };
        onAddDog(newDog);
        setName("");
        setAge(0);
        }

    return (
        <div>
            <h2 className="text-2xl">Add Dog</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className="text-black"
                    />
                </label>
                <label>Age:
                    <input
                        type="number"
                        value={age}
                        onChange={(event) => setAge(parseInt(event.target.value))}
                        className="text-black"
                    />
                </label>
                <button type="submit">Add Dog</button>
            </form>
        </div>
    );
}