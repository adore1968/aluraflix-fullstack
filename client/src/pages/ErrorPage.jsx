import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen pt-5 text-center text-white bg-black">
      <h1 className="md:text-4xl text-3xl">Oops!</h1>
      <p className="my-1 text-2xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-lg">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
