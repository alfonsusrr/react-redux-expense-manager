import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    const activeClassName = 'is-active'

    return (
        <nav>
            <NavLink to="/" 
                     className={({isActive}) => isActive ? activeClassName : undefined }
            >
                Home
            </NavLink>
            <NavLink to="/create" 
                     className={({isActive}) => isActive ? activeClassName : undefined }
            >
                Add Expense
            </NavLink>
            <NavLink to="/edit" 
                     className={({isActive}) => isActive ? activeClassName : undefined }
            >
                Edit Expense
            </NavLink>
            <NavLink to="/help" 
                     className={({isActive}) => isActive ? activeClassName : undefined }
            >
                Help
            </NavLink>
        </nav>
    )
}

export default Nav