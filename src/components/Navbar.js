import React from 'react';
import './component.css';

export default function Navbar({setScrollId}){


    const navItem = (name, path)=>{
        return(
            <div onClick={()=>{setScrollId(path)}} className="nav-item">
               {name}
            </div>
        )
    }

    return(
        <div className="navbar-container">
            <div className="navbar-left">Rahul Krishna</div>
            <div className="navbar-right">
                {navItem('Experience', 1)}
                {navItem('Projects', 2)}
                {navItem('Skills', 3)}
                {navItem('Education', 4)}

            </div>
        </div>
    )
}