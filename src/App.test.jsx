import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders App compnent", () => {
    render(<App />);
    screen.debug();
  });

  it("should have a search label", () => {
    render(<App />);
    expect(screen.getByLabelText(/Search:/)).toBeInTheDocument();
  });

  it("should have an input with placeholder text 'search'", () => {
    render(<App />);
    expect(screen.getByPlaceholderText(/search/)).toBeInTheDocument();
  });

  it("should not have 'Searches for Javascript' on the page", () => {
    expect(screen.queryByText(/Searches for Javascript/)).toBeNull();
  });

  it("should show signed in as text", async () => {
    render(<App />);

    screen.debug();
    expect(screen.queryByText(/signed in as/i)).toBeNull();
    expect(await screen.findByText(/signed in as/i)).toBeInTheDocument();
    screen.debug()
  });
});
