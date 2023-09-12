import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../../components/Nav/Nav";
import styles from "./ProductPage.module.css";
import { useParams } from "react-router-dom";

function ProductPage() {

    let { id } = useParams();
    let [details, setDetails] = useState([{}]);
    let [active, setActive] = useState("instructions");



    useEffect(() => {
        let fetchData = async () => {
            try {
                const res = await axios.get(`https://api.punkapi.com/v2/beers/${id}`);

                console.log(res.data);
                setDetails(res.data);

            }
            catch (err) {
                console.log(err);
            }
        }

        fetchData();
    },
        [id]);

    return (<>
        <Nav />
        <div className={styles["box"]}>
            <div className={styles["container"]}>

                <div className={styles["intro"]}>
                    <p>{details[0].name}</p>
                    <img src={details[0].image_url} alt="beerImg" />
                </div>
                <div className="content">

                    <button onClick={() => { setActive("instructions") }}>Summary</button>
                    <button onClick={() => { setActive("ingredients") }}>Food Pairing</button>
                    {active === "instructions" ? (<div><p dangerouslySetInnerHTML={{ __html: details[0].description }}></p><p dangerouslySetInnerHTML={{ __html: details[0].brewers_tips }}></p></div>) : (<ul>{details[0].food_pairing.map((f, index) => { return <li key={index}>{f}</li> })}</ul>)}

                </div>
            </div>
        </div>
    </>)
}

export default ProductPage;