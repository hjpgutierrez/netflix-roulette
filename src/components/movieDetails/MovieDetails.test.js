import { render, screen } from "@testing-library/react";
import MovieDetails from "./MovieDetails";

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

describe("MovieDetails", () => {
  test.only("renders provided initial value", () => {
    render(<MovieDetails movie={exampleMovie} />);
    const images = screen.getAllByRole("img");
    const name = screen.getByText("Spectral");
    expect(images[0].src).toBe(exampleMovie.urlImage);
    expect(images[1].src).toContain("searchIcon.png");
    expect(getComputedStyle(images[0]).width).toBe("100%");
    expect(name).toBeInTheDocument();
  });
});
