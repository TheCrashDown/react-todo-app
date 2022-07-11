import React from "react";

import ListItem from '../list-item'
import './list.css'

const List = ({ items }) => {
    const map = items.map((item) => {
        const { id, label } = item
        return <ListItem key={id} label={label} />
    })
    return <ul className="list-group todos-list">{ map }</ul>
}

export default List
