import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import React, { Dispatch, SetStateAction, useContext, useState } from 'react'
import Icons from '../../assets/Icons'
import { CommonContext } from '../../context/CommonProvider'
import { allCheckedAudioDT } from '../../types/audioManagementTypes'
import AudioTrack from '../common/AudioTrack'
import SpeechStatus from '../common/SpeechStatus'
import Speaker from '../containers/AudioManagement/TableField/AudioManagement/Speaker'
import RoleImage from '../Image/RoleImage'
import Pagination from '../Pagination'
import { Drawer } from '../Drawer'
import Remark2 from '../containers/AudioManagement/TableField/Remark2'
import { CustomModal } from '../common/CustomModal'
import ClaimApplicationModal from '../containers/AudioManagement/Annotation/AnnotatedFiles/ClaimApplicationModal'
import { AudioManagementContext } from '../../context/AudioManagementProvider'
import { STATUS_CLAIMED } from '../../helpers/ConditionVariable'

type Props = {
  data: allCheckedAudioDT[],
  setSelectedRowSData?: Dispatch<SetStateAction<allCheckedAudioDT[]>>,
}

const Type18 = ({ data, setSelectedRowSData }: Props) => {

  const { roleName } = useContext(CommonContext);
  const [open, setOpen] = useState(false);
  const [isClaimModal, setIsClaimModal] = useState<boolean>(false);

  const [remarkOpen, setRemarkOpen] = useState(false);
  const [singleTargetData, setSingleTargetData] = useState<allCheckedAudioDT>();
  const { postClaimAllChecked } = useContext(AudioManagementContext);

  const showDrawer = (item: allCheckedAudioDT) => {
    setOpen(true);
  };

  const handleClaimSubmit = (status: string, remark: string) => {
    if (singleTargetData?.id) {
      const body = {
        id: singleTargetData.id,
        remark: remark,
        status: status ? status : ""
      }

      postClaimAllChecked(body);
    }
  }

  const Type18columns: ColumnsType<allCheckedAudioDT> = [
    {
      title: `${"SN".toLocaleUpperCase()}`,
      key: 'sn',
      width: 80,
      align: "center",
      render: (text, record, index) => (
        <span>{(index + 1)}</span>
      ),
    },
    {
      title: `${"# Task ID".toLocaleUpperCase()}`,
      key: 'id',
      // align: 'center',
      width: 120,
      render: (data: allCheckedAudioDT) => <h1 className='w-20 truncate whitespace-nowrap'># {data.id}</h1>,
    },
    {
      title: `${"Raw Audio".toLocaleUpperCase()}`,
      key: 'speech',
      width: 180,
      render: (data: allCheckedAudioDT) => <>
        <AudioTrack data={data.speech} />
      </>,
    },
    {
      title: `${"Speaker".toLocaleUpperCase()}`,
      key: 'speaker',
      width: 234,
      render: (data: allCheckedAudioDT) => <Speaker isLocality={true} data={data.speaker} />
    },
    {
      title: `${"Audio Checker".toLocaleUpperCase()}`,
      key: 'audioChecker',
      width: 266,
      render: (data: allCheckedAudioDT) =>
        <div className='flex flex-col gap-y-1'>
          <div className='flex'>
            <RoleImage role={data.audioChecker.role} height='h-4' width='w-4' />
            <h1 className='ml-1.5 text-blue-gray-80 font-medium text-xxs'>{data.audioChecker.name}{roleName === data.audioChecker.name && " (Self)"}</h1>
            {
              roleName === data.audioChecker.name ? "" : <p className='text-blue-gray-75 text-xxs font-normal'>, {data.audioChecker.locality}</p>
            }
          </div>
          <p className='text-xxs text-blue-gray-75 font-normal leading-[14.4px] pl-[22px]'>Picked: {data.audioChecker.time}</p>
        </div>
    },
    {
      title: `${"Status".toLocaleUpperCase()}`,
      key: 'status',
      align: "center",
      width: 150,
      render: (data: allCheckedAudioDT) => <>
        <div className='flex gap-x-2'>
          <SpeechStatus data={data?.status} />
          {
            data?.status === STATUS_CLAIMED &&
            <button onClick={() => { setSingleTargetData(data); setIsClaimModal(true); }}>
              <img src={Icons.openInNewGray} alt="" className='cursor-pointer' />
            </button>
          }
        </div>
      </>
    },
    {
      title: `${"Script".toLocaleUpperCase()}`,
      key: 'script',
      width: 156,
      render: (data: allCheckedAudioDT) => <div className='flex w-full justify-start items-center gap-x-[10px]'>
        <h1 className='w-28 truncate whitespace-nowrap'>{data.script.id}</h1>
        <img
          onClick={() => {
            showDrawer(data);
            setSingleTargetData(data);
          }}
          className='w-[10px] h-[10px] cursor-pointer'
          src={Icons.openInNewGray}
          alt="" />
      </div>,
    },
    {
      title: `${"DeadLine (DD/MM)".toLocaleUpperCase()}`,
      key: 'deadLine',
      width: 155,
      render: (data: allCheckedAudioDT) => <h1 className='text-small text-blue-gray-80'>{data.deadLine}</h1>
    },
    {
      title: `${"Submission Date".toLocaleUpperCase()}`,
      key: 'submissionDate',
      width: 150,
      render: (data: allCheckedAudioDT) => <h1 className='text-small text-blue-gray-80'>{data.submissionDate}</h1>
    },
    {
      title: `${"Remark".toLocaleUpperCase()}`,
      key: 'remark',
      width: 85,
      align: "center",
      render: (data: allCheckedAudioDT) => (
        <div className='flex justify-center relative'>
          <button
            className='flex justify-center items-center w-9 h-9 rounded-full transition ease-out duration-300 hover:bg-blue-gray-20 active:border active:border-blue-gray-A10'
            onClick={() => {
              setRemarkOpen(true);
              setSingleTargetData(data);
            }}>
            <img
              src={Icons.File} className="h-[16px] w-[16px] cursor-pointer"
              alt=""
            />
          </button>
          {
            (remarkOpen && data.id === singleTargetData?.id) &&
            <div className='fixed top-[209px] right-[86px] z-[999] animate-fadeIn2'>
              <Remark2
                open={remarkOpen}
                setOpen={setRemarkOpen}
                data={data.remark}
              />
            </div>
          }
        </div>
      )
    },
    {
      title: `${"Details".toLocaleUpperCase()}`,
      align: 'center',
      dataIndex: 'details',
      key: 'details',
      fixed: 'right',
      width: 85,
      render: (_, record: allCheckedAudioDT) => (
        <div className='flex justify-center items-center'>
          <button
            onClick={() => {
              showDrawer(record);
              setSingleTargetData(record);
            }}
            className='flex hover:bg-ct-blue-10 active:bg-ct-blue-20 h-9 w-9 rounded-full justify-center items-center'>
            <img
              className='w-[14px] h-[14px] cursor-pointer'
              src={Icons.open_in_new}
              alt="" />
          </button>

        </div>)
    },
  ]

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: allCheckedAudioDT[]) => {
      if (setSelectedRowSData) {
        setSelectedRowSData(selectedRows)
      }
    },
    getCheckboxProps: (record: allCheckedAudioDT) => ({
      // disabled: record.name === 'Disabled User', // Column configuration not to be checked
      // name: record.assignee.name,
    }),
  };

  const handlePageChange = (page: number) => {
    // ScriptContext.setScriptFilter({ ...scriptContext.scriptFilter, page: page, pageSize: 10 })
  }

  return (
    <div className='billing-table billing-table-odd-bg type4-table horizontal-table-padding'>
      <Table
        rowSelection={{
          // type: selectionType,
          columnWidth: 48,
          fixed: 'left',
          ...rowSelection,
        }}
        dataSource={data}
        columns={Type18columns}
        scroll={{ x: 1366 }}
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

      {
        (open && singleTargetData) &&
        <Drawer.AudioManagement.CheckingStatus
          isDrawerOpen={open}
          setIsDrawerOpen={setOpen}
          isEditHistory={true}
          speaker={singleTargetData.speaker}
          remark={singleTargetData.remark}
          script={singleTargetData.script}
          others={singleTargetData.others}
          id={singleTargetData.id}
          history={singleTargetData?.history}
          submissionDate={singleTargetData.submissionDate}
        />
      }

      {singleTargetData?.claimReason && <CustomModal.Primary
        setOpen={setIsClaimModal}
        open={isClaimModal}
        width="658px"
      >
        <ClaimApplicationModal data={singleTargetData.claimReason} setOpen={setIsClaimModal} handleClaimSubmit={handleClaimSubmit} />
      </CustomModal.Primary>}
    </div>
  )
}

export default Type18