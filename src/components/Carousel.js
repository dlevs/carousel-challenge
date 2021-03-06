import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import './Carousel.css';

class Carousel extends Component {
    static defaultProps = {
        slides: [],
        slidesToShow: 3,
    };

    static propTypes = {
        slides: PropTypes.arrayOf(PropTypes.object),
        slidesToShow: PropTypes.number,
    };

    state = {
        currentSlideIndex: 0
    }

    carouselTrack = createRef();

    goToNextSlide = () => {
        const { slides } = this.props;
        this.setState(({ currentSlideIndex }) => ({
            currentSlideIndex: Math.min(currentSlideIndex + 1, slides.length - 1)
        }));
    }

    goToPreviousSlide = () => {
        this.setState(({ currentSlideIndex }) => ({
            currentSlideIndex: Math.max(currentSlideIndex - 1, 0)
        }));
    }

    scrollToCurrentSlide = () => {
        const track = this.carouselTrack.current;
        const { currentSlideIndex } = this.state;
        const currentSlide = track.children[currentSlideIndex];

        if (!currentSlide) return;

        const rectSlide = currentSlide.getBoundingClientRect();
        const rectTrack = track.getBoundingClientRect();

        track.scrollLeft += (rectSlide.left - rectTrack.left);
    }

    componentDidMount() {
        this.scrollToCurrentSlide();
        // In production app, I'd consider using lodash/debounce here:
        window.addEventListener('resize', this.scrollToCurrentSlide);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.scrollToCurrentSlide);
    }

    componentDidUpdate() {
        this.scrollToCurrentSlide();
    }

    render() {
        const { slidesToShow, slides } = this.props;
        const { currentSlideIndex } = this.state;
        return (
            <div className="carousel">
                <button
                    onClick={this.goToPreviousSlide}
                    title="Previous Slide"
                    disabled={currentSlideIndex === 0}
                    className="btn-navigation"
                >
                    &lt;
                </button>
                <div className="carousel__track" ref={this.carouselTrack}>
                    {slides.map(({ id, text }) =>
                        <div
                            className="slide"
                            key={id}
                            style={{ width: `${100 / slidesToShow}%` }}
                        >
                            <div className="slide__content">
                                {text}
                            </div>
                        </div>
                    )}
                </div>
                <button
                    onClick={this.goToNextSlide}
                    title="Next Slide"
                    disabled={currentSlideIndex === slides.length - slidesToShow}
                    className="btn-navigation"
                >
                    &gt;
                </button>
            </div>
        )
    }
}

export default Carousel;
