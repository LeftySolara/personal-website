import { Icon } from "@iconify/react";

const SocialMediaButton = ({
  iconCode,
  href,
}: {
  iconCode: string;
  href: string;
}) => {
  const socialButtonColor = "#51576d";
  const socialButtonSize = "60";

  return (
    <a href={href}>
      <Icon
        icon={iconCode}
        color={socialButtonColor}
        height={socialButtonSize}
        width={socialButtonSize}
      />
    </a>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-body-container">
        <p>
          Check out my blog <a href="https://blog.julianneadams.dev">here</a>!
          If you&apos;re in the mood to learn, try perusing through my{" "}
          <a href="https://wiki.julianneadams.dev">digital garden</a>.
        </p>
      </div>
      <div className="socials-container">
        <SocialMediaButton
          iconCode="ic:baseline-email"
          href="mailto:julianne@julianneadams.dev"
        />
        <SocialMediaButton
          iconCode="mdi:github"
          href="https://github.com/LeftySolara"
        />
        <SocialMediaButton
          iconCode="mdi:linkedin"
          href="https://linkedin.com/in/julianneadams"
        />
        <SocialMediaButton
          iconCode="mdi:twitter"
          href="https://twitter.com/leftysolara"
        />
      </div>
    </div>
  );
};

export default Footer;
