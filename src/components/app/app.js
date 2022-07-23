import React from "react";

import Header from '../header'
import List from '../list'
import './app.css'

export default class App extends React.Component {

    id = 10;

    state = {
        pinned_items: [
            {id:1, label:'Pinned 1', pinned:true},
            {id:2, label:'Pinned 2', pinned:true},
            {id:3, label:'Pinned 3', pinned:true}
        ],
        items: [            
            {id:4, label:'Simple 1', pinned:false},
            {id:5, label:'Simple 2', pinned:false},
            {id:6, label:'Simple 3', pinned:false}
        ]
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
                <List items={this.state.pinned_items}/>
                <List items={this.state.items}/>
            </div>
        )
        
    }
}

