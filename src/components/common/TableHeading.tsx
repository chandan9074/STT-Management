import React from 'react';

const TableHeading = ({title}: {title: string}) => {
    return (
        <h1 className='text-heading-6 font-medium text-ct-blue-95 leading-6'>{title}</h1>
    );
};

export default TableHeading;