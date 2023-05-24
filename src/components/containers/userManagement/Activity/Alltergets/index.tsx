import { useEffect, useState } from 'react';
import { targetFilter } from '../../../../../data/assign/AssignData';
import { completedFilter, speechFilter } from '../../../../../data/userManagement/activityData';
import { targetFilterListDT } from '../../../../../types/assignTypes';
import Buttons from '../../../../Buttons';
import { Filter } from '../../../../Filter';
import { SearchBox } from '../../../../SearchBox';
import Table from '../../../../Table';
import { CategoryMap } from '../../../dashboard/DataContainer/CollectData';
import { targetAllSpeechData, targetCompletedData, targetData } from '../../../../../data/userManagement/UserManagementData';

const  AllTergets = () => {
    const [activeTab, setActiveTab] = useState<string>("Pending");
    const [pendingCount, setPendingCount] = useState<number>(0);
    const [completedCount, setCompletedCount] = useState<number>(0);
    const [allSpeechCount, setAllSpeechCount] = useState<number>(0);
    const [pendingFilterList, setPendingFilterList] = useState<targetFilterListDT>({
        targetStatus: [],
        speechStatus: [],
    })
    const [completedFilterList, setCompletedFilterList] = useState<targetFilterListDT>({
        targetStatus: [],
    })
    const [allSpeechFilterList, setAllSpeechFilterList] = useState<targetFilterListDT>({
        submissionDate: [],
        recordingArea: [],
        recordingDistance: [],
        status: [],
        speakerLocality: [],
    })

    useEffect(() => {
        if (pendingFilterList) {
            let count = 0;
            for (const key in pendingFilterList) {
                if (pendingFilterList[key].length > 0) {
                    count += 1
                }
            }
            setPendingCount(count)
        }
        if (completedFilterList) {
            let count = 0;
            for (const key in completedFilterList) {
                if (completedFilterList[key].length > 0) {
                    count += 1
                }
            }
            setCompletedCount(count)
        }
        if (allSpeechFilterList) {
            let count = 0;
            for (const key in allSpeechFilterList) {
                if (allSpeechFilterList[key].length > 0) {
                    count += 1
                }
            }
            setAllSpeechCount(count)
        }
    }, [pendingFilterList, completedFilterList, allSpeechFilterList]);

    const handlePendingFilterList = (key: string, value: string) => {
        if (pendingFilterList[key].includes(value)) {
            setPendingFilterList({
                ...pendingFilterList,
                [key]: pendingFilterList[key].filter((item) => item !== value),
            });
        } else {
            setPendingFilterList({
                ...pendingFilterList,
                [key]: [...pendingFilterList[key], value],
            });
        }
    }

    const handleCompletedFilterList = (key: string, value: string) => {
        if (completedFilterList[key].includes(value)) {
            setCompletedFilterList({
                ...completedFilterList,
                [key]: completedFilterList[key].filter((item) => item !== value),
            });
        } else {
            setCompletedFilterList({
                ...completedFilterList,
                [key]: [...completedFilterList[key], value],
            });
        }
    }

    const handleAllSpeechFilterList = (key: string, value: string) => {
        if (allSpeechFilterList[key].includes(value)) {
            setAllSpeechFilterList({
                ...allSpeechFilterList,
                [key]: allSpeechFilterList[key].filter((item) => item !== value),
            });
        } else {
            setAllSpeechFilterList({
                ...allSpeechFilterList,
                [key]: [...allSpeechFilterList[key], value],
            });
        }
    }

    const handlePendingReset = (key: string, type: "single" | "all") => {
        if (type === "all") {
            setPendingFilterList({
                targetStatus: [],
                speechStatus: [],
            })
        }
        else {
            setPendingFilterList({
                ...pendingFilterList,
                [key]: [],
            });
        }
    }

    const handleCompletedReset = (key: string, type: "single" | "all") => {
        if (type === "all") {
            setCompletedFilterList({
                targetStatus: [],
            })
        }
        else {
            setCompletedFilterList({
                ...completedFilterList,
                [key]: [],
            });
        }
    }

    const handleAllSpeechReset = (key: string, type: "single" | "all") => {
        if (type === "all") {
            setAllSpeechFilterList({
                submissionDate: [],
                recordingArea: [],
                recordingDistance: [],
                status: [],
                speakerLocality: [],
            })
        }
        else {
            setAllSpeechFilterList({
                ...allSpeechFilterList,
                [key]: [],
            });
        }
    }

    const handleSubmitFilter = () => {

    }

    const allTergetMenu = (key: string) => {
        const Category: CategoryMap = {
            "Pending": <><Table.Type7 data={targetData} /></>,
            "Completed": <> <Table.Type14 data={targetCompletedData} /></>,
            "All Speeches": <><Table.Type13 data={targetAllSpeechData} /></>
        };
        return Category[key];
    };

    return (
        <div>
            <div className='flex justify-between mt-9 mb-6'>
                <div className='flex gap-6 items-center'>
                    <p className='text-heading-6 font-medium text-ct-blue-95'>All Targets</p>
                    <Buttons.TabButton.Secondary setActiveData={setActiveTab} tabLabel={['Pending', "Completed", "All Speeches"]} />
                </div>
                <div className='flex items-center gap-x-3'>
                    <SearchBox.Type1 inputWidth="w-52" placeholder="Search with Task ID, User..." bgColor="bg-blue-gray-A10" textColor="text-ct-blue-90-70%" />
                    {activeTab === "Pending" ? <Filter.Type2 handleSubmitFilter={handleSubmitFilter} filterData={targetFilter} count={pendingCount} filterList={pendingFilterList} handleReset={handlePendingReset} handleFilterList={handlePendingFilterList} /> : activeTab === "Completed" ? <Filter.Type2 handleSubmitFilter={handleSubmitFilter} filterData={completedFilter} count={completedCount} filterList={completedFilterList} handleReset={handleCompletedReset} handleFilterList={handleCompletedFilterList} /> : <Filter.Type2 popupClassName='all_speech_deadline_date_picker' handleSubmitFilter={handleSubmitFilter} filterData={speechFilter} count={allSpeechCount} filterList={allSpeechFilterList} handleReset={handleAllSpeechReset} handleFilterList={handleAllSpeechFilterList} />}
                </div>
            </div>
            <div>
                {allTergetMenu(activeTab)}
            </div>
        </div>
    );
};

export default AllTergets;