import React, { Component } from 'react'
import ImageItem from './ImageItem';

export default class ImageList extends Component {
    state = {
        keyFilter: '',
        hornFilter: ''
    }

    Filter1 = e => {
        this.setState({
            keyFilter: e.target.value
        });
    }

    Filter2 = e => {
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
                <span className='filter-text'>Filter animals by keyword or number of horns: </span>
                <select className='dropdown' onChange={this.Filter1}>
                    <option value=''>Show All</option>
                    <option value='rhino'>Rhino</option>
                    <option value='narwhal'>Narwhal</option>
                    <option value='unicorn'>Unicorn</option>
                    <option value='unilego'>Unilego</option>
                    <option value='triceratops'>Triceratops</option>
                    <option value='markhor'>Markhor</option>
                    <option value='mouflon'>Mouflon</option>
                    <option value='addax'>Addax</option>
                    <option value='chameleon'>Chameleon</option>
                    <option value='lizard'>Lizard</option>
                    <option value='dragon'>Dragon</option>
                </select>
                <select onChange={this.Filter2} >
                    <option value=''>Show All</option>
                    <option value='1'>Just One</option>
                    <option value='2'>Two</option>
                    <option value='3'>Three</option>
                    <option value='100'>100</option>
                </select>
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
