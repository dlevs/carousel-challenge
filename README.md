# Carousel Coding Challenge

This is a small carousel coding challenge, bootstrapped off of [create-react-app](https://github.com/facebook/create-react-app).

[View the hosted version.](https://dlevs.github.io/carousel-challenge/build/index.html)

There are a few improvements I'm conscious can be made:

- I went for a mainly CSS approach. For consistent behaviour in all browsers, some additional JS would be needed for smooth scrolling.
- Potentially change the `slidesToShow` prop approach on the `Carousel.js` component to instead use a CSS class, so breakpoints can be used for mobile.
- Use CSS modules instead of importing global CSS so that classnames can be shorter for readability, _and_ styles be more maintainable.
- Add keyboard controls for accessibility.
- Add tests.
