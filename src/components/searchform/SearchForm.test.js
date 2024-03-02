import { render, screen, logRoles } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchForm from "./SearchForm";

describe("SearchForm", () => {
  test("renders an input with the value equal to initial value passed in props", () => {
    const initialValue = "Jest";
    render(<SearchForm filterText={initialValue} />);
    const displayElement = screen.getByRole("textbox");
    expect(displayElement).toHaveValue(initialValue);
  });

  test("after typing to the input and a click event on the Submit button, the onChange prop is called with proper value", async () => {
    const searchCriteria = "Henry";
    const onSearchForm = jest.fn();
    const onChangeInput = jest.fn();

    render(
      <SearchForm onSearch={onSearchForm} onFilterTextChange={onChangeInput} />
    );

    await userEvent.type(screen.getByRole("textbox"), searchCriteria);
    await userEvent.click(screen.getByRole("button"));

    expect(onChangeInput).toHaveBeenCalledTimes(searchCriteria.length);
  });

  test("after typing to the input and pressing Enter key, the onChange prop is called with proper value", async () => {
    const searchCriteria = "Henry{enter}";
    const onSearchForm = jest.fn();
    const onChangeInput = jest.fn();

    const view = render(
      <SearchForm onSearch={onSearchForm} onFilterTextChange={onChangeInput} />
    );

    await userEvent.type(screen.getByRole("textbox"), searchCriteria);

    expect(onSearchForm).toHaveBeenCalledTimes(0);
  });
});
