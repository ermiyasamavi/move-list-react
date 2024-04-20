import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full  bg-slate-950 px-10 py-15 fixed z-10 top-0">
      <nav className=" w-full flex justify-between ">
        <div className="w-52 h-16 flex   justify-around items-center">
          <img
            src={logo}
            alt="logo"
            className="hidden md:block  h-16 w-30 object-contain"
          />
          <h1 className="text-indigo-800 text-xl font-semibold">WORLD MOVIE</h1>
        </div>
        <ul className="w-80 hidden md:flex justify-around  items-center  text-white ">
          <Link to="/" className="border-bon">
            Home
          </Link>
          <Link to="/move" className="border-bon">
            Movoes
          </Link>
          <Link to="/score" className="border-bon">
            Score
          </Link>
          <Link
            to="/login"
            className="border border-white py-2 px-3 rounded-lg ml-3 hover:bg-slate-700	"
          >
            Login
          </Link>
        </ul>
        <button
          className="block md:hidden text-white text-xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <IoClose /> : <IoMenu />}
        </button>
      </nav>
      {open && (
        <div
          className="flex 
          bg-slate-950 w-full  flex-col px-4 pt-7 pb-6 text-white gap-6 text-[16px]"
        >
          <Link to="/" className="hover:text-slate-400">
            Home
          </Link>
          <Link to="/move" className="hover:text-slate-400">
            Movoes
          </Link>
          <Link to="/score" className="hover:text-slate-400">
            Score
          </Link>
          <Link
            to="/login"
            className="w-16   border border-white py-2 px-3 rounded-lg ml-0 hover:bg-slate-700	"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
