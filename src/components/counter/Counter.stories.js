import Counter from "./Counter";

export default {
  title: "Components/Counter",
  component: Counter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    initialValue: {
      control: {
        type: "number",
      },
    },
  },
  args: { initialValue: 0 },
};

export const FullFilledInitialValue = {
  args: {
    initialValue: 31,
  },
};

export const UndefinedInitialValue = {
  args: {
    initialValue: undefined,
  },
};
