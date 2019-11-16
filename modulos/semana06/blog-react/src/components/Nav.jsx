import React from 'react'
import {
    Link
} from "react-router-dom";
import './Nav.css'
export default function Nav() {
    return (
        <nav>
            <div className="nav-bar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>    
        </nav>
    
            
    
    )
}
