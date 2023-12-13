import ButtonLink from "@/components/Button/ButtonLink";
import {
  ProjectDisplayProps,
  ProjectDisplay,
} from "@/components/ProjectDisplay/ProjectDisplay";

const projectDisplayProps: ProjectDisplayProps = {
  colorBackground: true,
  imageSrc: "personal-website.png",
  projectTitle: "Personal Website",
  projectDescription: [
    "This is the site you're looking at now! It's my personal website which provides information about me, my projects, and how to get in touch.",
    "The site was built using TypeScript, Vite, React, and Sass/SCSS. Tests are run using Vitest and React Testing Library.",
    "With this project I learned a few best practices for Sass/SCSS, as this was my first real project that used it. I also improved my testing skills a bit. The biggest thing I learned with this project was how to deploy a Vite/React application on AWS.",
  ],
  techUsed: ["TypeScript", "React", "Sass/SCSS"],
  repoLink: "https://githuib.com/leftysolara/personal-website",
  siteLink: "/",
};

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
        <ProjectDisplay projectInfo={projectDisplayProps}></ProjectDisplay>
      </div>
    </div>
  );
};

export default ProjectsPage;
