import React, { useState } from "react";
import Header from "../Header";
import DataContainerDropdown from "../DataContainerDropdown";
import DataContainerModal from "../DataContainerModal";
import Graphs from "../Graphs";
import { createDataDT } from "../../../../../types/dashboardTypes";

const domainWiseColors = ["#F5427F", "#00B86E", "#E4F542", "#42E0F5", "#3BA2F5", "#B336C8", "#F54542", "#F5AC42", "#FFD145"];
const reacordingAreaColors = ["#F5427F", "#00B86E", "#E3F542", "#42E0F5", "#3BA2F5", "#B336C8", "#F5AC42"];
const ActiveColorDomainWise: any = {
  "Natural & Pure Science": {
    fillColor: "#D11263",
    borderColor: "#F5427F",
    textColor: "",
    titeleColor: "text-[#F5427F]",
    validBgColor: "bg-[#F5427F1F]"
  },
  "Arts": {
    fillColor: "#00944D",
    borderColor: "#00B86E",
    textColor: "",
    titeleColor: "text-[#00B86E]",
    validBgColor: "bg-[#00B86E1F]"
  },
  "Belief & Thought": {
    fillColor: "#ADC100",
    borderColor: "#E4F542",
    textColor: "",
    titeleColor: "text-[#E4F542]",
    validBgColor: "bg-[#E4F5421F]"
  },
  "Applied Science": {
    fillColor: "#00B2C6",
    borderColor: "#42E0F5",
    textColor: "",
    titeleColor: "text-[#42E0F5]",
    validBgColor: "bg-[#42E0F51F]"
  },
  "Commerce & Finance": {
    fillColor: "#0081D0",
    borderColor: "#3BA2F5",
    textColor: "",
    titeleColor: "text-[#3BA2F5]",
    validBgColor: "bg-[#3BA2F51F]"
  },
  "Leisure": {
    fillColor: "#88009F",
    borderColor: "#B336C8",
    textColor: "",
    titeleColor: "text-[#B336C8]",
    validBgColor: "bg-[#B336C8]"
  },
  "Literature": {
    fillColor: "#D11C29",
    borderColor: "#F54542",
    textColor: "",
    titeleColor: "text-[#F54542]",
    validBgColor: "bg-[#F545421F]"
  },
  "World & Current Affairs": {
    fillColor: "#C78415",
    borderColor: "#F5AC42",
    textColor: "",
    titeleColor: "text-[#F5AC42]",
    validBgColor: "bg-[#F5AC421F]"

  },
  "Social & Community": {
    fillColor: "#CBA302",
    borderColor: "#FFD145",
    textColor: "",
    titeleColor: "text-[#FFD145]",
    validBgColor: "bg-[#FFD1451F]"
  },
}
const ActiveColorRecordingArea: any = {
  "Inside Room": {
    fillColor: "#D11263",
    borderColor: "#F5427F",
    textColor: "",
    titeleColor: "text-[#F5427F]",
    validBgColor: "bg-[#F5427F1F]"
  },
  "Outside Room": {
    fillColor: "#00944D",
    borderColor: "#00B86E",
    textColor: "",
    titeleColor: "text-[#00B86E]",
    validBgColor: "bg-[#00B86E1F]"
  },
  "Road": {
    fillColor: "#CBA302",
    borderColor: "#FFD145",
    textColor: "",
    titeleColor: "text-[#FFD145]",
    validBgColor: "bg-[#FFD1451F]"
  },
  "Market": {
    fillColor: "#00B2C6",
    borderColor: "#42E0F5",
    textColor: "",
    titeleColor: "text-[#42E0F5]",
    validBgColor: "bg-[#42E0F51F]"
  },
  "Open Area": {
    fillColor: "#0081D0",
    borderColor: "#3BA2F5",
    textColor: "",
    titeleColor: "text-[#3BA2F5]",
    validBgColor: "bg-[#3BA2F51F]"
  },
  "Other Public Area": {
    fillColor: "#88009F",
    borderColor: "#B336C8",
    textColor: "",
    titeleColor: "text-[#B336C8]",
    validBgColor: "bg-[#B336C8]"
  },
  "Noisy": {
    fillColor: "#C78415",
    borderColor: "#F5AC42",
    textColor: "",
    titeleColor: "text-[#F5AC42]",
    validBgColor: "bg-[#F5AC421F]"
  },
}


const CreateData = ({ data }: { data: createDataDT }) => {
  const CreateDropDownData = [
    {
      id: 1,
      value: "Distribution Source-wise",
    },
    {
      id: 2,
      value: "Domain-wise",
    },
    {
      id: 3,
      value: "Gender-wise",
    },
    {
      id: 4,
      value: "Age-wise",
    },
    {
      id: 5,
      value: "Locality-wise",
    },
    {
      id: 6,
      value: "Economic Situation-wise",
    },
    {
      id: 7,
      value: "Education-wise",
    },
    {
      id: 8,
      value: "Profession-wise",
    },
    {
      id: 9,
      value: "Recording Area",
    },
    {
      id: 10,
      value: "Recording Distance",
    },
  ];
  const [activePanel, setActivePanel] = useState("Distribution Source-wise");

  const handleActivePanel = (value: string) => {
    setActivePanel(value);
  };
  const DistributionDropdownMenu = (key: string) => {
    const Category1: any = {
      "Distribution Source-wise": <Graphs.DistributionSourceWise data={data.distributionSourceWise} />,
      "Domain-wise": <Graphs.DomainWise data={data.domainWise} colorsArray={domainWiseColors} hoverTooltipsColors={ActiveColorDomainWise} />,
      "Gender-wise": <Graphs.GenderWise data={data.genderWise} />,
      "Age-wise": <div></div>,
      "Locality-wise": <Graphs.LocalityWise data={data.localityWise} />,
      "Economic Situation-wise": <div></div>,
      "Education-wise": <Graphs.EducationWise data={data.educationWise} />,
      "Profession-wise": <Graphs.ProfessionWise data={data.professionWise} />,
      "Recording Area": <Graphs.DomainWise data={data.recordingArea} colorsArray={reacordingAreaColors} hoverTooltipsColors={ActiveColorRecordingArea} />,
      "Recording Distance": <div></div>,
    };
    return Category1[key];
  };

  return (
    <div>
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
        <DataContainerModal
          data={data}
          name="create"
          activePanel={activePanel}
        />
      </div>
      <div className="rounded-b-xl px-5 py-3">
        {DistributionDropdownMenu(activePanel)}
      </div>
    </div>
  );
};

export default CreateData;
