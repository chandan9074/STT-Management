import React from 'react';
import {Progress} from "antd";
import './ringProcess.css'

interface Props{
    type:string,
    value:number
}
const Type1 = ({type,value}:Props) => {
    const style:any={
        Create:{
            trailColor:"#DEF7F0",
            stock1:"#05956F",
            stock2:"#00FFBB",
            textColor:"text-green/50-05956F"
        },
        Collect:{
            trailColor:"#F7DEE0",
            stock1:"#940412",
            stock2:"#FF0018",
            textColor:"text-red-60"
        }

    }

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