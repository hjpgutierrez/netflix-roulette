import { Story, fn } from "@storybook/test";
import Dialog from "./Dialog";
import MovieForm from "../movieForm/MovieForm";

export default {
  title: "CompositionComponents/DialogMovieForm",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    isOpen: false,
    title: "Hello!",
    children: "test body",
    closePortal: fn(),
  },
};

export const AddMovie = {
  args: {
    isOpen: true,
    title: "Add Movie",
    children: <MovieForm />,
    onClose: fn(),
  },
};

const exampleMovie = {
  urlImage:
    "https://m.media-amazon.com/images/M/MV5BYWQxN2I1NjItMDVjMS00ZmJjLWIyYjItOWI2OGY5NTU1ZjI2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTc3MjM3OTA@._V1_UY1200_CR86,0,630,1200_AL_.jpg",
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

export const EditMovie = {
  args: {
    isOpen: true,
    title: "Edit Movie",
    children: <MovieForm movie={exampleMovie} />,
    onClose: fn(),
  },
};

export const DeleteMovie = {
  args: {
    isOpen: true,
    title: "Delete Movie",
    children: (
      <>
        <p style={{ textAlign: "center" }}>
          Are you sure you want to delete this movie?
        </p>{" "}
        <div className="modal-footer">
          <input
            type="submit"
            value="CONFIRM"
            className="btn btn-danger"
          ></input>
        </div>
      </>
    ),
    onClose: fn(),
  },
};
