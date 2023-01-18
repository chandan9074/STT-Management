import React from "react";
import Buttons from "../../../Buttons";
import Icons from "../../../../assets/Icons";
import upload from "../../../../assets/Icons/upload.svg";
import add from "../../../../assets/Icons/add.svg";
import { Filter } from "../../../Filter";
import { filterData } from "../../../../data/script/filter";

const Header = () => {
  return (
    <div className="mt-3 flex items-center justify-between">
      <div>
        <h1 className="text-heading-6 text-ct-blue-95 font-medium">Script</h1>
        <p className="text-small text-ct-blue-90-70% mt-1.5">
          List of Script, Create Script
        </p>
      </div>
      <div className="flex items-center">
        <Buttons.BgHoverBtn
          title="Delete"
          paddingY="py-2"
          paddingX="px-4"
          borderRadius="rounded-[6px]"
          textColor="text-secondary-blue-50"
          fontSize="text-small"
          fontWeight="font-medium"
          duration="duration-300"
          hoverBgColor="hover:bg-white"
        />
        <Buttons.BgHoverBtn
          title="Edit"
          paddingY="py-2"
          paddingX="px-4"
          borderRadius="rounded-[6px]"
          textColor="text-secondary-blue-50"
          fontSize="text-small"
          fontWeight="font-medium"
          duration="duration-300"
          hoverBgColor="hover:bg-white"
          marginX="mx-2"
        />
        <form>
          <div className="flex items-center py-2 px-3 bg-blue-gray-A10 rounded-[4px] focus-within:rounded-full">
            <img src={Icons.search} alt="" className="mr-2" />
            <input
              type="text"
              placeholder="Search with script ID, Title..."
              className="bg-transparent text-small text-ct-blue-90-70% outline-none border-none w-52"
            />
          </div>
        </form>
        <Filter.Type1 filterData={filterData} />
        <Buttons.IconWithTitle
          title="Upload Script"
          paddingY="py-2"
          paddingX="px-4"
          image={upload}
          imageMargin="mr-1"
          textColor="text-ct-blue-80"
          fontSize="text-small"
          fontWeight="font-medium"
          duration="duration-300"
          borderRadius="rounded-[6px]"
          border="border border-ct-blue-30"
          bgColor="bg-white"
          marginX="ml-6 mr-3"
        />
        <Buttons.IconWithTitle
          title="Create Script"
          paddingY="py-2"
          paddingX="px-4"
          image={add}
          imageMargin="mr-1"
          textColor="text-white"
          fontSize="text-small"
          fontWeight="font-medium"
          duration="duration-300"
          borderRadius="rounded-[6px]"
          bgColor="bg-primary-ct-magenta-60"
        />
      </div>
    </div>
  );
};

export default Header;
