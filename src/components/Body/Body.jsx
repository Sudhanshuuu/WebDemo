import React, { useEffect, useState } from "react";
import styles from "./Body.module.css";
import axios from "axios";
import Card from "../Card/Card";


function Body() {

    let [data, setData] = useState([]);
    let [page, setPage] = useState(6);


    useEffect(() => {
        let fetchData = async () => {
            try {
                const res = await axios.get(`https://api.punkapi.com/v2/beers?page=1&per_page=${page}`);

                console.log(res.data);
                setData(res.data);

            }
            catch (err) {
                console.log(err);
            }
        }

        fetchData()
    },
        [page]);

    useEffect(() => {
        let body = document.querySelector(".Home");

        body.addEventListener("scroll", () => {

            if (body.scrollTop + window.innerHeight + 1 >=
                body.scrollHeight) {
                setPage((prev) => { return prev + 6 })
            }
        })
    }, [])

    return (<div className={styles["body"]}>
        {
            data.map((d, index) => { return <Card beer={d} key={index} /> })

        }
    </div>)
}

export default Body;