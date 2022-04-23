import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex bg-green-300 h-16 items-center justify-center">
      <div>
        <Link className="text-xl font-semibold ml-8 tex" to="/">Home</Link>
        <Link className="text-xl font-semibold ml-8 tex" to="/add">Order Food</Link>
      </div>
    </nav>
  );
};

export default Navbar;
