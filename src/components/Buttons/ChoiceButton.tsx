import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: 'Approve' | 'Decline';
    status: 'success' | 'danger';
    activeTitle: string;
}

const ChoiceButton = ({title, status, activeTitle, ...rest }: Props) => {
    return (
        <button
            {...rest}
            className={`leading-[19px] border-[1px] rounded-[20px] ${(activeTitle.includes('Approve') && status === 'success') ? 'border-transparent bg-secondary-green-50 text-white' : status === 'success' ? 'text-secondary-green-50 border-secondary-green-50' : (activeTitle.includes('Decline') && status === 'danger') ? 'border-transparent bg-red-40 text-white' :  status === 'danger' ? 'text-red-40 border-red-40' : ''} py-[10px] px-4 `}
        >
            {title.includes('Approve' ) ? 'Approve' : title.includes('Decline') ? 'Decline' : '' }
        </button>
    );
};

export default ChoiceButton;