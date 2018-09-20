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
          <div className="slide-text-form--content">
            <label
              htmlFor="input-slide-text"
              className="visually-hidden"
            >
              New slide text
            </label>
            <input
              id="input-slide-text"
              type="text"
              placeholder="Enter a title"
              className="flex-1"
              value={slideTextInputValue}
              onChange={this.handleSlideTextInputChange}
            />
            <button
              type="submit"
              className="btn--bordered"
            >
              Add New Slide
            </button>
          </div>
        </form>
        <Carousel slides={slides} />
      </Fragment>
    );
  }
}

export default App;
