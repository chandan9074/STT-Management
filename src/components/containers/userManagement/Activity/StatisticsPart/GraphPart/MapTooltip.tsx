import React from "react";
import Icons from "../../../../../../assets/Icons";
import { localityDataDT } from "../../../../../../types/userManagementTypes";

const MapTooltip = ({
    data,
    validBgColor,
    titleColor,
    align,
}: {
    data: localityDataDT;
    validBgColor: string;
    titleColor: string;
    align: "left" | "right" | "center";
}) => {

    return (
        <div className="px-5 py-6 bg-tooltip-bg rounded-[12px] animate-fadeIn">
            <h1 className={`text-base font-semibold ${titleColor} mb-0`}>
                {data?.name}
            </h1>
            <div className="flex items-center gap-x-1 mt-4">
                <div className="py-1 px-2 rounded-[4px] bg-secondary-blue-50 bg-opacity-[0.12] w-24">
                    <h3 className="mb-0 text-white text-xxs">Collected</h3>
                    <h3 className="mb-0 text-blue-10 font-medium">
                        {data?.collected} audios
                    </h3>
                </div>
                <div
                    className={`py-1 px-2 rounded-[4px] ${validBgColor} bg-opacity-[0.12] w-24`}
                >
                    <h3 className="mb-0 text-white text-xxs">Duration</h3>
                    <h3 className="mb-0 text-blue-10 font-medium">{data?.duration}h</h3>
                </div>
                <div className="py-1 px-2 rounded-[4px] bg-medium-purple-bg bg-opacity-[0.12] w-24">
                    <h3 className="mb-0 text-white text-xxs">Speaker</h3>
                    <h3 className="mb-0 text-blue-10 font-medium">
                        {data?.speaker}
                    </h3>
                </div>
            </div>
            <div className="w-full border-t border-blue-gray-75 bg-opacity-50 border-dashed mt-5" />
            <div className="mt-2 flex items-center">
                <img src={Icons?.schedule} alt="schedule" />
                <h4 className="text-small text-white mb-0 ml-2">
                    Last Update: {data?.lastUpdate}
                </h4>
            </div>
            <img
                src={Icons.blackDropArrow}
                alt=""
                className={`w-10 h-6 absolute -bottom-3.5 ${align === "left"
                    ? "left-5"
                    : align === "right"
                        ? "right-5"
                        : " left-1/2 transform -translate-x-1/2"
                    }`}
            />
        </div>
    );
};

export default MapTooltip;
