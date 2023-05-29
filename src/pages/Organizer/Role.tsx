import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Icons from '../../assets/Icons'
import Buttons from '../../components/Buttons'
import { Drawer } from '../../components/Drawer'
import Table from '../../components/Table'
import { RoleDataDT, roleBodyDT } from '../../types/organizerTypes'
import RoleForm from './RoleForm'
import { OrganizerContext } from '../../context/OrganizerProvider'

const Role = () => {

  const [open, setOpen] = useState<boolean>(false)
  const [selectedRows, setSelectedRows] = useState<RoleDataDT[]>([] as RoleDataDT[]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

  const { getRole, roleData } = useContext(OrganizerContext)

  useEffect(() => {
    getRole()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSelectRow = (value: RoleDataDT[], keys?: React.Key[]) => {
    console.log("hello")
    if (value.length > 0) {
      setSelectedRows(value)
    }
    else {
      setSelectedRows([])
      setSelectedRowKeys([])
      console.log("rows selected")
    }
    if (keys) {
      setSelectedRowKeys(keys);
    }
  }

  return (
    <div>
      <Header selectedRows={selectedRows} handleSelectRow={handleSelectRow} />
      <Table.Type28 data={roleData} handleSelectRow={handleSelectRow} open={open} setOpen={setOpen} selectedRowKeys={selectedRowKeys} />
    </div>
  )
}

export default Role


type Props = {
  // open: boolean;
  handleSelectRow: (value: RoleDataDT[]) => void;
  selectedRows: RoleDataDT[];
}
const Header = ({ selectedRows, handleSelectRow }: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [selectedData, setSelectedData] = useState<RoleDataDT>({} as RoleDataDT);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const { deleteRole } = useContext(OrganizerContext)

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
              onClick={() => deleteRole(selectedRows.map((item) => item.id).join(","))}
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
              <Buttons.BgHoverBtn
                onClick={() => {
                  setSelectedData(selectedRows[0]);
                  setIsDrawerOpen(!isDrawerOpen);
                  setIsEdit(!isEdit);
                }}
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
            }
          </> : null}
        </div>
        <Buttons.IconWithTextButton.Primary
          label="Create Role"
          size="small"
          variant="Megenta"
          icon={<img src={Icons.Add} alt="add" />}
          onClick={() => { setSelectedData({} as RoleDataDT); setIsEdit(false); setIsDrawerOpen(true); }}
        />
      </div>

      <Drawer.Organizer.Type1
        isDrawerOpen={isDrawerOpen}
        // drawerClose={drawerClose}
        setIsDrawerClose={setIsDrawerOpen}
        headerBgColor="bg-ct-blue-20"
        title={isEdit ? "Update Role" : "Create Role"}
        isEdit={isEdit}
      >
        {isEdit ? <RoleForm handleSelectRow={handleSelectRow} isEdit={isEdit} setIsDrawerOpen={setIsDrawerOpen} data={selectedData} /> : <RoleForm setIsDrawerOpen={setIsDrawerOpen} data={{} as RoleDataDT} />}
      </Drawer.Organizer.Type1>

    </div>
  )
}