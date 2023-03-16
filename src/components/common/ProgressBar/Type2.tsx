import React from 'react';

interface Props {
    value: number | undefined;
    bgColor: string;
    height: number
}

interface InerProps {
    bgColor: string;
    progress: string;
    height: number;

}

const Type2 = ({ value, bgColor, height }: Props) => {

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
            borderRadius: value === 100 ? "40px" : "40px 0px 0px 40px",
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
                height={height} />
        </div>
    );
};

export default Type2;
