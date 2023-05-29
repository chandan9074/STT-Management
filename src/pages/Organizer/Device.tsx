import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Icons from "../../assets/Icons"
import Buttons from "../../components/Buttons"
import SideDrawerContent from "../../components/containers/Organizer/device/SideDrawerContent"
import { Drawer } from "../../components/Drawer"
import Table from "../../components/Table"
import { DeviceDataDT } from "../../types/organizerTypes"
import DeviceForm from "./DeviceForm"
import { OrganizerContext } from "../../context/OrganizerProvider"

const Device = () => {

  const [open, setOpen] = useState<boolean>(false)
  const [selectedRows, setSelectedRows] = useState<DeviceDataDT[]>([] as DeviceDataDT[])
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

  const { getDevice, deviceData } = useContext(OrganizerContext)

  useEffect(() => {
    getDevice()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSelectRow = (value: DeviceDataDT[]) => {
    setSelectedRows(value)
  }

  return (
    <div>
      <Header selectedRows={selectedRows} handleSelectRow={handleSelectRow} />
      <Table.Type30 data={deviceData} handleSelectRow={handleSelectRow} />

    </div>
  )
}

export default Device

type Props = {

  selectedRows: DeviceDataDT[]
  handleSelectRow: (value: DeviceDataDT[]) => void;

}
const Header = ({ selectedRows, handleSelectRow }: Props) => {

  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [selectedData, setSelectedData] = useState<DeviceDataDT>({} as DeviceDataDT);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const { deleteDevice } = useContext(OrganizerContext)

  return (
    <div className='ml-6 mr-4 mb-5 flex items-center justify-between'>
      <div>
        <h1 className='text-heading-6 font-semibold text-ct-blue-95 leading-6'>Device</h1>
        <p className='text-small text-ct-blue-90-70% mt-1.5 font-normal'>List of devices, ass device</p>
      </div>
      <div className='flex items-center gap-x-6'>
        <div className="flex items-center">
          {selectedRows.length > 0 ? <>
            <Buttons.BgHoverBtn
              // onClick={() => {
              //   scriptContext.deleteScript(commonContext.role, selectedRows.map((item) => item.id).join(",")); setselectedRows([]);
              // }}
              onClick={() => deleteDevice(selectedRows.map((item) => item.id).join(","))}
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
                  onClick={() => {
                    setSelectedData(selectedRows[0]);
                    setIsFormOpen(!isFormOpen);
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
              </Link>
            }
          </> : null}
        </div>
        <Buttons.IconWithTextButton.Primary
          label="Create Device"
          size="small"
          variant="Megenta"
          icon={<img src={Icons.Add} alt="add" />}
          // onClick={() => setIsFormOpen(true)}
          onClick={() => { setSelectedData({} as DeviceDataDT); setIsEdit(false); setIsFormOpen(true); }}

        />
        <Drawer.Organizer.Type1
          isDrawerOpen={isFormOpen}
          // drawerClose={drawerClose}
          setIsDrawerClose={setIsFormOpen}
          headerBgColor="bg-ct-blue-20"
          title="Create Device"
          isEdit={false}
        >
          {isEdit ? <DeviceForm handleSelectRow={handleSelectRow} isEdit={isEdit} setIsFormOpen={setIsFormOpen} data={selectedData} /> : <DeviceForm setIsFormOpen={setIsFormOpen} data={{} as DeviceDataDT} />}
        </Drawer.Organizer.Type1>
      </div>
    </div>
  )
}