import React from "react";
import Icons from "../../../../../../assets/Icons";
import GraphTooltip from "../../GraphTooltip";

const Graph = () => {
  return (
    <div className="w-[348px] h-full flex justify-center">
      <div className="w-[226px] h-[314px] relative">
        <div className="absolute top-0 left-[3.3px]">
          {/* <div className="w-20 h-20 bg-black absolute bottom-24" /> */}
          <img src={Icons.Rajbongshi} alt="" className="opacity-50" />
        </div>
        <div className="absolute top-9 left-[17px]">
          <img src={Icons.Kamrupi} alt="" />
        </div>
        <div className="absolute   top-[78px] left-0">
          <div className=" absolute bottom-[95px]">
            <GraphTooltip />
          </div>
          <img src={Icons.Barendri} alt="" className="opacity-50" />
        </div>
        <div className="absolute  opacity-50 top-[138px] left-[23px]">
          <img src={Icons.SouthEastBangla} alt="" />
        </div>
        <div className="absolute  opacity-50 top-[72px] left-[76px]">
          <img src={Icons.MiddleEastBangla} alt="" />
        </div>
        <div className="absolute  opacity-50 top-[82.5px] left-[140px]">
          <img src={Icons.NorthEastBangla} alt="" />
        </div>
        <div className="absolute  opacity-50 top-[129px] left-[122px]">
          <img src={Icons.SouthBangla} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Graph;
