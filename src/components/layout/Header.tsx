import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Leaf } from "lucide-react";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0C4105] shadow-sm shadow-gray-800 z-10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex flex-row ml-2 items-center">
              <Leaf className="h-10 w-10 text-yellow-400" />
              <div className="flex flex-col pl-4">
                <h2 className="text-xl font-bold text-yellow-400">
                  MulberryLab
                </h2>
                <span className="text-xs font-normal text-yellow-400">
                  Where Nature Meets Innovation
                </span>
              </div>
            </div>
          </Link>

          <div className="flex space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium ${
                isActive("/") ? "text-yellow-400" : "text-white"
              }`}
            >
              Home
            </Link>
            <Link
              to="/upload"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive("/upload") ? "text-yellow-400" : "text-white"
              }`}
            >
              Fruit ID
            </Link>
            <Link
              to="/upload-leaf"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive("/upload-leaf") ? "text-yellow-400" : "text-white"
              }`}
            >
              Leaf Disease
            </Link>
            <Link
              to="/info"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive("/info") ? "text-yellow-400" : "text-white"
              }`}
            >
              Information
            </Link>
            <Link
              to="/recipe"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive("/recipe") ? "text-yellow-400" : "text-white"
              }`}
            >
              Recipe
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive("/about") ? "text-yellow-400" : "text-white"
              }`}
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
