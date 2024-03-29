import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { logRoles } from "@testing-library/dom";
import MovieForm from "./MovieForm";

const exampleMovie = {
  urlImage:
    "https://m.media-amazon.com/images/M/MV5BYWQxN2I1NjItMDVjMS00ZmJjLWIyYjItOWI2OGY5NTU1ZjI2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTc3MjM3OTA@._V1_UY1200_CR86,0,630,1200_AL_.jpg",
  name: "Spectral",
  releaseYear: "2016",
  rating: "8.9",
  durationResume: "2H 35M",
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting`,
  genres: [
    { name: "Documentary", id: 2 },
    { name: "Comedy", id: 4 },
  ],
};

describe("MovieForm", () => {
  test("handleSubmit function is invoked", () => {
    const fakeFn = jest.fn((e) => e.preventDefault());
    render(<MovieForm handleSubmit={fakeFn} />);
    const submitButton = screen.getByRole("button", { name: /submit/i });
    act(() => {
      userEvent.click(submitButton);
    });
    expect(fakeFn).toHaveBeenCalledTimes(1);
  });

  test("prefilled form fields", () => {
    render(<MovieForm movie={exampleMovie} />);
    expect(screen.getByRole("textbox", { name: /title/i })).toHaveValue(
      exampleMovie.name
    );
    expect(screen.getByRole("textbox", { name: /MOVIE URL/i })).toHaveValue(
      exampleMovie.urlImage
    );
    expect(screen.getByRole("textbox", { name: /RELEASE DATE/i })).toHaveValue(
      exampleMovie.releaseYear
    );
    expect(screen.getByRole("textbox", { name: /RATING/i })).toHaveValue(
      exampleMovie.rating
    );
    expect(screen.getByRole("textbox", { name: /OVERVIEW/i })).toHaveValue(
      exampleMovie.description
    );
    expect(screen.getByRole("textbox", { name: /RUNTIME/i })).toHaveValue(
      exampleMovie.durationResume
    );
  });
});
