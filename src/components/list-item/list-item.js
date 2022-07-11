import React from "react";

import './list-item.css'

const ListItem = ({ label }) => {
    return <span className="list-group-item">{label}</span>
}

export default ListItem