export type ButtonColor = "rosewater" | "sky" | "green";

/**
 * A simple button component.
 *
 * @param color - The button's background color.
 * @param href - Where the button links to.
 * @param children - The text for the button to display.
 */

const Button = ({
  color,
  href,
  children,
}: {
  color: ButtonColor;
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a href={href}>
      <button className={`button ${color}`}>{children}</button>
    </a>
  );
};

export default Button;
