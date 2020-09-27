import React from "react";
import styled from "styled-components";
import { colors, keyframe } from "../../resources";

export type ButtonProps = {
  reverseColor?: boolean;
  variant?: string;
  className?: string;
  children?: any;
  onClick?: any;
};

const Button = styled(({ className, children, onClick }: ButtonProps) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
))`
  font-family: "Asap";
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: ${({ reverseColor, variant }) =>
    reverseColor ? colors.whitegrey : colors[variant]};

  animation: 0.6s linear 0s 1 ${keyframe.default};

  border: 0.1em solid
    ${({ reverseColor, variant }) =>
      reverseColor ? colors.whitegrey : colors[variant]};
  border-radius: 24px;

  width: fit-content;
  padding: 1.4em 3.3em;
  cursor: pointer;

  transition: background 600ms ease-in-out, color 600ms ease-in-out;

  background: none;
  background-image: linear-gradient(
    45deg,
    transparent 50%,
    ${({ reverseColor, variant }) =>
        reverseColor ? colors.whitegrey : colors[variant]}
      50%
  );
  background-position: 25%;
  background-size: 400%;

  &:hover:not(:active) {
    color: ${({ reverseColor }) =>
      reverseColor ? colors.primary : colors.whitegrey};
    background-position: 90%;
  }

  &:focus {
    outline: none;
  }

  &:active {
    transition: background 100ms ease-in-out;
    background-position: 25%;
  }
`;

Button.defaultProps = {
  reverseColor: false,
  variant: "primary",
};

export default Button;
