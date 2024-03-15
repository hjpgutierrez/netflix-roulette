import { fn } from "@storybook/test";
import SearchForm from "./SearchForm";

export default {
  title: "Components/SearchForm",
  component: SearchForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    filterText: {
      control: {
        type: "string",
      },
    },
  },
  args: {
    filterText: "0",
    onSearch: (e) => e.preventDefault(),
    onFilterTextChange: fn(),
  },
};

export const FullFilledInitialValue = {
  args: {
    filterText: "test",
  },
};

export const Placeholder = {
  args: {
    filterText: undefined,
    onSearch: (e) => {
      alert("test");
      e.preventDefault();
    },
  },
};

export const onSearchClick = {
  args: {
    onSearch: (e) => {
      alert("test");
      e.preventDefault();
    },
  },
};
