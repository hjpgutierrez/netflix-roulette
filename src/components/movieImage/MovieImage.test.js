import { render, screen } from "@testing-library/react";
import MovieImage from "./movieImage";

describe("MovieImage", () => {
  test("renders provided initial value", () => {
    const urlImage =
      "https://purepng.com/public/uploads/large/purepng.com-avataravatarjames-camerons-avatarscience-fiction-filmherosactors-1701528521646rbihs.png";
    render(<MovieImage urlImage={urlImage} />);
    const image = screen.getByRole("img");

    expect(image.src).toBe(urlImage);
    expect(getComputedStyle(image).width).toBe("100%");
  });
});
