import { render, screen, fireEvent } from "@testing-library/react";
import SortControl from "./sortControl";

const sortControlOptions = ["Release", "Title"];
const onChangeSortBy = (event) => {
  const value = event.target.value;
  console.log(value);
};

describe("SortControl", () => {
  test("renders provided initial value", () => {
    const initialValue = "Title";
    render(
      <SortControl
        options={sortControlOptions}
        currentOption={initialValue}
        onChange={onChangeSortBy}
      />
    );
    const displayElement = screen.getByText(initialValue);
    expect(displayElement).toBeInTheDocument();
  });

  test("Simulates selection", () => {
    const initialValue = "Release";

    const { getByTestId, getAllByTestId } = render(
      <SortControl options={sortControlOptions} onChange={onChangeSortBy} />
    );
    fireEvent.change(getByTestId("select"), { target: { value: "Title" } });
    let options = getAllByTestId("select-option");
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
  });
});
