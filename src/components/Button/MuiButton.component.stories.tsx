import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MuiButton } from "./MuiButton.component";

export default {
  title: "components/Button",
  component: MuiButton,
  argTypes: {},
} as ComponentMeta<typeof MuiButton>;

const Template: ComponentStory<typeof MuiButton> = (args) => (
  <div>
    <MuiButton variant="text">text</MuiButton>
    <MuiButton variant="outlined">outlined</MuiButton>
    <MuiButton variant="contained">contained</MuiButton>
  </div >
);

export const MuiButton_ = Template.bind({});

MuiButton_.args = {};
