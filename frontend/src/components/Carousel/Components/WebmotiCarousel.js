import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Divider } from "semantic-ui-react";

const WebmotiCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={1}
    totalSlides={3}
  >
    <Slider>
      <Slide tag="a" index={0}>
        <Image src="https://lorempixel.com/400/400/cats/0" />
      </Slide>
      <Slide tag="a" index={1}>
        <Image src="https://lorempixel.com/400/400/cats/1" />
      </Slide>
      <Slide tag="a" index={2}>
        <Image src="https://lorempixel.com/400/400/cats/2" />
      </Slide>
    </Slider>

    <Divider />
    {/*<CustomDotGroup slides={3} />*/}
  </CarouselProvider>
);

export default WebmotiCarousel;