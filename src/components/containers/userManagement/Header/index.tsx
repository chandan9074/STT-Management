import React from 'react'
import Dropdown from '../../../Dropdown'
import { userRoleDropdownData } from '../../../../data/userManagement/UserManagementData'
import Buttons from '../../../Buttons'
import { SearchBox } from '../../../SearchBox'
import Icons from '../../../../assets/Icons'
import { Link } from 'react-router-dom'
import { CREATE_USER_PATH } from '../../../../helpers/Slug'

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ open, setOpen }: Props) => {
    const [activeRole, setActiveRole] = React.useState<string>(userRoleDropdownData[0])
    const handleActivePanel = (value: string) => {
        setActiveRole(value)
    }
    return (
        <div className='pb-3 pt-3 flex justify-between items-center'>
            <div>
                <Dropdown.Type4 data={userRoleDropdownData} handleActivePanel={handleActivePanel} active={activeRole} />
                <p className='text-ct-blue-90-70% text-small mt-0.5 mb-0 pl-2'>List of Users, Create and Manage</p>
            </div>
            <div className='flex items-center'>
                <Buttons.LabelButton.Tertiary label='Manage' size='xSmall' variant='CT-Blue' marginX='mr-2' onClick={() => setOpen(!open)} />
                <SearchBox.Type1 inputWidth="w-52" placeholder="Search with script ID, Title..." bgColor="bg-blue-gray-A10" textColor="text-ct-blue-90-70%" />
                <Link to={CREATE_USER_PATH}>
                    <Buttons.IconWithTextButton.Primary
                        label="Create User"
                        size="small"
                        variant="Megenta"
                        marginX='ml-6'
                        icon={<img src={Icons.Add} alt="add" />}
                    // onClick={() => scriptContext.setModalOpen(true)}
                    />
                </Link>
            </div>
        </div>
    )
}

export default Header