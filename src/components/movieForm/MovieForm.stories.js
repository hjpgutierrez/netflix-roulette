import { fn } from "@storybook/test";
import MovieForm from "./MovieForm";

const exampleMovie = {
  urlImage: "https://amazon.com/imagesV1_UY1200_CR86,0,630,1200_AL_.jpg",
  name: "Spectral",
  releaseYear: 2016,
  rating: 8.9,
  durationResume: "2H 35M",
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting`,
  genres: [
    { name: "Documentary", id: 2 },
    { name: "Comedy", id: 4 },
  ],
};

const handleSubmit = (event) => {
  event.preventDefault();
};

export default {
  title: "Components/MovieForm",
  component: MovieForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    movie: {},
    handleSubmit: fn(),
  },
};

export const EmptyMovie = {
  args: {
    movie: {},
    handleSubmit: handleSubmit,
  },
};

export const ExampleMovie = {
  args: {
    movie: exampleMovie,
    handleSubmit: handleSubmit,
  },
};

export const UndefinedMovie = {
  args: {
    movie: undefined,
    handleSubmit: handleSubmit,
  },
};
