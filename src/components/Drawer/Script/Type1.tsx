import { Drawer } from "antd";
import React from "react";
import Icons from "../../../assets/Icons";
import { scriptColorData } from "../../../data/assign/AssignData";
import { filterData } from "../../../data/script/filter";
import { getRandomInt } from "../../../helpers/Utils";
import Buttons from "../../Buttons";
import { Filter } from "../../Filter";
import { SearchBox } from "../../SearchBox";
import Table from "../../Table";

type Props = {
  isDrawerOpen: boolean;
  drawerClose: () => void;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Type1 = ({
  isDrawerOpen,
  drawerClose,
  modalOpen,
  setModalOpen,
}: Props) => {
  const onClose = () => {
    drawerClose();
  };

  return (
    <Drawer
      closeIcon={false}
      placement="right"
      onClose={onClose}
      open={isDrawerOpen}
      width="auto"
    >
      <div className="relative flex items-start">
        <div className="bg-ct-blue-05 w-[555px]">
          <div className="p-6">
            <div className="flex items-center gap-x-7 mb-6">
              <Buttons.IconButton.Circle
                size="medium"
                variant="CT-Blue"
                icon={<img src={Icons.CloseIconButton} alt="" />}
                border="border"
                background="white"
                onClick={() => onClose()}
              />
              <h1 className="text-ct-blue-95 text-[18px] font-medium">
                Select Script
              </h1>
            </div>
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center">
                <SearchBox.Type1
                  inputWidth="w-[172px]"
                  placeholder="Search"
                  bgColor="bg-blue-gray-A10"
                  paddingX="px-3"
                  paddingY="py-2"
                  textColor="text-blue-gray-80"
                />
                <Filter.Type1 filterData={filterData} align="center" />
              </div>
              <div>
                <Buttons.BgHoverBtn
                  border="border"
                  bgColor="bg-primary-ct-blue-60"
                  textColor="text-white"
                  title="Save"
                  paddingX="px-[32px]"
                  paddingY="py-[8px]"
                  borderRadius="rounded-[6px]"
                  hoverBgColor="bg-primary-ct-blue-60"
                />
              </div>
            </div>
          </div>
          <Table.Type9 />
        </div>
        <div className="relative w-[328px]">
          <div className="p-6">
            <h1 className="text-ct-blue-95 text-[18px] font-medium">
              Selected Scripts- 50
            </h1>
          </div>
          <div className="flex items-center gap-x-2 ml-4 w-[312px] overflow-x-auto scrollbar-hide">
            <div className="py-1.5 px-3 rounded-[20px] bg-ct-blue-05 text-blue-gray-75 font-medium whitespace-nowrap">
              Natural and Pure Sceince (10)
            </div>
            <div className="py-1.5 px-3 rounded-[20px] bg-ct-blue-05 text-blue-gray-75 font-medium whitespace-nowrap">
              Natural and Pure Sceince (10)
            </div>
          </div>
          <div className="py-3 px-4 flex flex-col gap-y-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
              <div
                className={`${
                  scriptColorData[getRandomInt(0, 6, index)].rowBg
                } rounded-[4px] py-3 px-2 inline-flex items-center gap-x-2 w-full`}
              >
                <button
                  className="inline-flex gap-x-2 items-center"
                  onClick={() => setModalOpen(!modalOpen)}
                >
                  <div
                    className={`${
                      scriptColorData[getRandomInt(0, 6, index)].id
                    } text-xxs font-semibold px-1.5 py-0.5 rounded-[4px] ${
                      scriptColorData[getRandomInt(0, 6, index)].idBg
                    }`}
                  >
                    227
                  </div>
                  <p className="m-0 text-ct-blue-95 text-xs font-[300] truncate text-ellipsis w-[218px]">
                    শহরের মাথা ছাড়িয়ে উঁচু বেদির ওপরে সু শহরের মাথা ছাড়িয়ে
                    উঁচু বেদির ওপরে সু
                  </p>
                </button>
                <button>
                  <img src={Icons.cancel} alt="" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default Type1;
