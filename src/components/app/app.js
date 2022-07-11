import React from "react";

import Header from '../header'
import List from '../list'
import './app.css'

export default class App extends React.Component {

    id = 4;

    state = {
        items: [
            {id:1, label: "Item 1"},
            {id:2, label: "Item 2"},
            {id:3, label: "Item 3"}
        ]
    }

    onInputCommit = (message) => {
        this.setState((state) => {
            const items = [...state.items,
                           {id:++this.id, label: message}]
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

