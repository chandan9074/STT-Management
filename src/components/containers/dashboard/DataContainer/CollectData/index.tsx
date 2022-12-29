import React, {useState} from 'react';
import Header from "../Header";
import Graphs from "../Graphs";
import DataContainerDropdown from "../DataContainerDropdown";
import DataContainerModal from "../DataContainerModal";


const CollectData = () => {
    const CollectDropDownData = [
        {
            id: 1,
            value: "Distribution Source-wise"
        },
        {
            id: 2,
            value: "Domain-wise"
        },
        {
            id: 3,
            value: "Gender-wise"
        },
        {
            id: 4,
            value: "Age-wise"
        },

        {
            id: 5,
            value: "Locality-wise"
        },

    ]
    const [activePanel, setActivePanel] = useState("")

    const handleActivePanel = (value: string) => {
        setActivePanel(value)
    }
    const DistributionDropdownMenu = (key: string) => {
        const Category1: any = {
            "Distribution Source-wise": <Graphs.DistributionSourceWise/>,
            "Domain-wise": <div></div>,
            "Gender-wise": <div></div>,
            "Age-wise": <div></div>,
            "Locality-wise": <div></div>,

        }
        return Category1[key];
    }
    return (
        <div className="bg-white rounded-xl shadow-bottom-light-blue-10">
            <Header
                borderColor="border-cold-turkey"
                type="Collect"
                bgColor="bg-red-03"
                targetColor="text-red-80"
            />
            <div className="flex justify-between p-5 bg-white rounded-b-xl">
                <DataContainerDropdown
                    data={CollectDropDownData}
                    handleActivePanel={handleActivePanel}
                />
                <DataContainerModal/>
            </div>
            <div className="rounded-b-xl">
                {
                    DistributionDropdownMenu(activePanel)
                }
            </div>
        </div>
    );
};

export default CollectData;