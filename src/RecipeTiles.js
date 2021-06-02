import React from 'react';
//Adding css to style recipetiles
import "./RecipeTile.css";

export default function RecipeTiles({recipe}) {
    return (
        //This condition wil accept only recipies of image type mentioned below
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/)
        != null && (
            <div className = "recipeTiles" onClick={() => {
                window.open(recipe["recipe"]["url"])

            }}>
            <img className="recipeTile_img"src={recipe["recipe"]["image"]}/>
            <p className="recipeTile_label">{recipe["recipe"]["label"]}</p>
            
        </div>
        )
    );
}
