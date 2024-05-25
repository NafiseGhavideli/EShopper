import { useRouteError } from "react-router-dom";

 function Error() {
  const error = useRouteError();

  return (
    <div id="error-page" className="font-poppins border-neutral-100 top-1/2 left-1/2 absolute -translate-x-1/2">
      <h1 className="text-2xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <span>{error.statusText || error.message}</span>
      </p>
    </div>
  );
}
export default Error;