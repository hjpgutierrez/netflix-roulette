import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import Dialog from "./Dialog";

describe("Dialog", () => {
  test("does not render when isOpen argument is false ", () => {
    const { container } = render(<Dialog isOpen={false} />);
    expect(container).toBeEmptyDOMElement();
  });

  test("renders provided title", () => {
    render(<Dialog isOpen={true} title="RTL" />);
    const titleElement = screen.getByText(/RTL/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders provided title and body", () => {
    render(<Dialog isOpen={true} title="RTL" children="JEST" />);
    const titleModal = screen.getByText(/RTL/i);
    const bodyModal = screen.getByText(/JEST/i);
    expect(titleModal).toBeInTheDocument();
    expect(bodyModal).toBeInTheDocument();
  });

  test("closePortal function is invoked", () => {
    const fakeFn = jest.fn();
    render(<Dialog isOpen={true} title="RTL" closePortal={fakeFn} />);
    act(() => {
      userEvent.click(screen.getByRole("button"));
    });
    expect(fakeFn).toHaveBeenCalledTimes(1);
  });
});
