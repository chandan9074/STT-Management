import React from 'react';
import { Progress } from "antd";
import './ringProcess.css'

interface Props {
    type: string;
    value: number;
    style: any
}

const Type1 = ({ type, value, style }: Props) => {
    return (
        <div>
            <Progress
                trailColor={style[type].trailColor}
                type="circle"
                percent={value}
                strokeColor={{ '0%': `${style[type].stock1}`, '100%': `${style[type].stock2}` }}
                format={(percent) => <div>
                    <p className={`text-heading-3 font-medium ${style[type].textColor}`}>{percent}%</p>
                    <p className="text-small font-medium text-ct-blue-90-70%">Achieved</p>
                </div>}
            />
        </div>
    );
};

export default Type1;