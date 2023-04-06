import { getStatusColor } from '../../helpers/Utils';

type Props = {
    data: string
}

const SpeechStatus = ({ data }: Props) => {
    
    return (
        <div className={`${getStatusColor(data,"bg")} px-[10px] py-[2px] rounded-full gap-x-1 inline-flex items-center `}>
            <div className={`${getStatusColor(data,"bullet")} w-[6px] h-[6px] rounded-full`} />
            <h1 className={`${getStatusColor(data,"text")} text-xxs leading-[18px]`}>{data}</h1>

        </div>
    );
};

export default SpeechStatus;