import { screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { renderWithRouter } from "@/test/testUtils";
import ButtonLink from "./ButtonLink";

describe("The ButtonLink component", () => {
  it("Should display the provided text", () => {
    const label = "Example";

    renderWithRouter(
      <ButtonLink color="rosewater" href="/">
        {label}
      </ButtonLink>,
    );

    const button = screen.getByText(label);

    expect(button).toBeInTheDocument();
  });

  it("Should link to the provided path", () => {
    const path = "/example";
    const label = "Example";

    renderWithRouter(
      <ButtonLink color="rosewater" href={path}>
        {label}
      </ButtonLink>,
    );

    const button = screen.getByRole("link");
    expect(button).toHaveAttribute("href", path);
  });
});
