import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SampleComponent, SampleComponentProps } from './sample-component';

export default {
  title: 'components/atoms/SampleComponent',
  component: SampleComponent,
  argTypes: {
  },
} as Meta<SampleComponentProps>;

const Template: Story<SampleComponentProps> = args => <SampleComponent {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: 'Dummy text',
  className: "sample",
  modifierA: true,
  modifierB: true
};
