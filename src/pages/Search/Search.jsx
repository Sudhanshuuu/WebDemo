import React, { useState , useEffect} from "react";
import axios from "axios";
import styles from "./Search.module.css";
import { useParams } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import Card from "../../components/Card/Card";

function Search() {

    let { name } = useParams();
    let [data, setData] = useState([]);

    useEffect(() => {
        let fetchData = async () => {
            try {
                const res = await axios.get(`https://api.punkapi.com/v2/beers?beer_name=${name}`);

                console.log(res.data);
                setData(res.data);

            }
            catch (err) {
                console.log(err);
            }
        }

        fetchData()
    },
        [name]);

    return (<div>
        <Nav />
        <div  className={styles["searchBody"]}>
        {
            data.map((d, index) => { return <Card beer={d} key={index} /> })

        }
        </div>
    </div>)
}

export default Search;