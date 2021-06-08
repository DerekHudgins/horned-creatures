import React, { Component } from 'react'
import ImageItem from './ImageItem';

export default class ImageList extends Component {
    state = {
        keyFilter: '',
        hornFilter: ''
    }

    handleChange1 = e => {
        this.setState({
            keyFilter: e.target.value
        });
    }

    handleChange2 = e => {
        this.setState({
            hornFilter: e.target.value
        });
    }

    
    render() {
        const keyAnimals = this.props.images.filter((animal) => {
            if (!this.state.keyFilter) return true;
            if (animal.keyword === this.state.keyFilter) return true;
            return false;
        });
        const FilteredAnimals = keyAnimals.filter((animal) => {
            if (!this.state.hornFilter) return true;
            if (+animal.horns === +this.state.hornFilter) return true;
            return false;
        });
        return (
            
            <div>
                <div className='image-list'>
                    {
                    FilteredAnimals.map(animal =>
                    <ImageItem
                    url={animal.url}
                    title={animal.title}
                    description={animal.description}
                    keyword={animal.keyword}
                    horns={animal.horns} />)
                    }

                </div>
            
                
            </div>
        )
        
    }
}
