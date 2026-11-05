import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { SettingsForm } from "./settings-form";

describe("SettingsForm", () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("persists workspace settings and loads them when reopened", async () => {
    const user = userEvent.setup();
    const { unmount } = render(<SettingsForm />);

    await user.clear(screen.getByLabelText("Workspace name"));
    await user.type(screen.getByLabelText("Workspace name"), "Northstar");
    await user.click(screen.getByRole("checkbox", { name: "Weekly digest" }));
    await user.click(screen.getByRole("button", { name: "Save changes" }));

    expect(JSON.parse(localStorage.getItem("workbot-settings") ?? "{}")).toEqual({
      workspaceName: "Northstar",
      emailDigest: false,
    });
    expect(screen.getByRole("status")).toHaveTextContent("Your preferences have been saved.");

    unmount();
    render(<SettingsForm />);
    await waitFor(() => {
      expect(screen.getByLabelText("Workspace name")).toHaveValue("Northstar");
      expect(screen.getByRole("checkbox", { name: "Weekly digest" })).not.toBeChecked();
    });
  });

  it("does not show success when localStorage cannot save", async () => {
    const user = userEvent.setup();
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("Storage unavailable");
    });
    render(<SettingsForm />);

    await user.click(screen.getByRole("button", { name: "Save changes" }));

    expect(screen.queryByRole("status")).not.toBeInTheDocument();
    expect(screen.getByRole("alert")).toHaveTextContent("could not be saved or loaded");
  });
});
