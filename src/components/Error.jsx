import React from "react";
import { Link, useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();
  return (
    <div className="flex flex-col justify-center h-full items-center">
      <h1 className="text-7xl font-mono relative top-[20rem]">404 not found :(</h1>
      <Link to="/" className="text-2xl text-blue-500 my-9 font-mono relative top-[20rem] hover:underline">{"<--"}Home</Link>
    </div>
  );
}

export default Error;
