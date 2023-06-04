import { getStatusColor } from '../../helpers/Utils';

type Props = {
    data: string
}

const SpeechStatus = ({ data }: Props) => {

    return (
        <div className={`${getStatusColor(data, "bg")} px-3 py-0.5 rounded-full gap-x-1 inline-flex items-center `}>
            <div className={`${getStatusColor(data, "bullet")} w-1.5 h-1.5 rounded-full`} />
            <h1 className={`${getStatusColor(data, "text")} text-xxs leading-[18px] whitespace-nowrap`}>{data}</h1>

        </div>
    );
};

export default SpeechStatus;