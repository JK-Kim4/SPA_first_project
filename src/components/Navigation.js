import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"

function Navigation(){
    return ( 
    <div className="nav">
        <Link to="/">home</Link>
        <Link to="/company">Company</Link>
        <Link to="/member">Members</Link>
        <Link to="/map">location</Link>
    </div>
    );
}

export default Navigation;