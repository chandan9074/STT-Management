import React from 'react';

type Props = {
    title: string;
    required: boolean;
}

const LabelForm = ({title, required}: Props) => {
    return (
        <div>
            <h1 className='comboBoxLabel'>{title}
                {
                    required &&
                    <span className='text-[red]'> *</span>
                }
            </h1>
        </div>
    );
};

export default LabelForm;