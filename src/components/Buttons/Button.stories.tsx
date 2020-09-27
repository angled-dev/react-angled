import React from "react";
import Button, { ButtonProps } from "./Button";
import IconButton from "./IconButton";
import { Meta, Story } from "@storybook/react/types-6-0";

export default {
  title: "Components/Buttons",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Button...</Button>
);

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

export const Confirm = Template.bind({});
Confirm.args = {
  variant: "confirm",
};

export const Cancel = Template.bind({});
Cancel.args = {
  variant: "cancel",
};

export const Icon = () => <IconButton />;
