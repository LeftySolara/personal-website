import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import ButtonLink from "@/components/Button/ButtonLink";

const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div id="error-page">
        <h1>{error.status}</h1>
        <p>{error.statusText}</p>
        <ButtonLink href="/" color="rosewater">
          RETURN TO HOME PAGE
        </ButtonLink>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div id="error-page">
        <h1>Unexpected error</h1>
        <p>Something went wrong.</p>
        <p>
          <i>{error.message}</i>
        </p>
        <ButtonLink href="/" color="rosewater">
          RETURN TO HOME PAGE
        </ButtonLink>
      </div>
    );
  } else {
    return <></>;
  }
};

export default ErrorPage;
