import React from "react";
import "../index.css";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex flex-col items-center justify-center bg-black bg-opacity-60 p-8 rounded">
        <h1 className="text-6xl m-4 text-white text-shadow">404</h1>
        <p className="text-6xl m-4 text-white text-shadow">
          Página no encontrada.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
