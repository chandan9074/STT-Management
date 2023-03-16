
interface Props {
    value: number | undefined;
    bgColor: string;
}

interface InerProps {
    bgColor: string;
    progress: string;
    height: number;

}

const Type1 = ({ value,bgColor }: Props) => {

    const ProgressBar = ({ bgColor, progress, height }: InerProps) => {

        const Parentdiv: React.CSSProperties = {
            height: height,
            width: '100%',
            background: '#E9EDF3',
            borderRadius: 40,
        }

        const Childdiv: React.CSSProperties = {
            height: '100%',
            width: `${progress}%`,
            background: bgColor,
            borderRadius: 40,
            textAlign: 'right'
        }

        return (
            <div style={Parentdiv}>
                <div style={Childdiv}>

                </div>
            </div>
        )
    }
    return (
        <div>

            <ProgressBar
                bgColor={bgColor}
                progress={`${value}`}
                height={12} />
        </div>
    );
};

export default Type1;
