import React from "react";

import './header.css'

class InputListener extends React.Component {

    state = {
        label: ""
    }

    handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        if (this.state.label.trim() !== ""){
            this.props.onInputCommit(this.state.label);
        }

        this.setState({label: ""})
      }
    }

    onChange = (event) => {
        this.setState({
            label: event.target.value
        })
    }

  
    render() {
        return <input className="todos-input form-control" 
                      placeholder="type anything..." 
                      onKeyDown={this.handleKeyDown}
                      onChange={this.onChange}
                      value={this.state.label} />
        }
  }

const Header = ({ onInputCommit }) => {
    return <div>
        <h1 className="todos-header"> notes </h1>
        <InputListener onInputCommit={onInputCommit}/>
    </div>
}

export default Header