import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => (
  <BrowserRouter>
    <FollowersList />
  </BrowserRouter>
);

describe("FollowersList", () => {
  beforeEach(() => {
    console.log("RUNS BEFORE EACH TEST");
  });

  beforeAll(() => {
    console.log("RUNS ONCE BEFORE ALL TESTS");
  });

  afterEach(() => {
    console.log("RUNS AFTER EACH TEST");
  });

  afterAll(() => {
    console.log("RUNS ONCE AFTER ALL TESTS");
  });

  it("should render the follower items", async () => {
    render(<MockFollowersList />);
    const divEl = await screen.findByTestId("follower-item-0");
    expect(divEl).toBeInTheDocument();
  });

  it("should render multiple follower items", async () => {
    render(<MockFollowersList />);
    const divEls = await screen.findAllByTestId(/follower-item/i);
    expect(divEls.length).toBe(1);
  });
});
