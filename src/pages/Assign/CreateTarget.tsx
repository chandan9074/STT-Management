import React, { useState } from 'react';
import Icons from "../../assets/Icons";
import Buttons from "../../components/Buttons";
import AddScript from "../../components/containers/AssignContainer/CreateTarget/AddScript";
import CreateCriteria from "../../components/containers/AssignContainer/CreateTarget/CreateCriteria";
import AddAssignee from "../../components/containers/AssignContainer/CreateTarget/AddAssignee";
import Layouts from "../../components/Layouts";
import TargetTable from '../../components/containers/AssignContainer/CreateTarget/TargetTable';

const CreateTarget = () => {
    const [dataShow, setDataShow] = useState<boolean>(false);

    return (
        <Layouts.Forth>

            <div>
                <div className='bg-red-03 shadow-box pl-[24px] pt-[41px] pb-[24px] pr-[13px]'>
                    <div className='flex justify-between items-center mb-[23px] gap-x-3'>
                        <div className='flex items-center'>
                            <h1 className='text-blue-95 text-[18px] font-medium pr-3'>Create Target</h1>
                            <h2 className='text-ct-blue-90 text-[14px]'>Create one or more target and assign</h2>
                        </div>
                        <div className='flex gap-x-[15px]'>
                            <button
                                onClick={() => setDataShow(!dataShow)}
                                className={`border-[1px] bg-white border-ct-blue-20 rounded-full p-[11px] z-[100] right-0 duration-1000`}
                            >
                                <img src={dataShow ? Icons.DoubleArroDownDark : Icons.DoubleDarkICon} alt="" className="w-[7px] h-[8px] " />
                            </button>
                            <Buttons.IconButton.Circle
                                size='medium'
                                variant="CT-Blue"
                                icon={<img src={Icons.CloseIconButton} alt="" />}
                                border='border'
                                background="white"
                            />
                        </div>
                    </div>

                    {/*<div className='flex gap-x-[15px]'>*/}
                    {/*    {*/}
                    {/*        targetTitle?.map((value: string) => (*/}
                    {/*            <div key={value} className='bg-white w-[376px] h-[332px] flex justify-center items-center rounded-t-[6px]'>*/}
                    {/*                <TargetBox*/}
                    {/*                    targetTitle={value}*/}
                    {/*                    onClick={openDrawer}*/}
                    {/*                />*/}
                    {/*            </div>*/}
                    {/*        ))*/}
                    {/*    }*/}

                    {/*    <div>*/}
                    {/*        /!* Use this for create target *!/*/}
                    {/*        <Type1*/}
                    {/*            isDrawerOpen={drawerOpen}*/}
                    {/*            drawerClose={drawerClose}*/}
                    {/*            title='Select Title'*/}
                    {/*        >*/}
                    {/*            side drawer*/}
                    {/*        </Type1>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className='flex gap-x-[15px]'>
                        <AddScript />
                        <CreateCriteria />
                        <AddAssignee />
                    </div>
                </div>

                <TargetTable />
            </div>
        </Layouts.Forth>
    );
};

export default CreateTarget;