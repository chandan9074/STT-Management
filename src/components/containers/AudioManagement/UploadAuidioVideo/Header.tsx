import React, { useContext, useEffect, useRef, useState } from 'react';
import Icons from '../../../../assets/Icons';
import Buttons from '../../../Buttons';
import { Link } from 'react-router-dom';
import { ADD_SPEECH_PATH } from '../../../../helpers/Slug';
import TitleSubTitleAudioManagement from '../../../common/TitleSubTitleAudioManagement';
import { targetFilterListDT } from '../../../../types/assignTypes';
import { AudioManagementContext } from '../../../../context/AudioManagementProvider';
import { SearchBox } from '../../../SearchBox';
import { Filter } from '../../../Filter';
import { uploadAudioFilterData } from '../../../../data/audioManagement/AudioManagementData';

const Header = () => {

    const [count, setCount] = useState<number>(0);
    const [filterList, setFilterList] = useState<targetFilterListDT>({
        dataType: [],
        uploader: [],
        uploader_district: [],
        uploader_details: [],
        uploadPeriod: [],
        domain: [],
    })

    const { getCollectorList, collectorList } = useContext(AudioManagementContext);

    const prevCollectedCollectorRef = useRef(collectorList);

    useEffect(() => {
        let count = 0;
        for (const key in filterList) {
            if (filterList[key].length > 0) {
                if (key === "dataType" || key === "uploader" || key === "uploadPeriod" || key === "domain") {
                    count += 1
                }
            }
        }
        setCount(count)
    }, [filterList]);

    useEffect(() => {
        getCollectorList("uploadAudioCollector");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {

        if (collectorList !== prevCollectedCollectorRef.current) {
            const collectorObject = uploadAudioFilterData.find(obj => obj.key === "uploader");
            if (collectorObject && collectorObject.selects) {
                const collectorDetailsObject = collectorObject.selects.find(obj => obj.key === "uploader_details");
                if (collectorDetailsObject) {
                    collectorDetailsObject.child = collectorList;
                }
            }
        }
        prevCollectedCollectorRef.current = collectorList;

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [collectorList]);


    const handleFilterList = (key: string, value: string) => {
        if (filterList[key].includes(value)) {
            if (key === "uploader_district" || key === "uploader_details") {
                setFilterList({
                    ...filterList,
                    [key]: filterList[key].filter((item) => item !== value),
                    uploader: filterList.uploader.filter((item) => item !== value),
                });
            }
            else {
                setFilterList({
                    ...filterList,
                    [key]: filterList[key].filter((item) => item !== value),
                });
            }
        } else {
            if (key === "uploader_district" || key === "uploader_details") {
                setFilterList({
                    ...filterList,
                    [key]: [...filterList[key], value],
                    uploader: [...filterList.uploader, value],
                });
            }
            else {
                setFilterList({
                    ...filterList,
                    [key]: [...filterList[key], value],
                });
            }
        }
    }
    const handleReset = (key: string, type: "single" | "all") => {
        if (type === "all") {
            setFilterList({
                dataType: [],
                uploader: [],
                uploader_district: [],
                uploader_details: [],
                uploadPeriod: [],
                domain: [],
            })
        }
        else {
            setFilterList({
                ...filterList,
                [key]: [],
            });
        }
    }

    const handleSubmitFilter = () => {
    }


    return (
        <div className='flex justify-between mb-[23px] pl-[26px] pr-[15px]'>
            <div>
                <TitleSubTitleAudioManagement
                    title='Uploaded Speech'
                    subTitle='List of collected media'
                />
            </div>
            <div className='flex items-center gap-x-7'>
                <div className='flex items-center gap-x-3'>
                    <SearchBox.Type1 inputWidth="w-28" placeholder="Search" bgColor="bg-blue-gray-A10" textColor="text-ct-blue-90-70%" />
                    <Filter.Type2 popupClassName='audio_submission_date_picker' handleSubmitFilter={handleSubmitFilter} filterData={uploadAudioFilterData} count={count} filterList={filterList} handleReset={handleReset} handleFilterList={handleFilterList} />
                </div>
                <Link to={ADD_SPEECH_PATH}>
                    <Buttons.IconWithTextButton.Primary
                        label="Add Speech"
                        size="small"
                        variant="Megenta"
                        icon={<img src={Icons.Add} alt="add" />}
                    />
                </Link>
            </div>
        </div>
    );
};

export default Header;