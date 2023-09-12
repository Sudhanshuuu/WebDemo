import React from "react";
import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";

function Card(props) {

    let beer = props.beer;
    let navigate =  useNavigate();

    function handleClick(){
        navigate(`/beer/${beer.id}`);
    }


    return (<div className={styles["card"]} onClick={handleClick}>


        <div >
            <img src={beer.image_url} alt={beer.name} />
        </div>

        <div className={styles["card-info"]}>

            <div className={styles["name"]}>{beer.name}</div>
            <div className={styles["tagline"]}>{beer.tagline} </div>
            <div className={styles["yeast"]}>{beer.ingredients.yeast}</div>

        </div>


    </div>)


}

export default Card;