import React from "react";

import Header from '../header'
import List from '../list'
import './app.css'

export default class App extends React.Component {

    id = 1;

    state = {
        items: []
    }

    onDeleteClick = (key) => {
        this.setState((state) => {
            const idx_deleted = state.items.findIndex(item => item.id === key)
            const items = [...state.items.slice(0, idx_deleted),
                           ...state.items.slice(idx_deleted + 1)]
            return {items: items}
        })
    }

    onInputCommit = (message) => {
        this.setState((state) => {
            const items = [...state.items,
                           {id:++this.id, 
                            label: message,
                            onDeleteClick: this.onDeleteClick}]
            return {items: items}
        })
    }

    render() { 
        return (
            <div className="todos-body"> 
                <Header onInputCommit={this.onInputCommit}/> 
                <List items={this.state.items}/>
            </div>
        )
        
    }
}

