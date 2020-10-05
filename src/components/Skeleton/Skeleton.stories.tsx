import React from "react";
import Skeleton from "./Skeleton";
import { number } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react/types-6-0";

export default {
  title: "Components/Skeleton",
  component: Skeleton,
} as Meta;

const Template = (args) => <Skeleton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Editable = Template.bind({});
Editable.args = {
  count: number("count", 1),
  duration: number("duration", 1.2),
};

export const Circle = Template.bind({});
Circle.args = {
  width: "50px",
  height: "50px",
  circle: true,
};

export const Multiple = Template.bind({});
Multiple.args = {
  count: 5,
};

export const WithWrapper = Template.bind({});
WithWrapper.args = {
  wrapper: "h1",
};
