import React from 'react'
import Icons from '../../assets/Icons'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  count: number;
}

const Filter = (props: Props) => {

  const { count, label, ...rest } = props;
  return (
    <button
      {...rest}
      className={`py-1.5 pr-3.5 pl-2.5 bg-blue-gray-A10 flex items-center ml-2 relative duration-300 border-[1px] border-transparent ${count <= 0 ? "hover:rounded-[40px] hover:border-ct-blue-40 hover:bg-ct-blue-20 active:bg-ct-blue-30 rounded-[4px]" : "bg-ct-blue-60 rounded-[40px] hover:bg-ct-blue-70 active:bg-ct-blue-40"}`}
    >
      {count > 0 ? <h3 className='text-ct-blue-60 px-2 bg-white rounded-full text-xs mb-0'>{count}</h3> : <img src={Icons.filter_list} alt="" className="w-[18px] h-[18px]" />}
      <h6 className={`${count <= 0 ? "text-ct-blue-90-70%" : "text-white"} text-small mb-0 ml-1.5 mr-6`}>
        {label}
      </h6>
      {count <= 0 ? <img src={Icons.arrow_drop_down_blue_gray} alt="" className="" /> : <img src={Icons.arrow_drop_down_white} alt="" className="" />}
    </button>
  )
}

export default Filter