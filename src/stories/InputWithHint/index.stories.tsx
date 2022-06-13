import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputWithHint from "../../components/InputWithHint";

export const Primary: ComponentStory<typeof InputWithHint> = (args) => (
  <InputWithHint {...args} />
);

Primary.args = {
  id: "123",
  name: "321",
  value: "hello",
  label: "Label",
  hint: "Hint text goes here",
  variant: "default",
};

export default {
  title: "InputWithHint",
  component: InputWithHint,
} as ComponentMeta<typeof InputWithHint>;
