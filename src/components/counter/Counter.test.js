import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import Counter from "./Counter";

describe("Counter", () => {
  test("renders provided initial value", () => {
    const initialValue = 50;
    render(<Counter initialValue={initialValue} />);
    const displayElement = screen.getByText(initialValue);
    expect(displayElement).toBeInTheDocument();
  });

  test("click event on decrement button decrements the displayed value", () => {
    const initialValue = 50;
    const initialValueMinusOne = initialValue - 1;
    render(<Counter initialValue={initialValue} />);
    const decrementButton = screen.getByRole("button", {
      name: "-",
    });
    act(() => {
      userEvent.click(decrementButton);
    });

    const displayElement = screen.getByText(initialValueMinusOne);
    expect(displayElement).toBeInTheDocument();
  });

  test("click event on increment button increments the displayed value", () => {
    const initialValue = 50;
    const initialValuePlusOne = initialValue + 1;
    render(<Counter initialValue={initialValue} />);
    const incrementButton = screen.getByRole("button", {
      name: "+",
    });
    act(() => {
      userEvent.click(incrementButton);
    });

    const displayElement = screen.getByText(initialValuePlusOne);
    expect(displayElement).toBeInTheDocument();
  });
});
