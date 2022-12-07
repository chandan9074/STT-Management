import React from "react";
import Icons from "../../assets/Icons";
import sidebarMenu from "../../data/sidebarLinks";
import { Link, useLocation } from "react-router-dom";

const Primary = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="fixed z-50 flex flex-col items-center  h-screen bg-gradient-to-r from-primary-ct-blue-60 to-secondary-blue-50 px-4 pb-4 pt-5">
      <Link to="/" className={`rounded-full`}>
        <img src={Icons.hamburger} alt="hamburger" className="w-6 h-6" />
      </Link>
      <div className="mt-14">
        {sidebarMenu.category1.map((item, index) => (
          <Link
              key={item.path}
            to={item.path}
            className={`p-1.5 rounded-full mb-5 hover:bg-ct-blue-20 block hover:bg-opacity-40 duration-300 border border-transparent hover:border-ct-blue-20 group ${
              location.pathname === item.path ? "shadow-light-blue " : null
            }`}
          >
            <img
              src={item.menu_icon}
              alt=""
              className={`w-6 h-6 opacity-50 group-hover:opacity-100 duration-300 ${
                location.pathname === item.path ? "opacity-100" : null
              }`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Primary;
