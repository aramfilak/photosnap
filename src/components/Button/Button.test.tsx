import { screen, render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders a button element with the correct class name", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByText("Click me");
    expect(button.tagName).toBe("BUTTON");
    expect(button.classList.contains("btn")).toBe(true);
  });

  it("renders a primary button with the correct class name and no arrow icon", () => {
    render(<Button primary>Click me</Button>);
    const button = screen.getByText("Click me");
    expect(button.classList.contains("primary")).toBe(true);
    expect(screen.queryByTestId("arrow-icon")).toBeNull();
  });

  it("renders a secondary button with the correct class name and an arrow icon", () => {
    render(<Button secondary>Click me</Button>);
    const button = screen.getByText("Click me");
    expect(button.classList.contains("secondary")).toBe(true);
    expect(screen.getByTestId("arrow-icon")).toBeInTheDocument();
  });

  it("throws an error if both primary and secondary props are passed", () => {
    expect(() => {
      render(
        <Button primary secondary>
          Click me
        </Button>
      );
    }).toThrow(
      "You can only pass either 'primary' or 'secondary', but not both at the same time."
    );
  });

  it("calls the onClick function when the button is clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByText("Click me");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
