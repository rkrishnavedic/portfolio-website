import React from 'react';
import './component.css';

export default function Navbar(){


    const navItem = (name, path)=>{
        return(
            <a href="/" className="nav-item">
               {name}
            </a>
        )
    }

    return(
        <div className="navbar-container">
            <div className="navbar-left">Rahul Krishna</div>
            <div className="navbar-right">
                {navItem('Experience', '#')}
                {navItem('Projects', '#')}
                {navItem('Skills', '#')}
                {navItem('Education', '#')}

            </div>
        </div>
    )
}