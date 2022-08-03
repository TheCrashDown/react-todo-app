import React from "react";

import Header from '../header'
import List from '../list'
import './app.css'

export default class App extends React.Component {

    id = 10;

    state = {
        pinned: [],
        items: []
    }

    onDeleteClick = (key) => {
        this.setState((state) => {
            let idx_deleted = state.items.findIndex(item => item.id === key)
            if (idx_deleted !== -1) {
                const newItems = [...state.items.slice(0, idx_deleted),
                    ...state.items.slice(idx_deleted + 1)]
                return {items: newItems}
            }
            idx_deleted = state.pinned.findIndex(item => item.id === key)
            const newPinned = [...state.pinned.slice(0, idx_deleted),
                ...state.pinned.slice(idx_deleted + 1)]
            return {pinned: newPinned}
        })
    }

    onPinClick = (key) => {
        this.setState((state) => {
            let idx = state.items.findIndex(item => item.id === key)
            if (idx !== -1) {
                // pin element
                const moved_item = state.items[idx]
                moved_item.pinned = true
                const newPinned = [...state.pinned,
                                   moved_item]
                const newItems = [...state.items.slice(0, idx),
                                  ...state.items.slice(idx + 1)]
                return {items: newItems, pinned: newPinned}
            }
            // unpin element
            idx = state.pinned.findIndex(item => item.id === key)
            const moved_item = state.pinned[idx]
            moved_item.pinned = false
            const newPinned = [...state.pinned.slice(0, idx),
                ...state.pinned.slice(idx + 1)]
            const newItems = [...state.items,
                              moved_item]
            return {items: newItems, pinned: newPinned}
        })
    }

    onInputCommit = (message) => {
        this.setState((state) => {
            const items = [...state.items,
                           {id:++this.id, 
                            label: message,
                            onDeleteClick: this.onDeleteClick,
                            onPinClick: this.onPinClick}]
            return {items: items}
        })
    }

    render() { 
        return (
            <div className="todos-body"> 
                <Header onInputCommit={this.onInputCommit}/> 
                <List pinned={this.state.pinned} items={this.state.items}/>
            </div>
        )
        
    }
}

