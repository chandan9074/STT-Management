import React from 'react';

type Props = {
    title: string;
    subTitle?: string;
}

const TitleSubTitleAudioManagement = ({ title, subTitle }: Props) => {
    return (
        <div>
            <h1 className='titleAudioManagement'>{title}</h1>
            {
                subTitle &&
                <p className='text-small text-ct-blue-90-70% mt-1.5'>{subTitle}</p>
            }
        </div>
    );
};

export default TitleSubTitleAudioManagement;