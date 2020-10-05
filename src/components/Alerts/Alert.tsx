import React, { useState, useEffect, useRef, FunctionComponent } from "react";
import styled from "styled-components";
import { colors } from "../../resources";
import Modal from "./Modal";

type ContextProps = {
  show: Function;
  hide: Function;
};

const AlertContext = React.createContext<Partial<ContextProps>>({});

export default AlertContext;

type AlertProps = {
  className?: string;
  modalClassName?: string;
  title?: any;
  body?: any;
  buttons?: Array<any>;
  height?: string | number;
  width?: string | number;
  customKeyframes?: any;
  visible: Boolean;
  customHTML?: any;
  position?: any;
  setProps: Function;
  hide: Function;
  callback?: Function;
  overlayClassName?: string;
  duration?: number;
  color?: string;
  overlayColor?: string;
};

const _Alert: FunctionComponent<AlertProps> = ({
  visible,
  setProps,
  hide,
  callback,
  className,
  modalClassName,
  overlayClassName,
  height,
  width,
  position,
  title,
  body,
  buttons,
  duration,
  customHTML,
  color,
}) => {
  const [render, setRender] = useState(false);
  const modal = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (visible) setRender(true);
    else if (duration) finish();
  }, [visible]);

  const handleAnimationEnd = () => {
    if (!visible) finish();
  };

  const finish = () => {
    setRender(false);
    if (callback) callback();
    setProps({});
  };

  const handleClickOut = (e) => {
    if (modal && modal.current && modal.current.contains(e.target)) return;
    hide();
  };

  return render ? (
    <div
      className={className + " " + overlayClassName}
      onClick={handleClickOut}
    >
      <Modal
        style={{
          animation: `${
            duration
              ? "fadeOut " + duration * 1 + "ms linear"
              : visible
              ? "fadeIn 1s ease-out"
              : "fadeOut .4s ease-out"
          }`,
        }}
        title={title}
        body={body}
        buttons={buttons}
        onAnimationEnd={!duration ? handleAnimationEnd : undefined}
        passRef={modal}
        height={height}
        width={width}
        position={position}
        modalClassName={modalClassName}
        customHTML={customHTML}
        visible={visible}
        color={color}
      />
    </div>
  ) : (
    <></>
  );
};

const Alert = styled(_Alert)`
  position: fixed;
  z-index: 999;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  background-color: ${({ overlayColor }) => overlayColor || colors.overlay};
`;

Alert.defaultProps = {
  visible: false,
  height: "350px",
  width: "500px",
};

export function AlertProvider({ children }) {
  const [visible, setVisible] = useState(false);
  const [props, setProps] = useState({});
  var timer;

  const show = (p) => {
    if (timer) clearTimeout(timer);
    setProps(p);
    setVisible(true);
    if (p.duration) timer = setTimeout(() => hide(), p.duration);
  };

  const hide = () => {
    setVisible(false);
  };

  return (
    <AlertContext.Provider value={{ show, hide }}>
      <Alert {...{ ...props, ...{ visible, setProps, hide } }} />
      {children}
    </AlertContext.Provider>
  );
}
