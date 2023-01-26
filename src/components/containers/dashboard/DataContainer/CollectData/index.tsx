import React, { useContext, useState } from "react";
import Header from "../Header";
import Graphs from "../Graphs";
import DataContainerDropdown from "../DataContainerDropdown";
import DataContainerModal from "../DataContainerModal";
import { collectDataDT } from "../../../../../types/dashboardTypes";
import AgeWise from "../Graphs/AgeWise";
import { CommonContext } from "../../../../../context/CommonProvider";
import { STTMODULE } from "../../../../../helpers/ConditionVariable";

const COLORS = ["#42F5E4", "#3BA2F5", "#B336C8", "#F5E342"];
const ActiveColor: any = {
  "Education/Informative": {
    fillColor: "#00B2C6",
    borderColor: "#42F5E4",
    textColor: "",
    titeleColor: "text-[#42F5E4]",
    validBgColor: "bg-[#42E0F51F]",
  },
  Business: {
    fillColor: "#0081D0",
    borderColor: "#3BA2F5",
    textColor: "",
    titeleColor: "text-[#3BA2F5]",
    validBgColor: "bg-[#3BA2F51F]",
  },
  Leisure: {
    fillColor: "#88009F",
    borderColor: "#B336C8",
    textColor: "",
    titeleColor: "text-[#B336C8]",
    validBgColor: "bg-[#B336C81F]",
  },
  "Public/Institutional": {
    fillColor: "#CBA302",
    borderColor: "#F5E342",
    textColor: "",
    titeleColor: "text-[#F5E342]",
    validBgColor: "bg-[#FFD1451F]",
  },
};

const CollectData = ({ data }: { data: collectDataDT }) => {
  const sttCollectDropDownData = [
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
  ];
  const ttsCollectDropDownData = [
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
  ];
  const [activePanel, setActivePanel] = useState("Distribution Source-wise");
  const commonContext = useContext(CommonContext)
  const { type } = commonContext

  const handleActivePanel = (value: string) => {
    setActivePanel(value);
  };
  const DistributionDropdownMenu = (key: string) => {
    const Category1: any = {
      "Distribution Source-wise": (
        <Graphs.DistributionSourceWise data={data.distributionSourceWise} />
      ),
      "Gender-wise": <Graphs.GenderWise data={data.genderWise} />,
      "Age-wise": <AgeWise data={data.ageWise} />,
      "Domain-wise": (
        <Graphs.DomainWise
          data={data.domainWise}
          colorsArray={COLORS}
          hoverTooltipsColors={ActiveColor}
        />
      ),
      "Locality-wise": <Graphs.LocalityWise data={data.localityWise} />,
    };
    return Category1[key];
  };
  return (
    <div>
      <Header
        data={data}
        borderColor={type === STTMODULE ? "border-cold-turkey" : "border-[#C4B0B2]"}
        headerType="Collect"
        bgColor={type === STTMODULE ? "bg-red-03" : "bg-[#FCFCF7]"}
        targetColor={type === STTMODULE ? "text-red-80" : "text-[#88991C]"}
      />
      <div className="flex justify-between p-5 bg-white rounded-b-xl">
        <DataContainerDropdown
          data={type === STTMODULE ? sttCollectDropDownData : ttsCollectDropDownData}
          handleActivePanel={handleActivePanel}
        />
        <DataContainerModal
          data={data}
          name="Collect"
          activePanel={activePanel}
        />
      </div>
      <div className="rounded-b-xl px-5 pb-3 h-[452px]">
        {DistributionDropdownMenu(activePanel)}
      </div>
    </div>
  );
};

export default CollectData;
