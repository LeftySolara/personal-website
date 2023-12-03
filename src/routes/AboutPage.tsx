import ButtonLink from "@/components/Button/ButtonLink";

const AboutPage = () => {
  return (
    <div id="about-page">
      <div id="about-hero">
        <h1>About Me</h1>
        <p>
          <span className="quote">
            “Maybe there’s no one who’s perfect,
            <br />
            but who wants to be anyway?”
          </span>
          <br />— Takeshi Hosomi
        </p>
        <div className="about-text">
          <p>
            Hi, I’m Julianne! I’m a highly-motivated IT professional with a
            passion for web development.
          </p>
          <p>
            By day, I help educators and researchers practice their crafts by
            providing effective infrastructure and timely support. By night, I’m
            an independent web developer attempting to hone her skills through
            practice and implementation.
          </p>
          <p>
            When I’m not writing code, you can find me playing the guitar,
            performing game master duties for tabletop role-playing games, or
            tending to my{" "}
            <a href="https://wiki.julianneadams.dev">digital garden</a>.
          </p>
        </div>
        <div className="about-button-container">
          <ButtonLink color="rosewater" href="/">
            HOME
          </ButtonLink>
          <ButtonLink color="sky" href="/projects">
            MY PROJECTS
          </ButtonLink>
          <ButtonLink color="green" href="/contact">
            GET IN TOUCH
          </ButtonLink>
        </div>
      </div>
      <div className="about-image-container">
        <img className="about-image" src="about-image.jpg" />
      </div>
    </div>
  );
};

export default AboutPage;
