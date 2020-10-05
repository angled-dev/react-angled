import React, { FunctionComponent } from "react";
import styled from "styled-components";

type CarouselProps = {
  children: Array<any>;
};

const Carousel: FunctionComponent<CarouselProps> = ({ children }) => {
  return (
    <_Carousel>
      {children.map((val, idx) => (
        <div id={"settings-" + idx} key={idx}>
          {val}
        </div>
      ))}
    </_Carousel>
  );
};

const _Carousel = styled.div`
  width: 90vw;
  text-align: center;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  align-items: center;

  scroll-snap-type: x mandatory;

  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  > :nth-child(n) {
    scroll-snap-align: start;
    flex-shrink: 0;
    width: 90vw;
    height: 70vh;

    transform-origin: center center;
    transform: scale(1);
    transition: transform 0.5s;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }

  > :nth-child(2),
  > :nth-child(3) {
    font-size: 3em;
  }
`;

export default Carousel;
