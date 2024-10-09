"use client";

import {useState} from "react";

export default function Dog() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState(0);

    const handleNameChange = (event) => {
        let name = event.target.value;
        name = name.replace(/[^A-Za-z]/g, "");
        setName(name);
    };
    const handleBreedChange = (event) => {
        let breed = event.target.value;
        breed = breed.replace(/[^A-Za-z]/g, "");
        setBreed(breed);
    };
    const handleAgeChange = (event) => {
        let age = event.target.value;
        age = parseInt(age);
        if(isNaN(age)) {
            age = 0;
        }
        if (age < 0) {
            age = 0;
        }
        setAge(age);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let dog = { name, breed, age };
        console.log(dog);
    }


    return(
        <div className="m-2">
            <h2 className="text-2xl">Dog</h2>
            <form className="m-2" onSubmit={(event)=>handleSubmit(event)}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(event) => handleNameChange(event)} />
                <label htmlFor="breed">Breed:</label>
                <input type="text" id="breed" value={breed} onChange={(event) => handleBreedChange(event)} />
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" value={age} onChange={(event) => handleAgeChange(event)} />
                <input type="submit" value="Add Dog" className="m-2 bg-blue-500"/>
            </form>
            <div className="text-xl"><p>Name: {name.length >=3 ? name : "Name too short"}</p>
            <p>Breed: {breed}</p>
            <p>Age: {age}</p></div>
        </div>
    );
}