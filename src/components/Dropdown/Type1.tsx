import React, { ReactElement, ReactNode } from "react";

type Props = {
  handleSelectedItem: (value: string) => void;
  data: string[];
  children: ReactNode;
  top: string;
  width: string;
}

const Type1 = ({ data, children, handleSelectedItem, top, width }: Props) => {
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
        {data.map((item) => (
          <button
            onClick={() => {
              setCurrent(item);
              setOpen(false);
              handleSelectedItem(item);
            }}
            className={`py-3 duration-300 ${width} ${current === item ? "bg-blue-10 hover:bg-blue-20 active:bg-blue-30" : "bg-white hover:bg-ct-blue-05 active:bg-ct-blue-10"
              }`}
          >
            <h3
              className={`text-xs font-medium ${current === item
                ? "text-primary-ct-blue-60"
                : "text-blue-gray-80"
                } text-center whitespace-nowrap`}
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
