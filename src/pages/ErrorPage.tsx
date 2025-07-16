import NavBar from "@/components/NavBar";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error))
    return (
      <div>
        <NavBar />
        <div className="text-center mt-10">
          <h2 className="text-5xl font-semibold mb-4">Oops...</h2>
          <p className="text-lg">The page you have entered is invalid.</p>
        </div>
      </div>
    );
  else if (error instanceof Error)
    return (
      <div>
        <NavBar />
        <div className="text-center mt-10">
          <h2 className="text-5xl font-semibold mb-4">Oops...</h2>
          <p className="text-lg">An error has occurred.</p>
          <p className="text-lg text-destructive">Error: {error.message}</p>
        </div>
      </div>
    );
  else
    return (
      <div>
        <NavBar />
        <div className="text-center mt-10">
          <h2 className="text-5xl font-semibold mb-4">Oops...</h2>
          <p className="text-lg">Unknown Error</p>
        </div>
      </div>
    );
};

export default ErrorPage;
