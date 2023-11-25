import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("The Footer component", () => {
  it("Should display links to blog and digital garden", () => {
    const blogLink = {
      text: "here",
      href: "https://blog.julianneadams.dev",
    };

    const gardenLink = {
      text: "digital garden",
      href: "https://wiki.julianneadams.dev",
    };

    render(<Footer />);

    const renderedBlogLink = screen.getByText(blogLink.text);
    const renderedGardenLink = screen.getByText(gardenLink.text);

    expect(renderedBlogLink).toBeInTheDocument();
    expect(renderedBlogLink).toHaveAttribute("href", blogLink.href);

    expect(renderedGardenLink).toBeInTheDocument();
    expect(renderedGardenLink).toHaveAttribute("href", gardenLink.href);
  });
});
