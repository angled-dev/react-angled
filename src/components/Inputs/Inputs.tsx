import React, { useEffect, useState, useRef, FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { colors } from "../../resources";

type RawInputProps = {
  className: string;
  value: any;
  placeholder?: string;
  type?: string;
  width?: string | number;
  height?: string | number;
  onChange?: Function;
  color?: string;
  autoR?: boolean;
};

const _RawInput: FunctionComponent<RawInputProps> = ({
  className,
  value,
  placeholder,
  type,
  onChange,
  autoR,
}) => {
  const [Size, setSize] = useState(1);
  const resizable = useRef<HTMLInputElement>(null);

  useEffect(() => {
    resizable.current && setSize(resizable.current.value.length || 1);
  }, []);

  function handleChange(e) {
    e.preventDefault();
    const size = String(e.target.value).length;

    setSize(size);
    onChange && onChange(e);
  }

  return autoR ? (
    <span className={className}>
      <input
        ref={resizable}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        style={{ width: "calc(" + Size + " * 0.65em)" }}
      />
      <div />
    </span>
  ) : (
    <span className={className}>
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <div />
    </span>
  );
};

type IconInputProps = {
  className: string;
  value: any;
  placeholder?: string;
  type?: string;
  width?: string | number;
  height?: string | number;
  onChange?: Function;
  icon: any;
};

const _IconInput: FunctionComponent<IconInputProps> = ({
  className,
  value,
  placeholder,
  type,
  onChange,
  icon: Icon,
}) => {
  function handleChange(e) {
    onChange && onChange(e);
  }
  return (
    <span className={className}>
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <span className="underline" />
      <div className="blur" />
      <Icon />
    </span>
  );
};

type LabelInputProps = {
  className: string;
  value: any;
  placeholder?: string;
  type?: string;
  width?: string | number;
  height?: string | number;
  onChange?: Function;
  label: any;
  reverseColor?: boolean;
};

const _LabelInput: FunctionComponent<LabelInputProps> = ({
  className,
  value,
  placeholder,
  type,
  onChange,
  label,
}) => {
  function handleChange(e) {
    onChange && onChange(e);
  }
  return (
    <span className={className}>
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <span className="underline" />
      <div className="blur" />
      <span className="label">{label}</span>
    </span>
  );
};

type InputProps = {
  className: string;
  value: any;
  placeholder?: string;
  type?: string;
  width?: string | number;
  height?: string | number;
  onChange?: Function;
};

const _Input: FunctionComponent<InputProps> = ({
  className,
  value,
  placeholder,
  type,
  onChange,
}) => {
  function handleChange(e) {
    onChange && onChange(e);
  }
  return (
    <span className={className}>
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <span className="underline" />
    </span>
  );
};

const commonStyles = css`
  position: relative;
  display: inline-block;
  height: ${({ height }) => height};

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

const blur = css`
  .blur {
    height: calc(100% - 16px);
    width: 100%;
    position: absolute;
    background: linear-gradient(
      90deg,
      rgba(51, 51, 51, 0) 0%,
      rgba(51, 51, 51, 0) ${({ icon }) => (icon ? "60%" : "35%")},
      rgba(51, 51, 51, 1) ${({ icon }) => (icon ? "85%" : "60%")},
      rgba(51, 51, 51, 1) 100%
    );
    ${({ reverseColor, icon }) =>
      reverseColor
        ? `background: linear-gradient(
          90deg,
          rgba(236, 236, 236, 0) 0%,
          rgba(236, 236, 236, 0) ${icon ? "60%" : "35%"},
          rgba(236, 236, 236, 1) ${icon ? "85%" : "60%"},
          rgba(236, 236, 236, 1) 100%)`
        : `background: linear-gradient(
          90deg,
          rgba(51, 51, 51, 0) 0 %,
          rgba(51, 51, 51, 0) ${icon ? "60%" : "35%"},
          rgba(51, 51, 51, 1) ${icon ? "85%" : "60%"},
          rgba(51, 51, 51, 1) 100 %)`};
    top: 8px;
    right: 0;
    border-radius: 8px;
    pointer-events: none;
    visibility: visible;
    opacity: 1;
    transition: visibility 600ms linear, width 400ms ease-in-out;
    transition-delay: 200ms;
  }

  input:focus ~ .blur {
    visibility: hidden;
    width: 0;
    transition: visibility 300ms linear, width 900ms ease-in-out;
  }

  input:-webkit-autofill ~ .blur {
    right: 0.1em;
    background: linear-gradient(
      90deg,
      rgba(232, 240, 254, 0) 0%,
      rgba(232, 240, 254, 0) 35%,
      rgba(232, 240, 254, 1) 60%,
      rgba(232, 240, 254, 1) 100%
    );
  }
`;

const underline = css`
  .underline {
    position: absolute;
    height: 1px;
    width: ${({ icon, placeholder }) =>
      icon
        ? "calc(90% - 1.6em)"
        : placeholder
        ? "calc(65% - 1.6em)"
        : "calc(100% - 1.6em)"};
    bottom: 8px;
    left: 0.8em;
    z-index: 1;

    transition: background 600ms ease-in-out, width 600ms ease-in-out;

    background: ${({ reverseColor }) =>
      reverseColor ? colors.whitegrey : colors.primary};
    background-image: linear-gradient(
      45deg,
      transparent 50%,
      ${({ reverseColor }) =>
        reverseColor ? colors.primary : colors.whitegrey}
        50%
    );
    background-position: 100%;
    background-size: 400%;
  }

  input:focus + .underline {
    background-position: 25%;
    width: calc(100% - 1.6em);
  }

  input:-webkit-autofill ~ .underline {
    background: ${colors.primary}
    background-image: linear-gradient(45deg, transparent 50%, #e8f0fe 50%);
  }
`;

const customized = css`
  > input {
    font-family: "Asap";
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    color: ${({ reverseColor }) =>
      reverseColor ? colors.primary : colors.whitegrey};

    border: 0.1em solid
      ${({ reverseColor }) =>
        reverseColor ? colors.whitegrey : colors.primary};
    border-radius: 8px;

    padding: 0.8em 1em;
    width: ${({ width }) => width};
    height: calc(100% - 1.8em);
    cursor: text;

    transition: background 600ms ease-in-out, color 600ms ease-in-out;

    background: none;
    background-image: linear-gradient(
      45deg,
      transparent 50%,
      ${({ reverseColor }) =>
          reverseColor ? colors.whitegrey : colors.primary}
        50%
    );
    background-position: 100%;
    background-size: 400%;

    &:focus {
      outline: none;
      color: ${({ reverseColor }) =>
        reverseColor ? colors.whitegrey : colors.primary};
      background-position: 25%;
    }
  }
`;

const RawInput = styled(_RawInput)`
  ${commonStyles}
  > input {
    min-width: 2em;
    height: inherit;
    width: ${({ width }) => width};
    font-family: "Baloo 2";
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    border: none;
    background: transparent;
    color: ${({ color }) => color};

    &:focus {
      outline: none;
    }
  }

  > div {
    height: inherit;
    width: inherit;
    border-bottom: 0.1em solid ${colors.whitegrey};
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: -20;
    transition: border-bottom 500ms linear;
  }

  input:focus + div {
    border-bottom: 0.1em solid ${colors.darkgrey};
  }
`;

const IconInput = styled(_IconInput)`
  ${commonStyles}
  ${blur}
  ${underline}
  ${customized}

  > svg {
    height: inherit;
    position: absolute;
    color: white;
    right: 8px;
    z-index: 2;
    visibility: visible;
    opacity: 1;
    transition: visibility 600ms, opacity 600ms ease-in-out;
    pointer-events: none;
    transition-delay: 300ms;
  }

  input:focus ~ svg {
    visibility: hidden;
    opacity: 0;
    transition: visibility 900ms linear, opacity 250ms ease-in-out;
  }

  input:-webkit-autofill ~ svg {
    color: ${colors.primary};
  }
`;

const LabelInput = styled(_LabelInput)`
  ${commonStyles}
  ${blur}
  ${underline}
  ${customized}

  .label {
    height: inherit;
    position: absolute;
    top: 0;
    right: 8px;
    z-index: 2;
    display: flex;
    align-items: center;
    color: ${({ reverseColor }) =>
      reverseColor ? colors.primary : colors.whitegrey};
    font-family: "Baloo 2";
    text-transform: lowercase;
    pointer-events: none;
    visibility: visible;
    transform: scaleX(1);
    transform-origin: right;
    transition: visibility 600ms linear, transform 300ms ease-in-out;
    transition-delay: 300ms;
  }

  input:focus ~ .label {
    visibility: hidden;
    transform: scaleX(0);
    transition: visibility 900ms linear, transform 300ms ease-in-out;
  }

  input:-webkit-autofill ~ .label {
    color: ${colors.primary};
  }
`;

const Input = styled(_Input)`
  ${commonStyles}
  ${underline}
  ${customized}
`;

const commonDefaultProps = {
  value: undefined,
  type: "text",
  placeholder: undefined,
  width: "auto",
  height: "40px",
};
RawInput.defaultProps = { ...commonDefaultProps, color: "black", autoR: false };

IconInput.defaultProps = { ...commonDefaultProps, icon: null };

LabelInput.defaultProps = {
  ...commonDefaultProps,
  label: "Label",
  reverseColor: false,
};

Input.defaultProps = commonDefaultProps;

export { Input, IconInput, LabelInput, RawInput };
