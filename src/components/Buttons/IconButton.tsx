import React, { FunctionComponent } from "react";
import { FaBell } from "react-icons/fa";
import styled from "styled-components";
import { colors, reverseColor } from "../../resources";

type IconButtonProps = {
  icon?: any;
  size?: number;
  onClick?: any;
  variant?: string;
  color?: string;
  hover?: string;
};

const IconButton: FunctionComponent<IconButtonProps> = ({
  icon: Icon,
  size,
  onClick,
  variant,
  color,
  hover,
}) => {
  return (
    <_IconButton
      onClick={onClick}
      variant={variant}
      color={color}
      hover={hover}
    >
      <Icon size={size} />
    </_IconButton>
  );
};

type _IconButtonProps = {
  onClick?: any;
  variant?: string;
  color?: string;
  hover?: string;
  className: string;
  children?: any;
};

const _IconButton = styled(
  ({ className, onClick, children }: _IconButtonProps) => (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  )
)`
  display: flex;
  align-items: center;
  color: ${({ variant, color }) => color || colors[variant]};
  transition: color 250ms ease-in-out;

  &:hover:not(:active) {
    color: ${({ variant, hover }) => hover || reverseColor[variant]};
  }

  &:active {
    color: black;
  }
`;

IconButton.defaultProps = {
  icon: FaBell,
  size: 25,
  variant: "primary",
};

export default IconButton;
