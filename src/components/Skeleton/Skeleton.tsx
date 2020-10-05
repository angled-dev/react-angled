import React, { FunctionComponent, ReactElement } from "react";
import styled, { css, keyframes } from "styled-components";

type SkeletonProps = {
  wrapper?: any;
  count?: number;
  duration?: number;
  width?: number | string;
  height?: number | string;
  circle?: boolean;
  style?: Object;
  className?: string;
  highlightColor?: string;
  baseColor?: string;
};

const Skeleton: FunctionComponent<SkeletonProps> = ({
  count = 1,
  duration = 1.2,
  width,
  wrapper: Wrapper,
  height,
  circle,
  style: givenStyle,
  className: givenClassName,
  highlightColor,
  baseColor,
}) => {
  const keyframe = keyframes`
    0% {
        background-position: -200px 0;
    }
    100% {
        background-position: calc(200px + 100%) 0;
    }
  `;

  const styles = css`
    background-color: ${baseColor};
    background-image: linear-gradient(
      90deg,
      ${baseColor},
      ${highlightColor},
      ${baseColor}
    );
    background-size: 200px 100%;
    background-repeat: no-repeat;
    border-radius: 4px;
    display: inline-block;
    line-height: 1;
    width: 100%;
  `;

  const Span = styled.span`
    ${styles}
    animation: ${keyframe} ${duration}s ease-in-out infinite;
  `;

  const elements: ReactElement[] = [];

  for (let i = 0; i < count; i++) {
    interface Element {
      width?: string | number;
      height?: string | number;
      borderRadius?: string | number;
    }

    var style: Element = {
      width: width || undefined,
      height: height || undefined,
      borderRadius: undefined,
    };

    if (style.width !== null && style.height !== null && circle) {
      style.borderRadius = "50%";
    }

    var className = "skeleton";

    if (givenClassName) {
      className += " " + givenClassName;
    }

    elements.push(
      <Span
        key={i}
        className={className}
        style={{
          ...givenStyle,
          ...style,
        }}
      >
        &zwnj;
      </Span>
    );
  }

  return (
    <>
      {Wrapper
        ? elements.map((element, i) => (
            <Wrapper key={i} skeleton>
              {element}
              &zwnj;
            </Wrapper>
          ))
        : elements}
    </>
  );
};

Skeleton.defaultProps = {
  baseColor: "#eee",
  highlightColor: "#f5f5f5",
};

export default Skeleton;
