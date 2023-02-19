import React from 'react';
import { useLocation } from 'react-router-dom';
import Icons from "../../assets/Icons";
import { CREATE_TARGET_PATH } from '../../helpers/Slug';
import { slugFormatter } from '../../helpers/Utils';

const Secondary = () => {

  const location = useLocation();

  return (
    <div className="flex justify-between items-center pt-4 pb-2 pr-4 pl-[73px] fixed w-full z-[90] bg-white">
      <div className={`${location.pathname === CREATE_TARGET_PATH ? 'ml-[23px]' : 'ml-[240px]'} flex items-center`}>
        {
          location.pathname.split('/').slice(1)?.map((value, i) => (
            <div key={i} className='flex items-center gap-x-[4px]'>
              <h1 className={`${location.pathname.split('/').length - 2 === i ? 'text-ct-blue-60 font-medium' : 'text-blue-gray-A50 '} text-xxs`}>{slugFormatter(value)}</h1>
              <div className={`${location.pathname.split('/').length - 2 === i ? 'hidden' : ''} w-[18px] h-[18px] flex justify-center items-center`}>
                <img className='w-[5px] h-[8px]' src={Icons.ChevronRight} alt="" />
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex items-center">
        <img src={Icons.admin} alt="user1" className="w-6 h-6 mr-2" />
        <div>
          <h4 className="text-xxs text-ct-blue-95 font-medium mb-0.5">
            Md. Jalal Uddin
          </h4>
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