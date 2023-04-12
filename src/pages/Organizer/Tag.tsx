import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icons from '../../assets/Icons'
import Buttons from '../../components/Buttons'
import SideDrawerContent from '../../components/containers/Organizer/tag/SideDrawerContent'
import { Drawer } from '../../components/Drawer'
import Table from '../../components/Table'
import { tagData } from '../../data/organize/OrganizerData'
import { TagDataDT } from '../../types/organizerTypes'

const Tag = () => {

  const [open, setOpen] = useState<boolean>(false)
  const [selectedRows, setSelectedRows] = useState<TagDataDT[]>([] as TagDataDT[])

  const handleSelectRow = (value: TagDataDT[]) => {
    setSelectedRows(value)
  }

  return (
    <div>
      <Header open={open} setOpen={setOpen} selectedRows={selectedRows} />
      <Table.Type29 data={tagData} handleSelectRow={handleSelectRow} setOpen={setOpen}/>
      <Drawer.Organizer.Type1
        isDrawerOpen={open}
        headerBgColor="bg-ct-blue-05"
        // drawerClose={drawerClose}
        setIsDrawerClose={setOpen}
        title="Tag Details"
        isEdit={true}
      >
        <div className=' flex items-center'>
          <SideDrawerContent data={tagData} />
        </div>
      </Drawer.Organizer.Type1>
    </div>
  )
}

export default Tag

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedRows: TagDataDT[]
}
const Header = ({ open, setOpen, selectedRows }: Props) => {
  return (
    <div className='ml-6 mr-4 mb-5 flex items-center justify-between'>
      <div>
        <h1 className='text-heading-6 font-semibold text-ct-blue-95 leading-6'>Tag</h1>
        <p className='text-small text-ct-blue-90-70% mt-1.5 font-normal'>Tag will be used while Annotating audio, List of Tags, Create tag</p>
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
          label="Create Tag"
          size="small"
          variant="Megenta"
          icon={<img src={Icons.Add} alt="add" />}
        // onClick={() => scriptContext.setModalOpen(true)}
        />
      </div>
    </div>
  )
}