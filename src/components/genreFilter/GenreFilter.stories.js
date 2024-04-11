import { fn } from "@storybook/test";
import GenreFilter from "./GenreFilter";

const fixedGenres = [
  "Action",
  "Adventure",
  "Drama",
  "Animation",
  "Family",
  "Crime",
];

export default {
  title: "Components/GenreFilter",
  component: GenreFilter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    genresToDisplay: [],
    activeGenre: "",
    onClick: fn(),
  },
};

export const DefaultValues = {
  args: {
    genresToDisplay: fixedGenres,
    activeGenre: "",
    onClick: fn(),
  },
};

export const SelectedGenre = {
  args: {
    genresToDisplay: fixedGenres,
    activeGenre: "Drama",
    onClick: fn(),
  },
};

export const OnClick = {
  args: {
    genresToDisplay: fixedGenres,
    activeGenre: "",
    onClick: () => {
      alert("click!");
    },
  },
};
