import React, {useEffect, useState} from 'react';
import { SEARCH_BY_INGR } from "../../config/config";
import "./ingredients.css";


const Ingredients = (props) => {
    const iName = props.match.params.ing

    const [info, setInfo] = useState('')


    const getIngredientInfo = async (ingredientName) => {
        const request = await fetch( SEARCH_BY_INGR + ingredientName)
        const response = await request.json()
        setInfo(response.ingredients[0])
    }

    useEffect(() => {
        getIngredientInfo(iName)
    },[])

    return (
        <div className="ev">
            <h1>Ingredients</h1>

            {
                info?
                    <>
                     <h2>{info.strIngredient}</h2>
                     <p>{info.strDescription}</p>
                    </>
                    :
                    null
            }
        </div>
    );
};

export default Ingredients;