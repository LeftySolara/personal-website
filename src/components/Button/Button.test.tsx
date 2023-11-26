import { screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { renderWithRouter } from "@/test/testUtils";
import Button from "./Button";

describe("The Button component", () => {
  it("Should display the provided text", () => {
    const label = "Example";

    renderWithRouter(
      <Button color="rosewater" href="/">
        {label}
      </Button>,
    );

    const button = screen.getByText(label);

    expect(button).toBeInTheDocument();
  });

  it("Should link to the provided path", () => {
    const path = "/example";
    const label = "Example";

    renderWithRouter(
      <Button color="rosewater" href={path}>
        {label}
      </Button>,
    );

    const button = screen.getByRole("link");
    expect(button).toHaveAttribute("href", path);
  });
});
