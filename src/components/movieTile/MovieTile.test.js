import { render, screen, logRoles } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import MovieTile from "./movieTile";

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

describe("MovieTile", () => {
  test("renders provided initial value", () => {
    render(<MovieTile movie={exampleMovie} />);

    const image = screen.getByRole("img");
    const name = screen.getByText(exampleMovie.name);
    const releaseYear = screen.getByText(exampleMovie.releaseYear);
    expect(image.src).toBe(exampleMovie.urlImage);
    expect(getComputedStyle(image).width).toBe("100%");
    expect(name).toBeInTheDocument();
    expect(releaseYear).toBeInTheDocument();
  });
});

describe("MovieTile", () => {
  test("OnClick receives right parameter", () => {
    const fakeOnClick = jest.fn();
    render(<MovieTile movie={exampleMovie} onClick={fakeOnClick} />);

    const image = screen.getByRole("img");
    act(() => {
      userEvent.click(image);
    });

    expect(fakeOnClick).toHaveBeenCalledTimes(1);
  });
});
