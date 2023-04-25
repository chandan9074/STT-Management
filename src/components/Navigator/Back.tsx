import React from 'react'
import Buttons from '../Buttons'
import { useNavigate } from 'react-router-dom'
import Icons from '../../assets/Icons'

type Props = {
    path: string,
    title: string
}

const Back = ({ path, title }: Props) => {
    const navigate = useNavigate();
    return (
        <div className="flex items-center">
            <Buttons.IconButton.Circle onClick={() => navigate(path)} size="medium" variant="CT-Blue" border="none" icon={<img src={Icons.arrow_back} alt="arrow_back" className="w-5 h-5" />} />
            <h1 className="text-heading-6 text-ct-blue-95 font-medium mb-0 ml-8">
                {title}
            </h1>
        </div>
    )
}

export default Back