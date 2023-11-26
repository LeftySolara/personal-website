import { Link } from "react-router-dom";

export type ButtonLinkColor = "rosewater" | "sky" | "green";

/**
 * A simple button component that acts as a link.
 *
 * @param color - The button's background color.
 * @param href - Where the button links to.
 * @param children - The text for the button to display.
 */

const ButtonLink = ({
  color,
  href,
  children,
}: {
  color: ButtonLinkColor;
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link to={href} className={`button ${color}`}>
      {children}
    </Link>
  );
};

export default ButtonLink;
