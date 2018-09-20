import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Carousel.css';

let uniqueSlideId = 0;

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
        ]
    };

    render() {
        const { slidesToShow } = this.props;
        const { slides } = this.state;
        return (
            <div className="carousel">
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
        )
    }
}

export default Carousel;
