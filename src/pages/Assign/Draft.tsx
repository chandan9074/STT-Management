import { useEffect } from 'react';
import { useAssigneeContext } from '../../context/AssignProvider';
import { useNavigate } from 'react-router-dom';
import { Navigator } from '../../components/Navigator';

import * as PATH from "../../helpers/Slug"
import Layouts from '../../components/Layouts';
import Buttons from '../../components/Buttons';
import Icons from '../../assets/Icons';

const Draft = () => {
    const { getDraftTarget, selectedTargetList } = useAssigneeContext()
    const navigate = useNavigate()
    useEffect(() => {
        getDraftTarget()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (selectedTargetList.length > 0) {
            navigate('/assign/all-target/create-target')
        }
    }, [selectedTargetList])
    return (
        <Layouts.Sixth>
            <div className={`pl-6 pt-9 pr-4 duration-300 h-[calc(100vh-11.5vh)] w-full`}>
                <Navigator.Back path={`${PATH.ASSIGN_PATH}/${PATH.ALL_TARGET_PTAH}`} title='Create Target from Draft' />
                <div className='w-full h-full flex justify-center items-center flex-col'>
                    <div className='flex justify-center items-center flex-col mb-6'>
                        <img src={Icons.union_box} alt='union_box' />
                        <h3 className='text-base text-ct-blue-90-68% mt-2'>No target is in draft now</h3>
                    </div>
                    <Buttons.IconWithTextButton.Primary
                        label="Create Script"
                        size="small"
                        variant="Megenta"
                        icon={<img src={Icons.Add} alt="add" />}
                        onClick={() => navigate('/assign/all-target/create-target')}
                    />
                </div>
            </div>
        </Layouts.Sixth>
    )
}

export default Draft