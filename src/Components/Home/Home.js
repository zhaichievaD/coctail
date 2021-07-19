import React, { useState, useEffect } from 'react';
import {ALLCOCTAILS_API, FILTER, SEARCH_COCTAIL_BY_NAME} from "../../config/config";
import Form from '../Form/Form';
import Output from '../Output/Output';

const Home = () => {

    const [cocktails, setCocktails] = useState([])

    const getAllCoctails = async () => {
        const request = await fetch( ALLCOCTAILS_API )
        const response = await request.json()
        setCocktails(response.drinks)
    }

    const findByName = async (name) => {
        if(name.length >= 3 ) {
        const request = await fetch(SEARCH_COCTAIL_BY_NAME + name)
        const responce = await request.json()
        setCocktails(responce.drinks)
        }else {
            getAllCoctails()
        }
    }

    const filterCocktail = async (filter) => {
        if(filter ==='ALL') {
            getAllCoctails()
        }else{
            const request = await fetch(FILTER + filter)
            const responce = await request.json()
            setCocktails(responce.drinks)
        }
    }

    useEffect(() => {
        getAllCoctails()
    }, [])

    return (
        <div>
            <Form findByName={findByName}
                  filterCocktail={filterCocktail}
            />
            <Output cocktails={cocktails} />
        </div>
    );
};

export default Home;