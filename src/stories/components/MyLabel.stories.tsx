import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
  title: "Example/MyLabel",
  component: MyLabel,

  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    fontColor: {
      control: "color",
    },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
  label: "Hello World",
  size: "normal",
  allCaps: false,
};

export const Secondary = Template.bind({});

Secondary.args = {
  size: "normal",
  allCaps: true,
  label: "Hello World 2",
};

export const CustomFontColor = Template.bind({});

CustomFontColor.args = {
  label: "Hello World 3",
  size: "h2",
  allCaps: true,
};
