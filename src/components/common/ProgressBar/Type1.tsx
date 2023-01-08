import React from 'react';

interface Props {
    value: number
}

interface InerProps {
    bgColor: string;
    progress: string;
    height: number;

}

const Type1 = ({value}: Props) => {

    const ProgressBar = ({bgColor, progress, height}: InerProps) => {

        const Parentdiv: any = {
            height: height,
            width: '100%',
            background: '#E9EDF3',
            borderRadius: 40,
        }

        const Childdiv: any = {
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
                bgColor="linear-gradient(270deg, #FF24FB 2.01%, #4E2CBE 48.36%, #0093D9 98.4%)"
                progress={`${value}`}
                height={12}/>
        </div>
    );
};

export default Type1;
