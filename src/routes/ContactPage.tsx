const ContactPage = () => {
  return (
    <div id="contact-page">
      <div id="main-content">
        <h1>Contact Me</h1>
        <p>
          For inquiries about me or my work, feel free to send me an email at{" "}
          <a href="mailto:julianne@julianneadams.dev">
            julianne@julianneadams.dev
          </a>
          .
        </p>
        <p>
          I can also be reached through{" "}
          <a href="https://github.com/LeftySolara">GitHub</a>,{" "}
          <a href="https://linkedin.com/in/julianneadams">LinkedIn,</a> and{" "}
          <a href="https://twitter.com/leftysolara">Twitter</a>.
        </p>
      </div>
      <div id="contact-image-container">
        <img src="contact-image.jpg" />
      </div>
    </div>
  );
};

export default ContactPage;
