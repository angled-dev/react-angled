import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Example from ".";

export default {
  title: "Components/Example",
  component: Example,
} as Meta;

export const Primary: React.FC<{}> = () => <Example />;
