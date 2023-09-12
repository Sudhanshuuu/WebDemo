import React from "react";
import styles from "./Head.module.css";
import beerImg from "./beer.jpg";

function Head() {
    return (<div className={styles["main"]}>

        <img src={beerImg}  className={styles["background"]} alt="beerImg" />
        <div className={styles["head"]}>
            <div>Since 2000</div>
            <div>Beer Matter</div>
            <div>Choose the beer which matches you</div>
        </div>


    </div>)
}

export default Head;