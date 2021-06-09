import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <div className ='animal-section'>
                <div className='image-section'>
                    <img src={this.props.url} alt='animals'/>
                </div>
                <h2>{this.props.title}</h2>
                <p>{this.props.discription}</p>
                <span className='fineprint'>
                    <p>keyword: {this.props.keyword}</p>
                    <p>Number of horns: {this.props.horns}</p>
                </span>
                
            </div>
        )
    }
}
