import MovieDetails from "./movieDetails";

const exampleMovie = {
  urlImage:
    "https://m.media-amazon.com/images/M/MV5BYWQxN2I1NjItMDVjMS00ZmJjLWIyYjItOWI2OGY5NTU1ZjI2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTc3MjM3OTA@._V1_UY1200_CR86,0,630,1200_AL_.jpg",
  name: "Spectral",
  releaseYear: 2016,
  rating: 8.9,
  durationResume: "2H 35M",
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text
  ever since the 1500s, when an unknown printer took a galley of
  type and scrambled it to make a type specimen book. It has
  survived not only five centuries, but also the leap into
  electronic typesetting, remaining essentially unchanged. It was
  popularised in the 1960s with the release of Letraset sheets
  containing Lorem Ipsum passages, and more recently with desktop
  publishing software like Aldus PageMaker including versions of
  Lorem Ipsum.`,
  genres: ["Fiction", "Drama"],
};

export default {
  title: "Components/MovieDetails",
  component: MovieDetails,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    movie: {
      control: {
        type: "object",
      },
    },
  },
  args: { movie: exampleMovie },
};

export const InitialRender = {
  args: {
    movie: exampleMovie,
  },
};

export const WithoutDescription = {
  args: {
    movie: { ...exampleMovie, description: "" },
  },
};

export const WithoutGenres = {
  args: {
    movie: { ...exampleMovie, genres: [] },
  },
};
