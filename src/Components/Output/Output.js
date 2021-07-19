import React from 'react';
import {Link} from "react-router-dom";
import "./output.css";


const Output = (props) => {
    return (
        <div className="all">
            {
                props.cocktails ?
                    props.cocktails.map((element, id) => {
                        return (
                            <Link  className="ll" to={"/detail/" + element.idDrink} key={id}>
                                <div className="card">
                                    <h2>{element.strDrink}</h2>
                                    <img width="250" height={250} src={element.strDrinkThumb} alt="" />
                                </div>
                            </Link>
                        )
                    })
                    :
                    <h2>Loading...</h2>
            }
        </div>
    );
};

export default Output;