import { useState } from "react";
import Icons from "../../assets/Icons";

type Props = {
    option1: string;
    option2: string;
    icon?: string;
}

const Type9 = ({ option1, option2, icon }: Props) => {

    const [isOption1, setIsOption1] = useState<boolean>(false);
    const [isOption2, setIsOption2] = useState<boolean>(false);

    const onUploadStatus = (value: string) => {
        if (value === option1) {
            setIsOption1(!isOption1);
            setIsOption2(false);
        } else {
            setIsOption2(!isOption2);
            setIsOption1(false);
        }
    }

    return (
        <div className="w-full">
            {
                [option1, option2].map((item: string, i: number) => (
                    <div onClick={() => item === option1 ? onUploadStatus(option1) : onUploadStatus(option2)} className={` cursor-pointer ${(isOption1 && item === option1) || (isOption2 && item === option2) ? 'bg-[#E1EFFE] hover:bg-[#CCDDFE] transition ease-out duration-300' : 'bg-white hover:bg-blue-gray-05'} h-[40px] py-4 pl-4 pr-3 flex items-center justify-between ${item === option2 ? 'rounded-[8px] rounded-t-none ' : 'rounded-[8px]  rounded-b-none '}`} key={i}>
                        <div className='flex items-center gap-x-2'>
                            <img src={`${icon === 'latestCal' ? ((isOption1 && item === option1) ? Icons.LatestCalBlue :
                                (!isOption1 && item === option1) ? Icons.LatestCalGray :
                                    (isOption2 && item === option2) ? Icons.OldestCalBlue :
                                        (!isOption2 && item === option2) ? Icons.OldestCalGray :
                                            "") : ((isOption1 && item === option1) ? Icons.North :
                                            (!isOption1 && item === option1) ? Icons.NorthNeviBlue :
                                                (isOption2 && item === option2) ? Icons.South :
                                                    (!isOption2 && item === option2) ? Icons.SouthNeviBlue :
                                                        "")
                                }`} alt="" />
                            <h1 className={`${((isOption1 && item === option1) || (isOption2 && item === option2)) ? 'text-ct-blue-60' : 'text-blue-gray-80'} text-small font-medium`}>{item}</h1>
                        </div>
                        {/* {
                            ((isOption1 && item === option1) ?
                                <img className='h-6 w-6' src={Icons.ArrowDropUp} alt="" />
                                : (isOption2 && item === option2)) &&
                            <img className='h-6 w-6' src={Icons.check_blue} alt="" />
                        } */}

                        {
                            (isOption1 && item === option1) || (isOption2 && item === option2) ? <img className='h-6 w-6' src={Icons.check_blue} alt="" />
                                : null
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Type9