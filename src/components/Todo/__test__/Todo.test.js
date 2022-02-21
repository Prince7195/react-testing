import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => (
  <BrowserRouter>
    <Todo />
  </BrowserRouter>
);

const addTodo = (tasks = []) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe("AddInput", () => {
  it("should render same text passed into the props", () => {
    render(<MockTodo />);
    addTodo(["Todo 1"]);
    const divElement = screen.getByText(/Todo 1/i);
    expect(divElement).toBeInTheDocument();
  });

  it("should render multiple items", () => {
    render(<MockTodo />);
    addTodo(["Todo 1", "Todo 2", "Todo 3"]);
    const divElements = screen.getAllByTestId("task-container");
    expect(divElements.length).toBe(3);
  });

  it("task should not be completed when it is initially rendered", () => {
    render(<MockTodo />);
    addTodo(["Todo 1"]);
    const divElement = screen.getByText(/Todo 1/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it("task should have completed class when it is clicked", () => {
    render(<MockTodo />);
    addTodo(["Todo 1"]);
    const divElement = screen.getByText(/Todo 1/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
