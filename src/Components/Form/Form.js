import React from 'react';
import "./form.css";

const Form = (props) => {

    return (
        <div className="centre">
            <input
                type="text"
                placeholder="Cocktail Name"
                onChange={(event) => {
                    props.findByName (event.target.value)
                }}
            />
            <select
                placeholder="Enter name..."
                onChange={(event) => props.filterCocktail (event.target.value)}
            >
                <option value="All">All</option>
                <option value="Alcoholic">Alcoholic</option>
                <option value="Non_Alcoholic">Non Alcohol</option>
            </select>
        </div>
    );
};

export default Form;