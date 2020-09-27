import React from "react";
import styled, { css } from "styled-components";
import { colors } from "../../resources";

const Title = styled.div`
  font-family: "Asap";
  text-align: center;
  font-size: 2.75em;
  height: 1.2em;
  min-height: 1.2em;
`;

const Body = styled.div`
  margin: 0 3% 0 3%;
  min-height: 30%;
`;

const Buttons = styled.div`
  height: 30%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 2em;
`;

type ModalProps = {
  className?: string;
  modalClassName?: string;
  style?: Object;
  title?: any;
  body?: any;
  buttons?: Array<any>;
  onAnimationEnd: any;
  passRef: any;
  height?: string | number;
  width?: string | number;
  customKeyframes?: any;
  visible: Boolean;
  customHTML?: any;
  position?: any;
};

function _Modal({
  className,
  modalClassName,
  style,
  title,
  body,
  buttons,
  onAnimationEnd,
  passRef,
  visible,
  customHTML,
}: ModalProps) {
  return (
    <div
      className={className + " " + modalClassName}
      style={style}
      onAnimationEnd={onAnimationEnd}
      ref={passRef}
    >
      {visible && !customHTML && <Title>{title}</Title>}
      {visible && !customHTML && <Body>{body}</Body>}
      {visible && !customHTML && <Buttons>{buttons}</Buttons>}
      {visible && customHTML}
    </div>
  );
}

const alertKeyframes = css`
  @keyframes fadeIn {
    0% {
      background-position: 0%;
      -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0);
      -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0);
      box-shadow: 0px 0px 40px 8px rgba(0, 0, 0, 0);
    }
    20% {
      background-position: 20%;
      -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.02);
      -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.02);
      box-shadow: 0px 0px 40px 8px rgba(0, 0, 0, 0.02);
    }
    100% {
      background-position: 100%;
      -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 0px 40px 8px rgba(0, 0, 0, 0.1);
    }
  }

  @keyframes fadeOut {
    0% {
      background-position: 100%;
    }
    20% {
      color: ${colors.whitegrey};
      background-position: 80%;
    }
    75% {
      -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 0px 40px 8px rgba(0, 0, 0, 0.1);
    }
    100% {
      color: ${colors.primary};
      background-position: 0%;
      -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0);
      -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0);
      box-shadow: 0px 0px 40px 8px rgba(0, 0, 0, 0);
    }
  }
`;

const Modal = styled(_Modal)`
  ${({ customKeyframes }) => customKeyframes || alertKeyframes};
  transition: height 0.25s, width 0.25s;

  margin: 15vh auto;
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  padding: 1.4em 3.3em;
  border-radius: 6px;

  -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 40px 8px rgba(0, 0, 0, 0.1);

  color: ${colors.whitegrey};
  background: none;
  background-image: linear-gradient(
    45deg,
    transparent 50%,
    ${colors.primary} 50%
  );
  background-position: 100%;
  background-size: 264%;

  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-content: stretch;
  position: relative;
  overflow-y: hidden;
`;

export default Modal;
