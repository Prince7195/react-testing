import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => (
  <BrowserRouter>
    <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
  </BrowserRouter>
);

describe("TodoFooter", () => {
  it("should render correct amount of incomplete tasks", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={2} />);
    const pElement = screen.getByText(/2 tasks left/i);
    expect(pElement).toBeInTheDocument();
  });

  it("should render 'task' when the incomplete tasks is one", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const pElement = screen.getByText(/1 task left/i);
    expect(pElement).toBeInTheDocument();
  });
});

// it("should render 'task' when the incomplete tasks is one", () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//   const pElement = screen.getByText(/1 task left/i);
//   expect(pElement).toBeTruthy();
// });

// it("should render 'task' when the incomplete tasks is one", () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//   const pElement = screen.getByText(/1 task left/i);
//   expect(pElement).toBeVisible();
// });

// it("should render 'task' when the incomplete tasks is one", () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//   const pElement = screen.getByText(/1 task left/i);
//   expect(pElement).toContainHTML("p");
// });

// it("should render 'task' when the incomplete tasks is one", () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//   const pElement = screen.getByTestId("para");
//   expect(pElement).toHaveTextContent("1 task left");
// });

// it("should render 'task' when the incomplete tasks is one", () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//   const pElement = screen.getByTestId("para");
//   expect(pElement).not.toBeFalsy();
// });

// it("should render 'task' when the incomplete tasks is one", () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//   const pElement = screen.getByTestId("para");
//   expect(pElement.textContent).toBe("1 task left");
// });
