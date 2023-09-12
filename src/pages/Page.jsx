import React from "react";
import Home from "./Home/Home";
import { Routes, Route } from "react-router-dom";
import Search from "./Search/Search";
import ProductPage from "./ProductPage/ProductPage";

function Pages() {
    return (<>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:name" element={<Search />} />
            <Route path="/beer/:id" element={<ProductPage />} />
        </Routes>
    </>)
}

export default Pages;