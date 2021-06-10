import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <div>
                <select onChange={this.props.handleChange}>
                <option value = ''>Show All</option> 
                  {this.props.options
                    .map(option => 
                      <option value={option}>{option}</option>)}
            </select>
            </div>
        )
    }
}
