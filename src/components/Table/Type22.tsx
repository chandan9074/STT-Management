import { Table } from "antd"
import { ColumnsType, ColumnType } from "antd/es/table"
import Icons from "../../assets/Icons"
import { colValSenStatusFilterData } from "../../data/audioManagement/AudioManagementData"
import { STATUS_TOOK_A_BREAK, STATUS_VALIDATING } from "../../helpers/ConditionVariable"
import { collectValSenDataDT } from "../../types/audioManagementTypes"
import AudioTrack from "../common/AudioTrack"
import StatusFilter from "../common/TableField/AudioManagement/StatusFilter"
import ValidateCol from "../common/TableField/AudioManagement/ValidateCol"
import RoleImage from "../Image/RoleImage"
import Pagination from "../Pagination"

type Props = {
  data: collectValSenDataDT[]
}
const Type22 = ({ data }: Props) => {

  const getColumnSearchProps = (dataIndex: string): ColumnType<collectValSenDataDT> => ({

    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (

      <div onKeyDown={(e) => e.stopPropagation()}
        // className="flex items-center justify-center w-[260px] h-[92px] -mr-[90px] -mt-[0px]  rounded-[8px]" 
        className="w-[260px] py-1.5 flex justify-center"
      >
        <StatusFilter option1={STATUS_VALIDATING} option2={STATUS_TOOK_A_BREAK} data={colValSenStatusFilterData} />
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <div>
        <img src={Icons.Unfold_More} className="w-[14px] h-[14px] object-cover" alt='' />
      </div>
    ),
  });

  const Type22columns: ColumnsType<collectValSenDataDT> = [
    {
      title: `${"SN".toLocaleUpperCase()}`,
      key: 'sn',
      width: 55,
      align: "center",
      render: (text, record, index) => (
        <span>{(index + 1)}</span>
      ),
    },
    {
      title: `${"# Task ID".toLocaleUpperCase()}`,
      key: 'id',
      // align: 'center',
      width: 96,
      render: (data: collectValSenDataDT) => <h1 className='w-20 truncate whitespace-nowrap'># {data.id}</h1>,
    },
    {
      title: `${"Raw Audio".toLocaleUpperCase()}`,
      key: 'speech',
      width: 148,
      render: (data: collectValSenDataDT) => <>
        <AudioTrack data={data.speech} />
      </>,
    },
    {
      title: `${"Validate1".toLocaleUpperCase()}`,
      key: 'validate1',
      ...getColumnSearchProps('validate1'),
      // className: "audio-management-status",
      width: 200,
      render: (data: collectValSenDataDT) => <ValidateCol data={data.validate1} />
    },
    {
      title: `${"Validate2".toLocaleUpperCase()}`,
      key: 'validate2',
      ...getColumnSearchProps('validate2'),
      // className: "audio-management-status",
      width: 200,
      render: (data: collectValSenDataDT) => <ValidateCol data={data.validate2} />
    },
    {
      title: `${"Validate-Final".toLocaleUpperCase()}`,
      key: 'validateFinal',
      ...getColumnSearchProps('validateFinal'),
      // className: "audio-management-status",
      width: 200,
      render: (data: collectValSenDataDT) => <ValidateCol data={data.validateFinal} />
    },
    {
      title: `${"DeadLine".toLocaleUpperCase()}`,
      key: 'deadLine',
      width: 104,
      render: (data: collectValSenDataDT) => <h1 className='text-small text-blue-gray-80'>{data.deadLine}</h1>
    },
    {
      title: `${"Annotator".toLocaleUpperCase()}`,
      key: 'annotator',
      // className: "audio-management-status",
      width: 168,
      render: (data: collectValSenDataDT) => <div >
        <div className='flex'>
          <RoleImage role='annotator' height='h-4' width='w-4' />
          <h1 className='ml-1.5 text-blue-gray-80 font-medium text-xxs'>{data.annotator.annotator.name}</h1>
        </div>
        <p className='text-blue-gray-75 text-xxs font-normal pl-[22px]'>{data.annotator.locality}</p>
      </div>
    },
    {
      title: `${"Audio Checker".toLocaleUpperCase()}`,
      key: 'audioChecker',
      // className: "audio-management-status",
      width: 168,
      render: (data: collectValSenDataDT) => <div >
        <div className='flex'>
          <RoleImage role='audio checker' height='h-4' width='w-4' />
          <h1 className='ml-1.5 text-blue-gray-80 font-medium text-xxs'>{data.audioChecker.audioCheckers.name}</h1>
        </div>
        <p className='text-blue-gray-75 text-xxs font-normal pl-[22px]'>{data.audioChecker.locality}</p>
      </div>
    },
    {
      title: `${"Speaker".toLocaleUpperCase()}`,
      key: 'speaker',
      width: 168,
      render: (data: collectValSenDataDT) => <div >
        <div className='flex'>
          <RoleImage role={`${data.speaker.speakers.gender === "male" ? "speaker" : "speakerFemale"}`} height='h-4' width='w-4' />
          <h1 className='ml-1.5 text-blue-gray-80 font-medium text-xxs'>{data.annotator.annotator.name}</h1>
        </div>
        <p className='text-blue-gray-75 text-xxs font-normal pl-[22px]'>{data.annotator.locality}</p>
      </div>
    },
    {
      title: `${"Details".toLocaleUpperCase()}`,
      align: 'center',
      dataIndex: 'details',
      key: 'details',
      fixed: 'right',
      width: 85,
      render: (_, record: collectValSenDataDT) => (
        <>

          <div className='flex w-full justify-center items-center'>
            <img
              // onClick={() => {
              //     showDrawer(record);
              //     setSingleTargetData(record);
              // }}
              className='w-[14px] h-[14px] cursor-pointer'
              src={Icons.open_in_new}
              alt="" />
          </div>

        </>)
    },
  ]


  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: collectValSenDataDT[]) => {
      // setSelectedTarget(selectedRows);
      console.log('*******', selectedRows);


    },
    getCheckboxProps: (record: collectValSenDataDT) => ({
      // disabled: record.name === 'Disabled User', // Column configuration not to be checked
      // name: record.assignee.name,
    }),
  };

  const handlePageChange = (page: number) => {
    // ScriptContext.setScriptFilter({ ...scriptContext.scriptFilter, page: page, pageSize: 10 })
}

  return (
    <div className="billing-table billing-table-even-bg type4-table horizontal-table-padding">
      <Table
        dataSource={data}
        columns={Type22columns}
        rowSelection={{
          // type: selectionType,
          columnWidth: 48,
          fixed: 'left',
          ...rowSelection,
        }}
        scroll={{ x: 1300 }}
        rowKey="id"
        pagination={false}
      />
      <div className='flex w-full justify-end mt-4 mb-2'>
                <Pagination.Type2
                    total={100}
                    pageSize={10}
                    // total={35}
                    // pageSize={5}
                    handleDataChange={handlePageChange}
                />
            </div>
    </div>
  )
}

export default Type22