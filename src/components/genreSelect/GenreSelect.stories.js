import { fn } from "@storybook/test";
import GenreSelect from "./GenreSelect";

export default {
  title: "Components/GenreSelect",
  component: GenreSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    displayList: [],
    selectedGenre: [],
    onSelect: fn(),
  },
};

export const EmptyValues = {
  args: {
    displayList: [],
    selectedGenre: [],
  },
};

export const ValuesToShow = {
  args: {
    displayList: [
      { name: "Crime", id: 1 },
      { name: "Horror", id: 3 },
    ],
    selectedGenre: [],
  },
};

export const SelectedValue = {
  args: {
    displayList: [
      { name: "Crime", id: 1 },
      { name: "Horror", id: 3 },
    ],
    selectedGenre: [{ name: "Horror", id: 3 }],
  },
};
