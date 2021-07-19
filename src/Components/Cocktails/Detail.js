import React, {useEffect, useState} from 'react';
import {DETAIL_COCTAIL_API} from "../../config/config";
import { Link } from "react-router-dom";
import "./detail.css";


const Detail = (props) => {
    const id = props.match.params.id
    const [cocktail, setCocktail] = useState([])

    const getFullInfoByCocktail = async (id) => {
        let request = await fetch(DETAIL_COCTAIL_API + id)
        let response = await request.json()
        console.log(response.drinks[0])
        setCocktail(response.drinks[0])
    }

    useEffect(() => {
        getFullInfoByCocktail(id)
    },[])

    return (
        <div className="everything">
            <h1>Detail</h1>
            <img src={cocktail.strDrinkThumb} width="350" alt=""/>
            <h2>Name is: {cocktail.strDrink}</h2>
            <strong>Glass: {cocktail.strGlass}</strong>
            <p>Instructions:</p>
            <p>{cocktail.strInstructions}</p>
            <h4>Ingredients:</h4>
        <div className="link">
            <Link className="dark" to={"/ingredients/" + cocktail.strIngredient1}>{cocktail.strIngredient1}</Link>
            <Link className="light" to={"/ingredients/" + cocktail.strIngredient2}>{cocktail.strIngredient2} </Link>
            <Link className="vodka" to={"/ingredients/" + cocktail.strIngredient3}>{cocktail.strIngredient3}</Link>
            <Link className="juice" to={"/ingredients/" + cocktail.strIngredient4}>{cocktail.strIngredient4}</Link>
        </div>
            <h4>Measure:</h4>
            <ul>
                <li>{cocktail.strMeasure1}</li>
                <li>{cocktail.strMeasure2}</li>
                <li>{cocktail.strMeasure3}</li>
                <li>{cocktail.strMeasure4}</li>
            </ul>
        </div>
    );
};

export default Detail;