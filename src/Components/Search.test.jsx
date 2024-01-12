import { describe, it, expect, vi } from "vitest";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Search from "./Search";

describe("Search", () => {
  it("calls the onchange callback handler", async () => {
		const user = userEvent.setup()
    const onChange = vi.fn();

    render(
      <Search value="" onChange={onChange}>
        Search:
      </Search>
    );

		screen.debug()

		await user.type(screen.getByRole("textbox"), 'Javascript')

    // fireEvent.change(screen.getByRole("textbox"), {
    //   target: { value: 'Javascript'}
    // })

		screen.debug()
		expect(onChange).toHaveBeenCalledTimes(10)
  });
});
