import './App.css';
import images from'./data.js';
import Header from'./Header.js';
import ImageList from'./ImageList.js';
import React, { Component } from 'react'
import Dropdown from './Dropdown';


export default class App extends Component { 
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
render(){
  const key = Array.from(new Set(images.map(animal => animal.keyword)))
  const horn = Array.from(new Set(images.map(animal => animal.horns)))
  let keyAnimals = images.filter((animal) => {
    if (!this.state.keyFilter) return true;
    if (animal.keyword === this.state.keyFilter) return true;
    return false;
});
  keyAnimals = keyAnimals.filter((animal) => {
    if (!this.state.hornFilter) return true;
    if (+animal.horns === +this.state.hornFilter) return true;
    return false;
});
  return (
    <div className="App">
      <Header />
      <span>Filter animals by keyword</span>
      <Dropdown
      options={key}
      handleChange={this.Filter1}/>
      <span>Filter animals by number of horns</span>
      <Dropdown
      options={horn}
      handleChange={this.Filter2}/>
      
      <ImageList images={keyAnimals} />
    </div>
  );
}

}
