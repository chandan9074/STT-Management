import Icons from "../../../../../../assets/Icons";
import { dayDataDT } from "../../../../../../types/userManagementTypes";

const BarTooltip = ({
    data,
    align,
}: {
    data: dayDataDT;
    align: "left" | "right" | "center";
}) => {

    return (
        <div className="px-5 py-6 bg-tooltip-bg rounded-[12px] animate-fadeIn">
            <h1 className={`text-base font-semibold text-white mb-0`}>
                Target {data?.target} audios
            </h1>
            <div className="flex items-center gap-x-1 mt-4">
                <div
                    className={`py-1 px-2 rounded-[4px] bg-green-A10 bg-opacity-25 w-[120px]`}
                >
                    <h3 className="mb-0 text-white text-xxs">Uploaded</h3>
                    <h3 className="mb-0 text-green-A10 font-semibold text-base">{data?.uploaded === 0 ? "--" : `${data?.uploaded} audios`}</h3>
                </div>
                <div className="py-1 px-2 rounded-[4px] bg-winter-wizard bg-opacity-25 w-[120px]">
                    <h3 className="mb-0 text-white text-xxs">Pending</h3>
                    <h3 className="mb-0 text-winter-wizard text-base font-semibold">
                        {data?.pending === 0 ? "--" : `${data?.pending} audios`}
                    </h3>
                </div>
            </div>
            <div className="w-full border-t border-blue-gray-75 bg-opacity-50 border-dashed mt-5" />
            <div className="mt-2 flex items-center">
                <img src={data.status === "pending" ? Icons.calender_white : data.status === "uploaded" ? Icons.check_green : data.status === "closed" ? Icons.info : data.status === "crossed" ? Icons.warning : ""} alt="schedule" />
                <h4 className={`text-small text-white mb-0 ml-2 ${data.status === "pending" ? "text-white" : data.status === "uploaded" ? "text-green-A10" : data.status === "close" ? "text-[#FFF3E0]" : data.status === "crossed" ? "text-red-15" : ""}`}>
                    Deadline: {data?.deadline}
                </h4>
            </div>
            <img
                src={Icons.blackDropArrow}
                alt=""
                className={`w-10 h-6 absolute -bottom-3.5 ${align === "left"
                    ? "left-5"
                    : align === "right"
                        ? "right-2.5"
                        : " left-1/2 transform -translate-x-1/2"
                    }`}
            />
        </div>
    );
};

export default BarTooltip;
