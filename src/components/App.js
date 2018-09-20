import React, { Component } from 'react';
import Carousel from './Carousel';
import './App.css';

let uniqueSlideId = 0;

class App extends Component {
  render() {
    return (
      <Carousel
        slides={[
          { id: uniqueSlideId++, text: 'Slide 1' },
          { id: uniqueSlideId++, text: 'Slide 2' },
          { id: uniqueSlideId++, text: 'Slide 3' },
          { id: uniqueSlideId++, text: 'Slide 4' },
        ]}
      />
    );
  }
}

export default App;
