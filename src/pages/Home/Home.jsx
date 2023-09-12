import React from "react";
import  "./Home.css";
import Head from "../../components/Head/Head";
import Nav from "../../components/Nav/Nav";
import Body from "../../components/Body/Body";

function Home() {
    return (<div className="Home">
        <Nav />
        <Head />
        <Body />
    </div>)
}

export default Home;