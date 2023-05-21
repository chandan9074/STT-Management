import React, { useContext, useEffect, useRef, useState } from 'react'
import Dropdown from '../../../Dropdown'
import { userManagementFilterData, userRoleDropdownData } from '../../../../data/userManagement/UserManagementData'
import Buttons from '../../../Buttons'
import { SearchBox } from '../../../SearchBox'
import Icons from '../../../../assets/Icons'
import { Link } from 'react-router-dom'
import { CREATE_USER_PATH } from '../../../../helpers/Slug'
import { targetFilterListDT } from '../../../../types/assignTypes'
import { Filter } from '../../../Filter'
import { UserManagementContext } from '../../../../context/UserManagementProvider'

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    selectedRowId: string[];
}

const Header = ({ open, setOpen, selectedRowId }: Props) => {
    const [activeRole, setActiveRole] = React.useState<string>(userRoleDropdownData[0])
    const [count, setCount] = useState<number>(0);
    const [filterList, setFilterList] = useState<targetFilterListDT>({
        present_district: [],
        reporting: [],
        reporting_role: [],
        reporting_details: [],
    })

    const { getUserRoleListByRole, roleList, setQueryParams, queryParams } = useContext(UserManagementContext);

    const prevRoleListRef = useRef(roleList);


    useEffect(() => {
        let count = 0;
        for (const key in filterList) {
            if (filterList[key].length > 0) {
                if (key === "present_district" || key === "reporting") {
                    count += 1
                }
            }
        }
        setCount(count)
    }, [filterList]);

    useEffect(() => {
        if (filterList.reporting_role.length > 0) {
            getUserRoleListByRole(filterList.reporting_role[0])
        }
        // getScriptFilter();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterList.reporting_role])

    useEffect(() => {

        if (roleList !== prevRoleListRef.current) {
            const userObject = userManagementFilterData.find(obj => obj.key === "reporting");
            if (userObject) {
                userObject.viewRoleImg = filterList.reporting_role[0];
            }

            if (userObject && userObject.selects) {
                // collectorDetailsObject.child = collectedAudioCollector;
                const userDetailsObject = userObject.selects.find(obj => obj.key === "reporting_details");
                if (userDetailsObject) {
                    userDetailsObject.child = roleList;
                    userDetailsObject.role = filterList.reporting_role[0];
                    // userObject.isParent && userObject.isParent = filterList.reporting_role[0]
                }
            }
        }


        prevRoleListRef.current = roleList;

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [roleList]);


    const handleFilterList = (key: string, value: string) => {
        if (filterList[key].includes(value)) {
            if (key === "reporting_role" || key === "reporting_details") {
                setFilterList({
                    ...filterList,
                    [key]: filterList[key].filter((item) => item !== value),
                    reporting: filterList.reporting.filter((item) => item !== value),
                });
            }
            else {
                setFilterList({
                    ...filterList,
                    [key]: filterList[key].filter((item) => item !== value),
                });
            }
        }
        else {
            if (key === "reporting_role" || key === "reporting_details") {
                setFilterList({
                    ...filterList,
                    [key]: [...filterList[key], value],
                    reporting: [...filterList.reporting, value],
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
                present_district: [],
                reporting: [],
                reporting_role: [],
                reporting_details: [],
            })
        }
        else {
            if (key === "reporting") {
                setFilterList({
                    ...filterList,
                    [key]: [],
                    reporting_role: [],
                    reporting_details: [],
                })
            }
            else {
                setFilterList({
                    ...filterList,
                    [key]: [],
                })
            }
        }
    }

    const handleSubmitFilter = () => {
        setQueryParams({
            ...queryParams,
            district: filterList.present_district.join(","),
            reportingTo: filterList.reporting.join(","),
        })
    }

    const handleActivePanel = (value: string) => {
        setActiveRole(value)
        if (value.includes("Speaker")) {
            setQueryParams({
                ...queryParams,
                role: "Speaker",
                gender: value.split("-")[1].toLocaleLowerCase()
            })
        }
        else {
            setQueryParams({
                ...queryParams,
                role: value
            })
        }
    }

    return (
        <div className='pb-3 pt-3 flex justify-between items-center'>
            <div>
                <Dropdown.Type4 data={userRoleDropdownData} handleActivePanel={handleActivePanel} active={activeRole} />
                <p className='text-ct-blue-90-70% text-small mt-0.5 mb-0 pl-2'>List of Users, Create and Manage</p>
            </div>
            <div className='flex items-center'>
                {selectedRowId.length === 1 && <Buttons.LabelButton.Tertiary label='Manage' size='xSmall' variant='CT-Blue' marginX='mr-2' onClick={() => setOpen(!open)} />}
                <SearchBox.Type1 inputWidth="w-52" placeholder="Search with script ID, Title..." bgColor="bg-blue-gray-A10" textColor="text-ct-blue-90-70%" />
                <Filter.Type2 popupClassName='audio_submission_date_picker' handleSubmitFilter={handleSubmitFilter} filterData={userManagementFilterData} count={count} filterList={filterList} handleReset={handleReset} handleFilterList={handleFilterList} />
                <Link to={CREATE_USER_PATH}>
                    <Buttons.IconWithTextButton.Primary
                        label="Create User"
                        size="small"
                        variant="Megenta"
                        marginX='ml-6'
                        icon={<img src={Icons.Add} alt="add" />}
                    // onClick={() => scriptContext.setModalOpen(true)}
                    />
                </Link>
            </div>
        </div>
    )
}

export default Header