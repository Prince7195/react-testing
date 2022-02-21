import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodos = jest.fn();

describe("AddInput", () => {
  it("should render input element", () => {
    render(<AddInput setTodos={mockedSetTodos} todos={[]} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should render button element", () => {
    render(<AddInput setTodos={mockedSetTodos} todos={[]} />);
    const buttonElement = screen.getByText(/Add/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("should able to type in input", () => {
    render(<AddInput setTodos={mockedSetTodos} todos={[]} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: "Todo 1" } });
    expect(inputElement.value).toBe("Todo 1");
  });

  it("should have empty inout what Add btn is clicked", () => {
    render(<AddInput setTodos={mockedSetTodos} todos={[]} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button");
    fireEvent.change(inputElement, { target: { value: "Todo 1" } });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });
});
