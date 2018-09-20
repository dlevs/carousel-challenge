import React, { Component } from 'react';
import Carousel from './Carousel';
import './App.css';

class App extends Component {
  render() {
    return (
      <Carousel slidesToShow={2} />
    );
  }
}

export default App;
