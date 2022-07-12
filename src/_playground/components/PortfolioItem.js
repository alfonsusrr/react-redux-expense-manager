import React from "react";
import { useParams } from "react-router-dom";

const PortfolioItem = () => {
    let params = useParams()
    return (
        <div>
            <h1>The things I've done...</h1>
            <p>This is my site. Take a look at portfolio number {params.id}</p>
        </div>
    )
}

export default PortfolioItem