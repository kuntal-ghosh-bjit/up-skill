---
to: src/components/<%= atomic %>/<%= lowerName %>/<%= lowerName %>.stories.tsx
---

import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { <%= pascalName %>, <%= pascalName %>Props } from './<%= lowerName %>';

export default {
  title: 'components/<%= atomic %>/<%= pascalName %>',
  component: <%= pascalName %>,
  argTypes: {
  },
} as Meta<<%= pascalName %>Props>;

const Template: Story<<%= pascalName %>Props> = args => <<%= pascalName %> {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: 'Dummy text',
  className: "sample",
  modifierA: true,
  modifierB: true
};
