import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
}
const Primary = (props: Props) => {
    const { label, ...rest } = props
    return (
        <button {...rest}>
            {label}
        </button>
    );
};

export default Primary;