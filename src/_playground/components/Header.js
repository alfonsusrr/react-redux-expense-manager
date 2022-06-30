import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const activeClassName = 'is-active'
    return (
        <div>
            <h1>Portfolio</h1>
            <nav>
                <NavLink to='/' className={({isActive}) => isActive ? activeClassName : undefined}>Home</NavLink>
                <NavLink to='/portfolio' className={({isActive}) => isActive ? activeClassName : undefined}>Portfolio</NavLink>
                <NavLink to='/contact' className={({isActive}) => isActive ? activeClassName : undefined}>Contact</NavLink>
            </nav>
        </div>
    )
}

export default Header