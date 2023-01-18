import React from 'react';
import Image from "../../../Image";

interface Props {
    isStt: boolean;
    sttRoles: { title: string }[];
    handleSttRole: (value: string) => void;
    handleTtsRole: (value: string) => void;
    isSttRoles: string;
    isTts: boolean;
    ttsRoles: { title: string }[];
    isTtsRoles: string;
}
const GraphHeader = ({ isStt, sttRoles, handleSttRole, isSttRoles, isTts, ttsRoles, handleTtsRole, isTtsRoles }: Props) => {
    return (
        <div className={`absolute cursor-pointer bottom-0 w-[100%] grid ${isStt ? "grid-cols-7" : "grid-cols-4"
            }`}>
            {isStt &&
                sttRoles.map((m) => (
                    <div
                        key={m.title}
                        onClick={() => handleSttRole(m.title)}
                        className={` ${isSttRoles === m.title
                            ? "bg-white text-[#2C79BE] font-bold"
                            : "text-[#5F7180] "
                            } h-[41px] text-[16px] rounded-t-[15px] flex justify-center items-center gap-x-4 duration-500`}
                    >
                        {
                            isSttRoles === m.title ?
                                <Image.RoleImage role={m.title} />
                                : <Image.RoleFilterImage role={m.title} />
                        }
                        <button>{m.title}</button>
                    </div>
                ))}

            {isTts &&
                ttsRoles.map((m) => (
                    <div
                        key={m.title}
                        onClick={() => handleTtsRole(m.title)}
                        className={` ${isTtsRoles === m.title
                            ? "bg-white text-[#2C79BE] font-bold"
                            : "text-[#5F7180] "
                            } h-[41px] text-[16px] rounded-t-[15px] flex justify-center items-center gap-x-4 duration-500`}
                    >
                        {/* <img className="w-4 h-4" src={managerImage} alt="manager" /> */}
                        {
                            isTtsRoles === m.title ?
                                <Image.RoleImage role={m.title} />
                                : <Image.RoleFilterImage role={m.title} />
                        }

                        <button>{m.title}</button>
                    </div>
                ))}
        </div>
    );
};

export default GraphHeader;