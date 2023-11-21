const Button = ({
  label,
  color,
  link,
}: {
  label: string;
  color: string;
  link: string;
}) => {
  return (
    <a href={`${link}`}>
      <button className={`button button-${color}`}>{label}</button>
    </a>
  );
};

export default Button;
