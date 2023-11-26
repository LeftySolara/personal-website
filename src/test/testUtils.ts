import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { JSXElementConstructor, ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

const renderWithRouter = (
  // @eslint-disable-next-line @typescript-eslint/no-explicit-any
  ui: ReactElement<any, string | JSXElementConstructor<any>>,
  { route = "/" } = {},
) => {
  window.history.pushState({}, "Test page", route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

export { renderWithRouter };
