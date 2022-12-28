import React, {useState} from 'react';
import Icons from "../../../../assets/Icons";

const DistributionSourceDropdown = () => {
    const data = [
        {
            id: 1,
            value: "abc"
        },
        {
            id: 2,
            value: "abcd"
        },
        {
            id: 3,
            value: "abce"
        },
        {
            id: 4,
            value: "abcf"
        },
        {
            id: 5,
            value: "abcg"
        },
    ]
    const [toggleOpen, setToggleOpen] = useState<boolean>(false)
    const [active, setActive] = useState<string>("")
    return (
        <div>
            <div
                onClick={() => setToggleOpen(!toggleOpen)}
                className="flex gap-2 items-center justify-centerl bg-white hover:bg-ct-blue-20 cursor-pointer px-2 rounded-[4px] w-[245px]">
                <p className="text-heading-6 font-medium text-ct-blue-60">Distribution Source-wise</p>
                <img
                    className="h-[7px] w-[10px]"
                    src={Icons.blueDropArrow}
                    alt=""/>
            </div>

            {
                toggleOpen ? <div className="">
                    <div className="w-[245px] bg-white mt-1 rounded-[8px] py-[6px]">

                        {
                            data.map((data: any) =>
                                <div key={data.id}>
                                    <div
                                        onClick={() => setActive(data.value)}
                                        className={`flex justify-between ${active === data.value ? " px-2 bg-ct-blue-80 cursor-pointer hover:bg-ct-blue-10" : "px-2 bg-white cursor-pointer hover:bg-ct-blue-10"}`}>
                                        <p className="text-small font-medium text-blue-gray-80">
                                            {data.value}
                                        </p>
                                        {active === data.value ?
                                            <img
                                                src={Icons.CorrectIcon}
                                                className="w-[17px] h-[12px]"
                                                alt=""/>
                                            : null
                                        }
                                    </div>
                                </div>
                            )
                        }


                    </div>
                </div> : null
            }
        </div>
    );
};

export default DistributionSourceDropdown;