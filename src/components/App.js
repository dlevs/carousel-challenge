import React, { Component, Fragment } from 'react';
import Carousel from './Carousel';
import './App.css';

let uniqueSlideId = 0;

class App extends Component {
  state = {
    slides: [],
    slideTextInputValue: '',
  };

  handleSlideTextInputChange = ({ target }) => {
    this.setState({ slideTextInputValue: target.value });
  }

  handleSlideTextFormSubmit = (event) => {
    const { slideTextInputValue } = this.state;

    event.preventDefault();
    this.setState(({ slides }) => ({
      slides: slides.concat({
        id: uniqueSlideId++,
        text: slideTextInputValue,
      }),
      slideTextInputValue: '',
    }));
  }

  render() {
    const { slides, slideTextInputValue } = this.state;
    return (
      <Fragment>
        <form onSubmit={this.handleSlideTextFormSubmit}>
          <label htmlFor="input-slide-text">Slide text</label>
          <input
            id="input-slide-text"
            type="text"
            placeholder="Enter a title"
            value={slideTextInputValue}
            onChange={this.handleSlideTextInputChange}
          />
          <button type="submit">Add new slide</button>
        </form>
        <Carousel slides={slides} />
      </Fragment>
    );
  }
}

export default App;
