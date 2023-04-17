import { useState } from "react";
import Icons from "../../assets/Icons";

type Props = {
    option1: string;
    option2: string;
    data: string[];
}

const Type8 = ({ option1, option2, data }: Props) => {

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
                data.map((item: string, i: number) => (
                    <div onClick={() => item === option1 ? onUploadStatus(option1) : onUploadStatus(option2)} className={` cursor-pointer ${(isOption1 && item === option1) ? 'bg-[#DEF7F0]' : (isOption2 && item === option2) ? 'bg-red-10' : 'bg-white'} h-[40px] py-4 pl-4 pr-3 flex items-center justify-between ${item === option2 ? 'rounded-[8px] rounded-t-none ' : 'rounded-[8px]  rounded-b-none '}`} key={i}>
                        <div className='flex items-center gap-x-3'>
                            <div className={`${(item === option1) ? 'bg-secondary-green-50' : (item === option2) ? 'bg-secondary-red-50' : ''} w-[9px] h-[9px] rounded-[50%] `} />
                            <h1 className={`${(item === option1) ? 'text-green-60' : (item === option2) ? 'text-red-60' : ''} text-small font-medium`}>{item}</h1>
                        </div>
                        {/* {
                            ((isOption1 && item === option1) ?
                                <img className='h-6 w-6' src={Icons.ArrowDropUp} alt="" />
                                : (isOption2 && item === option2)) &&
                            <img className='h-6 w-6' src={Icons.check_blue} alt="" />
                        } */}

                        {
                            (isOption1 && item === option1) ? <img className='h-6 w-6' src={Icons.check_green} alt="" />
                                : (isOption2 && item === option2) &&
                                <img className='h-4 w-4 mr-1.5' src={Icons.check_red} alt="" />
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Type8