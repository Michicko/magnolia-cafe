import { Link, useRouteError } from "react-router-dom";

const ErrorCp = () => {
  const error = useRouteError();
  const { status, statusText } = error;
  return (
    <div className="error-page">
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="error-text">
          <i>
            {status} {statusText}
          </i>
        </p>
        <Link to="/cp" className="error-link">
          Back to Control Panel
        </Link>
      </div>
    </div>
  );
};

export default ErrorCp;
