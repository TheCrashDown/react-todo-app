import React from "react";

import './list-item.css'

const ListItem = ({ label, onDeleteClick }) => {
    return <div className="list-group-item">
        <span className="todo-item-text">{label}</span>

        <button type="button" className="btn btn-sm todo-item-remove-button" onClick={onDeleteClick}>
            <i className="bi bi-trash"></i>
        </button>

        <button type="button" className="btn btn-sm todo-item-pin-button">
            <i className="bi bi-pin-angle"></i>
        </button>
        
    </div>
}

export default ListItem