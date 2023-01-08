import React, { useContext } from "react";
import Icons from "../../assets/Icons";
import { BillingContext } from "../../context/BillingProvider";

const Type1 = ({ data }: { data: number[] }) => {
  const [current, setCurrent] = React.useState(data[0]);
  const [open, setOpen] = React.useState(false);

  const billingContext = useContext(BillingContext);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center px-3 py-1 rounded-[4px] bg-ct-blue-70 border border-transparent hover:border-ct-blue-20 duration-300"
      >
        <span className="text-xs font-medium text-ct-blue-10 mr-2.5">
          {current}
        </span>
        <img src={Icons.whiteDropArrow} alt="" className="w-2 h-1.5" />
      </button>
      <div
        className={`bg-white z-50 rounded-[4px] overflow-hidden absolute w-full animate-fadeIn ${
          open ? "block" : "hidden"
        }`}
      >
        {data.map((item) => (
          <button
            onClick={() => {
              setCurrent(item);
              setOpen(false);
              billingContext.handleAmountDropDown(item);
            }}
            className={`py-2.5 w-full ${
              current === item ? "bg-blue-10" : "bg-white"
            }`}
          >
            <h3
              className={`text-xs font-medium border-l-2 ${
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
