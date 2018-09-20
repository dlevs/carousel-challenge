import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import './Carousel.css';

let uniqueSlideId = 0;

const ButtonNext = ({ onClick }) => <button onClick={onClick}>&lt;</button>
const ButtonPrevious = ({ onClick }) => <button onClick={onClick}>&gt;</button>

class Carousel extends Component {
    static propTypes = {
        slidesToShow: PropTypes.number.isRequired,
    };

    state = {
        slides: [
            { id: uniqueSlideId++, text: 'Slide 1' },
            { id: uniqueSlideId++, text: 'Slide 2' },
            { id: uniqueSlideId++, text: 'Slide 3' },
            { id: uniqueSlideId++, text: 'Slide 4' },
        ],
        currentSlideIndex: 0
    };

    carouselTrack = createRef();

    goToNextSlide = () => {
        this.setState(({ slides, currentSlideIndex }) => ({
            currentSlideIndex: Math.min(currentSlideIndex + 1, slides.length)
        }));
    }

    goToPreviousSlide = () => {
        this.setState(({ currentSlideIndex }) => ({
            currentSlideIndex: Math.max(currentSlideIndex - 1, 0)
        }));
    }

    componentDidUpdate() {
        const track = this.carouselTrack.current;
        const { currentSlideIndex } = this.state;
        const currentSlide = track.children[currentSlideIndex];
        const { left } = currentSlide.getBoundingClientRect();

        console.log(currentSlide.getBoundingClientRect())

        track.scrollLeft = track.scrollLeft + left;
    }

    render() {
        const { slidesToShow } = this.props;
        const { slides, currentSlideIndex } = this.state;
        return (
            <div className="carousel">
                {currentSlideIndex}
                <ButtonNext onClick={this.goToPreviousSlide}/>
                <div className="carousel--track" ref={this.carouselTrack}>
                    {slides.map(({ id, text }) =>
                        <div
                            className="slide"
                            key={id}
                            style={{ minWidth: `${100 / slidesToShow}%` }}
                        >
                            <div className="slide__content">
                                {text}
                            </div>
                        </div>
                    )}
                </div>
                <ButtonPrevious onClick={this.goToNextSlide}/>
            </div>
        )
    }
}

export default Carousel;
