---
to: <%= abs_path %>/<%= name %>.stories.tsx
---
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { <%= upper_name %> } from "<%= alias_path %>";

export default {
  title: "<%= path %>",
  component: <%= upper_name %>,
  argTypes: {
  },
} as ComponentMeta<typeof <%= upper_name %>>;

const Template: ComponentStory<typeof <%= upper_name %>> = (args) => <<%= upper_name %> {...args} />;
export const Default = Template.bind({});
Default.args = {
<% if (have_props) { %>
  str: "Hello, storybook!",
<%}%>
};
