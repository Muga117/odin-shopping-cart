import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar.jsx";

describe("Navigation Bar Component", () => {
  it("renders correct links", () => {
    render(<Navbar />);
    expect(screen.getByRole("navigation")).toMatchSnapshot();
  });
});
