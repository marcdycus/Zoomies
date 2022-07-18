import React from 'react';

import IconsView from './IconsView';

const IconsViewStory = {
  title: 'Icons',
  component: IconsView,
  argTypes: {}
};

const Template = (args) => <IconsView {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'greyDark'
};

export default IconsViewStory;
