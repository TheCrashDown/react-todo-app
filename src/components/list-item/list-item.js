import React from "react";

import './list-item.css'

const ListItem = ({ label, onDeleteClick, onPinClick, pinned }) => {

    let background =  "list-group-item"
    let pin_icon = "bi"
    if (pinned) {
        background += " pinned"
        pin_icon += " bi-pin-angle-fill"
    } else {
        background += " simple"
        pin_icon += " bi-pin-angle"
    }

    return (
        <div className={ background }>
            <span className="todo-item-text">{label}</span>

            <button type="button" className="btn btn-sm todo-item-remove-button" onClick={onDeleteClick}>
                <i className="bi bi-trash"></i>
            </button>

            <button type="button" className="btn btn-sm todo-item-pin-button" onClick={onPinClick}>
                <i className={pin_icon}></i>
            </button>
        </div>
    )
}

export default ListItem