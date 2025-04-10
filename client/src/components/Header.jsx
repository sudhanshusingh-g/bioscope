import React, { useState } from "react";
import Logo from "./Logo";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { useSelector } from "react-redux";
import Input from "../components/Input";
import Location from "./Location";
function Header() {
  const { user } = useSelector((state) => state.user);

  const [menu, setMenu] = useState(false);

  return (
    <header className="bg-white rounded px-4 py-2">
      <nav className="flex justify-between items-center">
        <Logo
          source={"/bioscope-logo.png"}
          className="h-14 w-14 cursor-pointer"
        />

        <div className="w-[40%]">
          <Input
            type="search"
            placeholder="Search for movies"
            className="text-sm"
          />
        </div>

        <div className="flex items-center space-x-4">
          <Location />
          {user ? (
            <>
              <div
                className={`flex items-center justify-center space-x-4 px-2 h-10 cursor-pointer border rounded-full border-gray-200`}
                onClick={() => setMenu((prev) => !prev)}
              >
                <HiMenuAlt1 />
                <div className="h-8 w-8">
                  <img
                    src={user?.profileImage}
                    alt={user?.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                {menu && (
                  <div
                    className={
                      "bg-white p-2 flex flex-col space-y-4 absolute  shadow rounded top-16 right-10"
                    }
                  >
                    <div className="flex items-center justify-center space-x-2 hover:bg-[#4d6666] hover:text-white p-2 rounded ">
                      <FaUser />
                      <span>Profile</span>
                    </div>
                    <div
                      className="flex items-center justify-center space-x-2 hover:bg-[#4d6666] hover:text-white p-2 rounded"
                      onClick={() => localStorage.removeItem("token")}
                    >
                      <CiLogout />
                      <span>Logout</span>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
            <button className="bg-[#4d6666]">
              Sign in
            </button>
            
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
