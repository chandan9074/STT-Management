import React, {useState} from 'react';
import Header from "../Header";
import DataContainerDropdown from "../DataContainerDropdown";
import DataContainerModal from "../DataContainerModal";
import Graphs from "../Graphs";

const CreateData = () => {
    const CreateDropDownData = [
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
        {
            id: 6,
            value: "Economic Situation-wise"
        },
        {
            id: 7,
            value: "Education-wise"
        }, {
            id: 8,
            value: "Profession-wise"
        }, {
            id: 9,
            value: "Recording Area"
        }, {
            id: 10,
            value: "Recording Distance"
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
            "Economic Situation-wise": <div></div>,
            "Education-wise": <div></div>,
            "Profession-wise": <div></div>,
            "Recording Area": <div></div>,
            "Recording Distance": <div></div>,
        }
        return Category1[key];
    }


    return (
        <div className="bg-white rounded-xl shadow-bottom-light-blue-10">
            <Header
                type="Create"
                borderColor="border-border-teal"
                bgColor="bg-green-05"
                targetColor="text-green/50-05956F"
            />

            <div className="flex justify-between p-5 bg-white rounded-b-xl">
                <DataContainerDropdown
                    data={CreateDropDownData}
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

export default CreateData;