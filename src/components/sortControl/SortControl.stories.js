import { fn } from "@storybook/test";
import SortControl from "./sortControl";

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
    options: ["Test 1", "Test 2", "Test 3"],
  },
};

export const RenderSelectedOptions = {
  args: {
    options: ["Test 1", "Test 2", "Test 3"],
    currentOption: "Test 2",
  },
};

export const onChangeOptions = {
  args: {
    options: ["Test 1", "Test 2", "Test 3"],
    currentOption: "Test 2",
    onChange: (e) => alert("Test onChange"),
  },
};
