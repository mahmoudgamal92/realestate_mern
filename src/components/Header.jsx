import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md p-3">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">
          <span className="text-slate-500">Real</span>
          <span className="text-slate-700">Estate</span>
        </h1>

        <form className="bg-slate-100">
          <input
            type="text"
            placeholder="Search ...."
            className="bg-transparent"
          />
        </form>
        <ul className="flex gap-4">
          <Link to="/About">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to="/Profile">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Profile
            </li>
          </Link>

          <Link to="/SignIn">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              SignIn
            </li>
          </Link>

          <Link to="/SignUp">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              SignUp
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
