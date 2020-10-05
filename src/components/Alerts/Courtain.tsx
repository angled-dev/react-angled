import { colors } from "../../resources";
import styled from "styled-components";
import React, { FunctionComponent, useState } from "react";
import { CourtainProps as CourtainFunctionProps } from "./Alert";

interface CourtainProps extends CourtainFunctionProps {
  visible: boolean;
  setVisible: Function;
}

const Courtain: FunctionComponent<CourtainProps> = ({
  callback,
  children,
  visible,
  setVisible,
}) => {
  const [ready, setReady] = useState(false);
  const [size] = useState(() => {
    var _size =
      Math.round(
        Math.sqrt(
          Math.pow(window.innerHeight * 2, 2) +
            Math.pow(window.innerHeight * 2, 2)
        )
      ) * 2;
    return _size;
  });

  const handleAnimationEnd = () => {
    if (!visible && callback) {
      setVisible(false);
      callback();
    }
    setReady(visible);
  };

  return visible || (!visible && ready) ? (
    <_Courtain
      style={{
        animation: `${
          visible ? "fadeIn 0.75s linear" : "fadeOut 0.75s linear"
        }`,
      }}
      onAnimationEnd={handleAnimationEnd}
      size={size}
    >
      {visible && ready && children}
    </_Courtain>
  ) : (
    <></>
  );
};

const _Courtain = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 97;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @keyframes fadeIn {
    0% {
      background-position: 0%;
    }
    20% {
      background-position: 20%;
    }
    100% {
      background-position: 100%;
    }
  }

  @keyframes fadeOut {
    100% {
      background-position: 0%;
    }
    80% {
      background-position: 20%;
    }
    0% {
      background-position: 100%;
    }
  }

  > {
    margin: 32px 25vw 16px 25vw;

    @media screen and (max-width: 992px) {
      margin: 32px 15vw 16px 15vw;
    }

    @media screen and (max-width: 600px) {
      margin: 32px 5vw 16px 5vw;
    }
  }

  background: none;
  background-image: linear-gradient(
    45deg,
    transparent 50%,
    ${colors.primary} 50%
  );
  background-position: 100%;
  background-size: ${({ size }) => (size ? `${size}px ${size}px` : "264%")};
`;

export default Courtain;
