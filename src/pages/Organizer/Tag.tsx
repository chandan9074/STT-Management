import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Icons from '../../assets/Icons'
import Buttons from '../../components/Buttons'
import SideDrawerContent from '../../components/containers/Organizer/tag/SideDrawerContent'
import { Drawer } from '../../components/Drawer'
import Table from '../../components/Table'
import { TagDataDT } from '../../types/organizerTypes'
import TagForm from './TagForm'
import { OrganizerContext } from '../../context/OrganizerProvider'

const Tag = () => {

  const [open, setOpen] = useState<boolean>(false)
  const [selectedRows, setSelectedRows] = useState<TagDataDT[]>([] as TagDataDT[])
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

  const { getTag, tagData } = useContext(OrganizerContext)

  useEffect(() => {
    getTag()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const handleSelectRow = (value: TagDataDT[], keys?: React.Key[]) => {
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
      <Table.Type29 data={tagData} handleSelectRow={handleSelectRow} open={open} setOpen={setOpen} selectedRowKeys={selectedRowKeys} />

    </div>
  )
}

export default Tag

type Props = {
  selectedRows: TagDataDT[]
  handleSelectRow: (value: TagDataDT[]) => void;
}
const Header = ({ selectedRows, handleSelectRow }: Props) => {

  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [selectedData, setSelectedData] = useState<TagDataDT>({} as TagDataDT);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const { deleteTag } = useContext(OrganizerContext)

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
              onClick={() => deleteTag(selectedRows.map((item) => item.id).join(","))}
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
          label="Create Tag"
          size="small"
          variant="Megenta"
          icon={<img src={Icons.Add} alt="add" />}
          onClick={() => { setSelectedData({} as TagDataDT); setIsEdit(false); setIsFormOpen(true); }}

        />
        <Drawer.Organizer.Type1
          isDrawerOpen={isFormOpen}
          // drawerClose={drawerClose}
          setIsDrawerClose={setIsFormOpen}
          headerBgColor="bg-ct-blue-20"
          title="Create Tag"
          isEdit={false}
        >
          {isEdit ? <TagForm handleSelectRow={handleSelectRow} isEdit={isEdit} setIsFormOpen={setIsFormOpen} data={selectedData} /> : <TagForm setIsFormOpen={setIsFormOpen} data={{} as TagDataDT} />}
        </Drawer.Organizer.Type1>
      </div>
    </div>
  )
}