import React from "react";
import Icons from "../../../../assets/Icons";

const GraphTooltip = () => {
  return (
    <div className="w-20 h-20 bg-tooltip-bg">
      <img
        src={Icons.blackDropArrow}
        alt=""
        className={`w-10 h-6 absolute -bottom-3.5 left-1/2 transform -translate-x-1/2`}
      />
      
    </div>
  );
};

export default GraphTooltip;
