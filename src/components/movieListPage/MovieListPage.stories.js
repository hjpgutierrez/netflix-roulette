import { fn } from "@storybook/test";
import MovieListPage from "./MovieListPage";

export default {
  title: "Components/MovieListPage",
  component: MovieListPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};

export const DefaultValues = {
  args: {},
};
