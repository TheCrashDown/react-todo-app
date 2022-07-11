import React from "react";

import './header.css'

const Header = () => {
    return <div>
        <h1 className="todos-header"> notes </h1>
        <input className="todos-input form-control" placeholder="type anything..."/>
    </div>
}

export default Header