import ButtonLink from "@/components/Button/ButtonLink";

const ProjectsPage = () => {
  return (
    <div id="projects-page">
      <div className="projects-header">
        <h1>My Projects</h1>
        <div className="projects-header-button-container">
          <ButtonLink href="/" color="rosewater">
            HOME
          </ButtonLink>
          <ButtonLink href="/about" color="sky">
            ABOUT ME
          </ButtonLink>
          <ButtonLink href="/contact" color="green">
            GET IN TOUCH
          </ButtonLink>
        </div>
        <p>
          This is a collection of some of my programming projects. These are
          mostly just the ones I learned the most from and had the most fun
          with. To see all of my projects, please visit my{" "}
          <a href="https://github.com/leftysolara">GitHub</a> profile.
        </p>
      </div>
      <div className="projects-list">
        <div className="project rosewater">
          <div className="project-image-container">
            <img className="project-image" src="personal-website.png" />
          </div>
          <div className="project-info-container">
            <h2>Personal Website</h2>
            <p>
              This is the site you&apos;re looking at now! It&apos;s my personal
              website which provides information about me, my projects, and how
              to get in touch.
            </p>
            <p>
              The site was built using TypeScript, Vite, React, and Sass/SCSS.
              Tests are run using Vitest and React Testing Library.
            </p>
            <p>
              With this project I learned a few best practices for Sass/SCSS, as
              this was my first <em>real</em> project that used it. I also
              improved my testing skills a bit. The biggest thing I learned with
              this project was how to deploy a Vite/React application on AWS.
            </p>
            <p>
              <strong>Technologies used</strong>: Typescript, React, Sass/SCSS
            </p>
            <div className="project-button-container">
              <ButtonLink
                href="https://github.com/leftysolara/personal-website"
                color="sky"
              >
                VIEW THE CODE
              </ButtonLink>
              <ButtonLink href="/" color="green">
                VISIT THE SITE
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
