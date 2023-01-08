import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { TextField, TextFieldProps } from "./input";

export default {
  title: "components/atoms/TextField",
  component: TextField,
  argTypes: {},
} as Meta<TextFieldProps>;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: "Dummy text",
  className: "sample",
  modifierA: true,
  modifierB: true,
};
