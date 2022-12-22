import React from "react";

type Props = {
  first: string;
  second: string;
  active: string;
  handleType: (value: string) => void;
};

const ToggleRounded = ({ first, second, active, handleType }: Props) => {
  return (
    <div className="p-0.5 rounded-[24px] bg-white shadow-md">
      <button
        onClick={() => handleType(first)}
        className={`text-xxs font-bold py-2.5 px-9 rounded-[24px] duration-300 ${
          active === first
            ? "bg-ct-blue-60 text-white"
            : "hover:bg-ct-blue-60 hover:bg-opacity-5 text-ct-blue-60"
        }`}
      >
        {first}
      </button>
      <button
        onClick={() => handleType(second)}
        className={`text-xxs font-bold py-2.5 px-9 rounded-[24px] duration-300 ${
          active === second
            ? "bg-primary-ct-magenta-60 text-white"
            : "hover:bg-primary-ct-magenta-60 text-primary-ct-magenta-60 hover:bg-opacity-5"
        }`}
      >
        {second}
      </button>
    </div>
  );
};

export default ToggleRounded;
