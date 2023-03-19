import React from "react";
import Icons from "../../assets/Icons";
import sidebarMenu from "../../data/sidebarLinks";
import { Link, useLocation } from "react-router-dom";

const Primary = () => {
  const location = useLocation();
  return (
    <div className="fixed z-[110] flex flex-col items-center  h-screen bg-gradient-to-r from-primary-ct-blue-60 to-secondary-blue-50 px-4 pb-4 pt-5">
      <Link to="/" className={`rounded-full`}>
        <img src={Icons.hamburger} alt="hamburger" className="w-6 h-6" />
      </Link>
      <div className="mt-14">
        {sidebarMenu.category1.map((item, index) => (
          <div key={index} className="mb-5 relative group">
            <div className="bg-black-90 absolute left-14 py-1.5 px-3 rounded-[4px] text-ct-blue-05 whitespace-nowrap animate-fadeIn hidden group-hover:block">
              {item.menu_title}
              <img
                src={Icons.left_arrow_black}
                alt=""
                className="absolute top-1/2 -translate-y-1/2 -left-1.5"
              />
            </div>
            <Link
              key={item.path}
              to={item.path}
              className={`p-1.5 rounded-full hover:bg-ct-blue-20 block hover:bg-opacity-40 duration-300 border border-transparent hover:border-ct-blue-20 group ${location.pathname.split("/")[1] === item.path.split("/")[1]
                ? "shadow-light-blue "
                : null
                }`}
            >
              <img
                src={item.menu_icon}
                alt=""
                className={`w-6 h-6 group-hover:opacity-100 duration-300 ${location.pathname.split("/")[1] === item.path.split("/")[1]
                  ? "opacity-100"
                  : "opacity-50"
                  }`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Primary;
