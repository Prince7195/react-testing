import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it("should render same text passed into title prop", () => {
    render(<Header title="Todos" />);
    const headingElement = screen.getByText(/todos/i);
    expect(headingElement).toBeInTheDocument();
  });
});

// it("should render same text passed into title prop", () => {
//   render(<Header title="Todos" />);
//   const headingElement = screen.getByRole("heading");
//   expect(headingElement).toBeInTheDocument();
// });

// it("should render same text passed into title prop", () => {
//   render(<Header title="Todos" />);
//   const headingElement = screen.getByRole("heading", { name: "Todos" });
//   expect(headingElement).toBeInTheDocument();
// });

// it("should render same text passed into title prop", () => {
//   render(<Header title="Todos" />);
//   const headingElement = screen.getByTitle("Heading");
//   expect(headingElement).toBeInTheDocument();
// });

// it("should render same text passed into title prop", () => {
//   render(<Header title="Todos" />);
//   const headingElement = screen.getByTestId("header-1");
//   expect(headingElement).toBeInTheDocument();
// });

// FIND BY

// it("should render same text passed into title prop", async () => {
//   render(<Header title="Todos" />);
//   const headingElement = await screen.findByText(/todos/i);
//   expect(headingElement).toBeInTheDocument();
// });

// QUERY BY
// it("should render same text passed into title prop", () => {
//   render(<Header title="Todos" />);
//   const headingElement = screen.queryByText(/dogs/i);
//   expect(headingElement).not.toBeInTheDocument();
// });

// GET ALL BY
// it("should render same text passed into title prop", () => {
//   render(<Header title="Todos" />);
//   const headingElements = screen.getAllByRole("heading");
//   expect(headingElements.length).toBe(2);
// });
