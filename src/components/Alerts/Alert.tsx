import React, { useState, useEffect, useRef, FunctionComponent } from "react";
import styled from "styled-components";
import { colors } from "../../resources";
import Courtain from "./Courtain";
import Modal from "./Modal";

type ContextProps = {
  show: (props: ShowProps) => void;
  hide: Function;
  courtain: (props: CourtainProps) => void;
};

export type CourtainProps = {
  callback?: Function;
  children?: any;
};

type ShowProps = {
  className?: string;
  modalClassName?: string;
  title?: any;
  body?: any;
  buttons?: Array<any>;
  height?: string | number;
  width?: string | number;
  customKeyframes?: any;
  customHTML?: any;
  position?: any;
  callback?: Function;
  overlayClassName?: string;
  duration?: number;
  color?: string;
  overlayColor?: string;
};

interface AlertProps extends ShowProps {
  visible: Boolean;
  setProps: Function;
  hide: Function;
}

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
  const [courtainVisible, setCourtainVisible] = useState(false);
  const [props, setProps] = useState({});
  var timer;

  const initialize = (p) => {
    if (timer) clearTimeout(timer);
    setProps(p);
  };

  const courtain = (p: CourtainProps) => {
    initialize(p || {});
    setCourtainVisible(true);
    console.log(courtainVisible);
  };

  const show = (p: ShowProps) => {
    initialize(p);
    setVisible(true);
    if (p.duration) timer = setTimeout(() => hide(), p.duration);
  };

  const hide = () => {
    setVisible(false);
    setCourtainVisible(false);
  };

  return (
    <AlertContext.Provider value={{ show, hide, courtain }}>
      <Alert {...{ ...props, ...{ visible, setProps, hide } }} />
      <Courtain
        {...{
          ...props,
          ...{ visible: courtainVisible, setVisible: setCourtainVisible },
        }}
      />
      {children}
    </AlertContext.Provider>
  );
}

const AlertContext = React.createContext<Partial<ContextProps>>({});

export default AlertContext;
