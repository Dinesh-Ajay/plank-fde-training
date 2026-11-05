import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { SettingsForm } from "./settings-form";

describe("SettingsForm", () => {
  it("confirms when preferences are saved", async () => {
    const user = userEvent.setup();
    render(<SettingsForm />);

    await user.click(screen.getByRole("button", { name: "Save changes" }));

    expect(screen.getByRole("status")).toHaveTextContent("Your preferences have been saved.");
  });
});
