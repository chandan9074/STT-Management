import React from "react";
import Icons from "../../assets/Icons";

const Type1 = ({ data }: { data: number[] }) => {
  const [current, setCurrent] = React.useState(data[0]);
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center px-3 py-1.5 rounded-[4px] bg-ct-blue-70 border border-transparent hover:border-ct-blue-20 duration-300"
      >
        <span className="text-xs font-medium text-ct-blue-10 mr-2">
          {current}
        </span>
        <img src={Icons.whiteDropArrow} alt="" className="w-2 h-1.5" />
      </button>
      <div
        className={`bg-white rounded-[4px] overflow-hidden absolute w-full animate-fadeIn ${
          open ? "block" : "hidden"
        }`}
      >
        {data.map((item) => (
          <button
            onClick={() => {setCurrent(item); setOpen(false)}}
            className={`py-2.5 w-full ${
              current === item ? "bg-blue-10" : "bg-white"
            }`}
          >
            <h3
              className={`text-xs font-medium border-l-4 ${
                current === item
                  ? "text-primary-ct-blue-60 border-primary-ct-blue-60"
                  : "text-blue-gray-80 border-transparent"
              } text-center`}
            >
              {item}
            </h3>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Type1;
