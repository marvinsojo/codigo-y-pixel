import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex flex-col items-center justify-center bg-black bg-opacity-60 p-8 rounded">
        <h1 className="text-6xl m-4 text-white text-shadow">
          Bienvenidos a Código y Píxel
        </h1>
        <div className="flex justify-center sm:justify-start  m-4">
          <Link to="/about">
            <Button text="About us" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
