import React from "react";

import ListItem from '../list-item'
import './list.css'

const List = ({ items, pinned }) => {

    const mapping = (array) => {
        return array.map((item) => {
            const { id, label, onDeleteClick, onPinClick, pinned } = item
            return <ListItem key={id} 
                             label={label} 
                             onDeleteClick={() => onDeleteClick(id)}
                             onPinClick={() => onPinClick(id)}
                             pinned={pinned} />
        })
    }

    const map_items = mapping(items)
    const map_pinned = mapping(pinned)

    return (
    <div>
        <ul className="list-group todos-list">{ map_pinned }</ul>
        <ul className="list-group todos-list">{ map_items }</ul>
    </div>  
    )
}

export default List
