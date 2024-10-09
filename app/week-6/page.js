"use client";
import dogsJson from './dogs.json';
import Image from 'next/image';
import {useState} from 'react';

export default function Page() {
    const [selectedDogId, setSelectedDogId] = useState(-1);

    let dogs=[...dogsJson];
    dogs.sort((a,b) => a.name.localeCompare(b.name));

    dogs = dogs.filter((dog) => dog.name.length > 3);

    const handleClick = (id) => {
        if (selectedDogId === id) {
            setSelectedDogId(-1);
            return;
        }
        setSelectedDogId(id);
    };

    return (
        <main className="p-2">
            <h1 className="text-2xl font-semibold">Week 6</h1>
            <p>Current id: {selectedDogId}</p>
        <ul>
            {dogs.map(dog => (
                <li key={dog.name} className={`py-2 m-2 ${dog.id === selectedDogId ? "bg-gray-400" : "bg-gray-100"}`} 
                onClick={()=>handleClick(dog.id)}>
                    <h2 className="text-xl font-semibold">{dog.name}</h2>
                    <p className="text-sm italic">{dog.description}</p>
                    <p><Image src={dog.imageUrl} alt={dog.name} width={360} height={180}></Image></p>
                </li>
            ))}
        </ul>
        </main>
    )
}