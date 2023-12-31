import ButtonLink from "@/components/Button/ButtonLink";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1 className="hero-heading">
          Julianne
          <br />
          Adams
        </h1>
        <div className="hero-body-container">
          <p className="hero-body">
            I’m a seasoned IT professional who spends her spare time crafting
            contemporary websites. Building effective solutions one line of code
            at a time.
          </p>
          <p className="hero-body">
            I am also a bearer of knowledge. Sharing what I’ve learned is my
            personal way of giving back to the community. Let’s create a better
            digital world <span className="red">t</span>
            <span className="peach">o</span>
            <span className="yellow">g</span>
            <span className="green">e</span>
            <span className="blue">t</span>
            <span className="lavender">h</span>
            <span className="mauve">e</span>
            <span className="red">r</span>.
          </p>
        </div>
        <div className="button-container">
          <ButtonLink color="rosewater" href="/about">
            ABOUT ME
          </ButtonLink>
          <ButtonLink color="sky" href="/projects">
            MY PROJECTS
          </ButtonLink>
          <ButtonLink color="green" href="/contact">
            GET IN TOUCH
          </ButtonLink>
        </div>
      </div>
      <div className="hero-image-container">
        <img className="hero-image" src="hero-image.jpg" />
      </div>
    </div>
  );
};

export default Hero;
