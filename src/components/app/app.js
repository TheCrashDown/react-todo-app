import React from "react";

import Header from '../header'
import List from '../list'
import './app.css'

export default class App extends React.Component {

    state = {
        items: [
            {id:1, label: "Item 1"},
            {id:2, label: "Item 2"},
            {id:3, label: "Item 3"}
        ]
    }

    render() { 
        return (
            <div className="todos-body"> 
                <Header /> 
                <List items={this.state.items}/>
            </div>
        )
        
    }
}

