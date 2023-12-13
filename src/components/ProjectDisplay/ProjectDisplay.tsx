import ButtonLink from "@/components/Button/ButtonLink";

/** The props type of {@link ProjectDisplay | `ProjectDisplay` }. */
export interface ProjectDisplayProps {
  /** Whether to fill the background with color. Currently only fills with the color "rosewater". */
  colorBackground: boolean;

  /** Path to the image to display. */
  imageSrc: string;

  /** The title of the project. */
  projectTitle: string;

  /**
   * The description of the project.
   *
   * Each string in the passed array will be rendered as a separate \<p> element.
   */
  projectDescription: Array<string>;

  /** The list of technologies used in the project. */
  techUsed: Array<string>;

  /** Link to the project's repository. */
  repoLink: string;

  /** Link to the project website. */
  siteLink?: string;
}

/**
 * Display information about a project.
 *
 * @category Component
 */
export const ProjectDisplay = ({
  projectInfo,
}: {
  projectInfo: ProjectDisplayProps;
}) => {
  const {
    colorBackground,
    imageSrc,
    projectTitle,
    projectDescription,
    techUsed,
    repoLink,
    siteLink,
  } = projectInfo;

  return (
    <div className={colorBackground ? "project rosewater" : "project"}>
      <div className="project-image-container">
        <img className="project-image" src={imageSrc} />
      </div>
      <div className="project-info-container">
        <h2>{projectTitle}</h2>
        {projectDescription.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
        <p>
          <strong>Technologies used</strong>:{" "}
          {techUsed.map((tech, index) => {
            if (index === techUsed.length - 1) {
              /* Last item in list */
              return tech;
            } else {
              return `${tech}, `;
            }
          })}
        </p>
        <div className="project-button-container">
          <ButtonLink href={repoLink} color="sky">
            VIEW THE CODE
          </ButtonLink>
          {siteLink && (
            <ButtonLink href={siteLink} color="green">
              VISIT THE SITE
            </ButtonLink>
          )}
        </div>
      </div>
    </div>
  );
};
