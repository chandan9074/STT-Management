import React, { ReactElement, ReactNode } from "react";

type Props = {
  handleSelectedItem: (value: string) => void;
  data: string[];
  children: ReactNode;
  top: string;
  width: string;
  activeMonth?: string;
  handleCurrentWeek?: (value: number) => void;
}

const Type1 = ({ data, children, handleSelectedItem, top, width, activeMonth, handleCurrentWeek }: Props) => {
  const [current, setCurrent] = React.useState(data[0]);
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-col items-end">
      {React.Children.map(children, child => (
        React.cloneElement(child as ReactElement, { onClick: () => setOpen(!open) })
      ))}
      <div className={`bg-transparent fixed top-0 left-0 w-full h-screen z-[110] ${open ? "block" : "hidden"}`} onClick={() => setOpen(!open)} />
      <div
        className={`bg-white shadow-bottom-light-blue-20 z-[120] rounded-[4px] overflow-hidden absolute ${top} animate-fadeIn flex flex-col ${open ? "block" : "hidden"
          }`}
      >
        {data.map((item, index: number) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(item);
              setOpen(false);
              handleSelectedItem(item);
              handleCurrentWeek && handleCurrentWeek(index + 1)
            }}
            className={`py-3 pl-3 duration-300 text-xs font-medium ${width} ${current === item ? "bg-blue-10 hover:bg-blue-20 active:bg-blue-30 text-primary-ct-blue-60" : "bg-white hover:bg-ct-blue-05 active:bg-ct-blue-10 text-blue-gray-80"} whitespace-nowrap text-left`}
          >
            {/* <h3
              className={`text-xs font-medium ${current === item
                ? "text-primary-ct-blue-60"
                : "text-blue-gray-80"
                } whitespace-nowrap`}
            > */}
            {item} {activeMonth && activeMonth.slice(0, 3)})
            {/* </h3> */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Type1;
