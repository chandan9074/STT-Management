import { useState } from "react";
import Icons from "../../../../../assets/Icons";

type Props = {
    option1: string;
    option2: string;
    data: string[];
}

const DataTypeFilter = ({ option1, option2, data }: Props) => {

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
                    <div onClick={() => item === option1 ? onUploadStatus(option1) : onUploadStatus(option2)} className={` cursor-pointer ${(isOption1 && item === option1) ? 'bg-[rgba(44,121,190,0.12)]' : (isOption2 && item === option2) ? 'bg-[rgba(44,121,190,0.12)]' : 'bg-white'} h-[40px] py-4 pl-4 pr-3 flex items-center justify-between ${item === option2 ? 'rounded-[8px] rounded-t-none ' : 'rounded-[8px]  rounded-b-none '}`} key={i}>
                        <div className='flex items-center gap-x-3'>
                            <img src={item === option1 ? Icons.union : Icons.Title} alt="" className="w-4 h-4" />
                            <h1 className={`${(item === option1) ? 'text-[#2C79BE]' : (item === option2) ? 'text-ct-blue-60' : ''} text-small font-medium`}>{item}</h1>
                        </div>
                        {/* {
                            ((isOption1 && item === option1) ?
                                <img className='h-6 w-6' src={Icons.ArrowDropUp} alt="" />
                                : (isOption2 && item === option2)) &&
                            <img className='h-6 w-6' src={Icons.check_blue} alt="" />
                        } */}

                        {
                            ((isOption1 && item === option1) ||
                            (isOption2 && item === option2)) &&
                            <img className='h-6 w-6' src={Icons.check_blue} alt="" />
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default DataTypeFilter