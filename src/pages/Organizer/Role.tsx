import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icons from '../../assets/Icons'
import Buttons from '../../components/Buttons'
import SideDrawerContent from '../../components/containers/Organizer/role/SideDrawerContent'
import { Drawer } from '../../components/Drawer'
import Table from '../../components/Table'
import { roleData } from '../../data/organize/OrganizerData'
import { RoleDataDT } from '../../types/organizerTypes'
import RoleForm from './RoleForm'

const Role = () => {

  const [open, setOpen] = useState<boolean>(false)
  const [selectedRows, setSelectedRows] = useState<RoleDataDT[]>([] as RoleDataDT[]);

  const handleSelectRow = (value: RoleDataDT[]) => {
    setSelectedRows(value)
  }

  return (
    <div>
      <Header open={open} setOpen={setOpen} selectedRows={selectedRows} />
      <Table.Type28 data={roleData} handleSelectRow={handleSelectRow} open={open} setOpen={setOpen} />
      <Drawer.Organizer.Type1
        isDrawerOpen={open}
        // drawerClose={drawerClose}
        setIsDrawerClose={setOpen}
        isEdit={true}
        headerBgColor="bg-ct-blue-05"
        title="Role Details"
      >
        <div className=' flex items-center'>
          <SideDrawerContent data={roleData} />
        </div>
      </Drawer.Organizer.Type1>
    </div>
  )
}

export default Role


type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedRows: RoleDataDT[]
}
const Header = ({ open, setOpen, selectedRows }: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  return (
    <div className='ml-6 mr-4 mb-5 flex items-center justify-between'>
      <div>
        <h1 className='text-heading-6 font-semibold text-ct-blue-95 leading-6'>Role</h1>
        <p className='text-small text-ct-blue-90-70% mt-1.5 font-normal'>List of Roles, Creat Role</p>
      </div>
      <div className='flex items-center gap-x-6'>
        <div className="flex items-center">
          {selectedRows.length > 0 ? <>
            <Buttons.BgHoverBtn
              // onClick={() => {
              //   scriptContext.deleteScript(commonContext.role, selectedRows.map((item) => item.id).join(",")); setselectedRows([]);
              // }}
              title="Delete"
              paddingY="py-2"
              paddingX="px-4"
              borderRadius="rounded-[6px]"
              textColor="text-secondary-blue-50"
              fontSize="text-small"
              fontWeight="font-medium"
              duration="duration-300"
              hoverBgColor="hover:bg-white"
            />
            {selectedRows.length === 1 &&
              <Link to={``}>
                <Buttons.BgHoverBtn
                  title="Edit"
                  paddingY="py-2"
                  paddingX="px-4"
                  borderRadius="rounded-[6px]"
                  textColor="text-secondary-blue-50"
                  fontSize="text-small"
                  fontWeight="font-medium"
                  duration="duration-300"
                  hoverBgColor="hover:bg-white"
                  marginX="mx-2"
                />
              </Link>
            }
          </> : null}
        </div>
        <Buttons.IconWithTextButton.Primary
          label="Create Role"
          size="small"
          variant="Megenta"
          icon={<img src={Icons.Add} alt="add" />}
          onClick={() => setIsDrawerOpen(true)}
        />
      </div>

      <Drawer.Organizer.Type1
        isDrawerOpen={isDrawerOpen}
        // drawerClose={drawerClose}
        setIsDrawerClose={setIsDrawerOpen}
        headerBgColor="bg-ct-blue-20"
        title="Create Role"
        isEdit={false}
      >
        <RoleForm setIsDrawerOpen={setIsDrawerOpen} />
      </Drawer.Organizer.Type1>

    </div>
  )
}