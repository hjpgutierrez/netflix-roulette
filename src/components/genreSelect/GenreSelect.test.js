import { render, screen, logRoles } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import GenreSelect from "./GenreSelect";

describe("GenreSelect", () => {
  const displayList = [
    { name: "Crime", id: 1 },
    { name: "Documentary", id: 2 },
    { name: "Horror", id: 3 },
    { name: "Comedy", id: 4 },
  ];

  const selectedGenre = [
    { name: "Crime", id: 1 },
    { name: "Horror", id: 3 },
  ];

  test("renders all genres passed in props", () => {
    render(<GenreSelect displayList={displayList} />);
    const selectOptions = screen.queryAllByRole("checkbox", { hidden: true });
    expect(selectOptions.length).toBe(displayList.length);
  });

  test("highlights a selected genre passed in props", () => {
    const { container } = render(
      <GenreSelect displayList={displayList} selectedGenre={selectedGenre} />
    );
    expect(container.getElementsByClassName("chip").length).toBe(
      selectedGenre.length
    );
  });

  test('after a click event on a genre button component calls "onChange" callback and passes correct genre in arguments', async () => {
    const onChangeInput = jest.fn();
    const genre = "Documentary";
    const { container } = render(
      <GenreSelect
        displayList={displayList}
        selectedGenre={selectedGenre}
        onSelect={onChangeInput}
      />
    );
    act(() => {
      userEvent.type(screen.getByRole("textbox"), genre);
    });

    expect(screen.getByRole("textbox")).toHaveValue(genre);
  });
});
