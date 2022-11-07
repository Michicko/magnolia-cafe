import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="error-text">
        <i>Page Not Found</i>
      </p>
      <Link to="/" className="error-link">
        Back to home
      </Link>
    </div>
  );
};

export default ErrorPage;
