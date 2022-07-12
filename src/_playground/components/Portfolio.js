import React from "react";
import { NavLink } from "react-router-dom";

const Portfolio = () => {
    const portfolio = [1, 2, 3, 4, 5]
    return (
        <div>
            <h2>My Work</h2>
            <p>Checkout the following things I've done!</p>
            {portfolio.map((p, index) => <NavLink to={"/portfolio/" + p}>Item number {index + 1}</NavLink>)}
        </div>
    )
}

export default Portfolio