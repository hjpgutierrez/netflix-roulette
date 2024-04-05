import { fn } from "@storybook/test";
import MovieTile from "./MovieTile";

const exampleMovie = {
  urlImage:
    "https://m.media-amazon.com/images/M/MV5BYWQxN2I1NjItMDVjMS00ZmJjLWIyYjItOWI2OGY5NTU1ZjI2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTc3MjM3OTA@._V1_UY1200_CR86,0,630,1200_AL_.jpg",
  name: "Spectral",
  releaseYear: 2016,
  genres: ["Fiction", "Drama"],
};

export default {
  title: "Components/MovieTile",
  component: MovieTile,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    movie: {
      control: {
        type: "object",
      },
      onClick: fn(),
    },
  },
  args: { movie: exampleMovie, onClick: fn() },
};

export const InitialRender = {
  args: {
    movie: exampleMovie,
  },
};

export const WithoutReleaseYear = {
  args: {
    movie: { ...exampleMovie, releaseYear: undefined },
  },
};

export const WithoutGenres = {
  args: {
    movie: { ...exampleMovie, genres: [] },
  },
};

export const OnlyImage = {
  args: {
    movie: {
      ...exampleMovie,
      genres: [],
      releaseYear: undefined,
      name: undefined,
    },
  },
};

export const OnClickImage = {
  args: {
    movie: {
      ...exampleMovie,
      genres: [],
      releaseYear: undefined,
      name: undefined,
    },
    onClick: (e) => {
      alert("test");
      e.preventDefault();
    },
  },
};
