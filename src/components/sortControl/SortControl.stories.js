import { fn } from "@storybook/test";
import SortControl from "./SortControl";

export default {
  title: "Components/SortControl",
  component: SortControl,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    options: {
      control: {
        type: "array",
      },
      currentOption: {
        type: "string",
      },
    },
  },
  args: {
    options: [],
    currentOption: "",
    onChange: fn(),
  },
};

export const InitialRender = {
  args: {},
};

export const RenderOptions = {
  args: {
    options: ["Release Date", "Title"],
  },
};

export const RenderSelectedOptions = {
  args: {
    options: ["Release Date", "Title"],
    currentOption: "Title",
  },
};

export const onChangeOptions = {
  args: {
    options: ["Release Date", "Title"],
    currentOption: "Title",
    onChange: (e) => alert("Test onChange"),
  },
};
