import React, { useState } from "react";
import searchIcon from "./search-alt.svg";
import styles from "./Nav.module.css";
import { useNavigate } from "react-router-dom";

function Nav() {

    let [search, setSearch] = useState("");
    let navigate = useNavigate();

    function handleChange(e) {
        setSearch(() => { return e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        navigate(`/${search}`);
    }

    return (<div className={styles["nav"]}>
        <form className={styles["form"]} onSubmit={handleSubmit}>

            <img src={searchIcon} alt="searchIcon" />
            <input type="text" onChange={handleChange} className={styles["searchBar"]} placeholder="Search Your Beer" value={search} />

        </form>
    </div>)
}

export default Nav;