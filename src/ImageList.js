import React, { Component } from 'react'
import ImageItem from './ImageItem';

export default class ImageList extends Component {
   
    render() {
       
        return (
            <div>
                {this.props.images.map(image => <ImageItem url={image.url} keyword={image.description} description ={image.description} horns={image.horns}/>)}
            
            </div>
        )
        
    }
}
