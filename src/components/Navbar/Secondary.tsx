import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icons from '../../assets/Icons';
import { ROOT_PATH } from '../../helpers/Slug';
import { slugFormatter } from '../../helpers/Utils';

const Secondary = ({ isSideDrawer }: { isSideDrawer: boolean }) => {
  const location = useLocation();

  const paths = location.pathname.split('/').slice(1);
  const breadcrumbs = paths.map((path, index) => ({
    name: slugFormatter(path),
    path: `${ROOT_PATH}${paths.slice(0, path === 'assign' ? index + 2 : path === "audio-management" ? index + 2 : path === "checking" ? index + 2 : path === 'annotation' ? index + 2 : path === 'validation' ? index + 2  : path === 'recreate' ? index + 2 : index + 1).join('/')}`,
    // path: `${ROOT_PATH}${paths.slice(0, path === "assign" ? index + 2 : index + 1).join('/')}}`,
  }));

  return (
    <div className={`flex justify-between items-center pt-4 pb-2 pr-4 ${isSideDrawer ? "pl-[296px]" : "pl-[85px]"} fixed w-full z-[90] bg-white`}>
      <div className="flex items-center">
        {breadcrumbs.map((breadcrumb, index) => (
          // <React.Fragment key={breadcrumb.path}>
          <React.Fragment key={index}>
            <Link to={breadcrumb.path}>
              <h1 className={`${index === breadcrumbs.length - 1
                ? 'text-ct-blue-60 font-medium'
                : 'text-blue-gray-A50 '
                } text-xxs`}
              >
                {breadcrumb.name === "Upload Audio Video" ? "Upload Audio/Video" : breadcrumb.name}
              </h1>
            </Link>
            {index < breadcrumbs.length - 1 && (
              <div className="w-[18px] h-[18px] flex justify-center items-center">
                <img className="w-[5px] h-[8px]" src={Icons.ChevronRight} alt="" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="flex items-center">
        <img src={Icons.admin} alt="user1" className="w-6 h-6 mr-2" />
        <div>
          <h4 className="text-xxs text-ct-blue-95 font-medium mb-0.5">Md. Jalal Uddin</h4>
          <h5 className="text-xxs text-blue-gray-75 mb-0">Admin</h5>
        </div>
        <button className="ml-5">
          <img src={Icons.arrow_drop_down_blue_gray} alt="user1" />
        </button>
      </div>
    </div>
  );
};

export default Secondary;
