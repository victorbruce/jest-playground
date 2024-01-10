import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders App compnent", () => {
    render(<App />);
    screen.debug();
		
		expect(screen.getByText(/Search:/i)).toBeInTheDocument();
  });
});
