import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import {userEvent} from "@testing-library/user-event";

import App from "./App";

describe("App", () => {
  it("renders App compnent", async () => {
    render(<App />);
    // wait for user to resolve 
    // fixes warning: "An update to App inside a test was not wrapped in act(...)""
    await screen.findByText(/signed in as/i);

    screen.debug();
  });

  it("should have a search label", async () => {
    render(<App />);
    await screen.findByText(/signed in as/i);

    expect(screen.getByLabelText(/Search:/)).toBeInTheDocument();
  });

  it("should have an input with placeholder text 'search'", async () => {
    render(<App />);
    await screen.findByText(/signed in as/i);

    expect(screen.getByPlaceholderText(/search/)).toBeInTheDocument();
  });

  it("should not have 'Searches for Javascript' on the page", () => {
    expect(screen.queryByText(/Searches for Javascript/)).toBeNull();
  });

  it("should show signed in as text", async () => {
    render(<App />);

    screen.debug();
    expect(screen.queryByText(/signed in as/i)).toBeNull();

    // expect(await screen.findByText(/signed in as/i)).toBeInTheDocument()
    
    // waitFor function in action
    waitFor(() => expect(screen.getByText(/signed in as/i)).toBeInTheDocument());
    screen.debug()
  });

  it("should get input field and simulate a type event with value 'Javascript'", async () => {
    const user = userEvent.setup()
    render(<App />);
    await screen.findByText(/signed in as/i);

    expect(screen.queryByText(/searches for javascript/i)).toBeNull()

    // fireEvent.change(screen.getByRole("textbox"), {
    //   target: { value: 'Javascript'}
    // })
    await user.type(screen.getByRole("textbox"), "Javascript")

    expect(screen.getByText(/searches for javascript/i)).toBeInTheDocument();
    screen.debug()
  })
});
