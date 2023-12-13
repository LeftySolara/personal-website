import ButtonLink from "@/components/Button/ButtonLink";
import { ProjectDisplay } from "@/components/ProjectDisplay/ProjectDisplay";
import { projects } from "@/components/ProjectDisplay/projects.json";

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
        {projects.map((project, index) => {
          return <ProjectDisplay projectInfo={project} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;
