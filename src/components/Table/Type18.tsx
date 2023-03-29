import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import React, { useState } from 'react'
import Icons from '../../assets/Icons'
import { allCheckedAudioDT } from '../../types/audioManagementTypes'
import AudioTrack from '../common/AudioTrack'
import Remark from '../common/Remark'
import SpeechStatus from '../common/SpeechStatus'
import AudioChecker from '../common/TableField/AudioManagement/AudioChecker'
import Speaker from '../common/TableField/AudioManagement/Speaker'

type Props = {
  data: allCheckedAudioDT[]
}

const Type18 = ({ data }: Props) => {

  const [remarkOpen, setRemarkOpen] = useState(false);
    const [singleTargetData, setSingleTargetData] = useState<allCheckedAudioDT>();

  const Type18columns: ColumnsType<allCheckedAudioDT> = [
    {
      title: `${"SN".toLocaleUpperCase()}`,
      key: 'sn',
      width: 50,
      // align: "center",
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
      render: (data: allCheckedAudioDT) => <Speaker data={data.speaker} />
    },
    {
      title: `${"Audio Checker".toLocaleUpperCase()}`,
      key: 'audioChecker',
      width: 233,
      render: (data: allCheckedAudioDT) => <AudioChecker data={data.audioChecker}/>
    },
    {
      title: `${"Status".toLocaleUpperCase()}`,
      key: 'status',
      align: "center",
      width: 150,
      render: (data: allCheckedAudioDT) => <SpeechStatus data={data.status} />
    },
    {
      title: `${"Script".toLocaleUpperCase()}`,
      key: 'script',
      width: 156,
      render: (data: allCheckedAudioDT) => <div className='flex w-full justify-start items-center gap-x-[10px]'>
        <h1 className='w-28 truncate whitespace-nowrap'>{data.script.id}</h1>
        <img
          // onClick={() => {
          //     showDrawer(record);
          //     setSingleTargetData(record);
          // }}
          className='w-[10px] h-[10px] cursor-pointer'
          src={Icons.openInNewGray}
          alt="" />
      </div>,
    },
    {
      title: `${"DeadLine (DD/MM)".toLocaleUpperCase()}`,
      key: 'deadLine',
      width: 165,
      render: (data: allCheckedAudioDT) => <h1 className='text-small text-blue-gray-80'>{data.deadLine}</h1>
    },
    {
      title: `${"Submission Date".toLocaleUpperCase()}`,
      key: 'submissionDate',
      width: 150,
      render: (data: allCheckedAudioDT) => <h1 className='text-small text-blue-gray-80'>{data.deadLine}</h1>
    },
    {
      title: `${"Remark".toLocaleUpperCase()}`,
      key: 'remark',
      width: 90,
      align: "center",
      render: (data: allCheckedAudioDT) => (
        <div className='flex justify-center'>
          <img
            onClick={() => {
              setRemarkOpen(true);
              setSingleTargetData(data);
            }}
            src={Icons.File} className="h-[16px] w-[16px] cursor-pointer"
            alt=""
          />
        </div>
      )
    },
    {
      title: `${"Details".toLocaleUpperCase()}`,
      align: 'center',
      dataIndex: 'details',
      key: 'details',
      fixed: 'right',
      width: 90,
      render: (_, record: allCheckedAudioDT) => (
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
    onChange: (selectedRowKeys: React.Key[], selectedRows: allCheckedAudioDT[]) => {
      // setSelectedTarget(selectedRows);
      console.log('*******', selectedRows);


    },
    getCheckboxProps: (record: allCheckedAudioDT) => ({
      // disabled: record.name === 'Disabled User', // Column configuration not to be checked
      // name: record.assignee.name,
    }),
  };
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
      />

{
                remarkOpen &&
                <Remark
                    open={remarkOpen}
                    setOpen={setRemarkOpen}
                    roleName={'meem'}
                    roleType={'speaker'}
                    dateTime={singleTargetData?.deadLine ? singleTargetData?.deadLine : ''}
                    desc={'this is remark'}
                />
            }
    </div>
  )
}

export default Type18