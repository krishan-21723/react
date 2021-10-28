import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders hello world test", () => {
    render(<Greeting></Greeting>);
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders It's good to see you! btn not clicked test", () => {
    render(<Greeting></Greeting>);
    const outputElement = screen.getByText("It's good to see you!", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders It's good to see you! btn clicked test", () => {
    render(<Greeting></Greeting>);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const outputElement = screen.getByText("Changed", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("removes It's good to see you! btn clicked test", () => {
    render(<Greeting></Greeting>);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const outputElement = screen.queryByText("It's good to see you!", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
