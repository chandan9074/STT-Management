import React, { useContext, useState } from "react";
import Header from "../Header";
import Graphs from "../Graphs";
import DataContainerDropdown from "../DataContainerDropdown";
import DataContainerModal from "../DataContainerModal";
import { collectDataDT } from "../../../../../types/dashboardTypes";
import AgeWise from "../Graphs/AgeWise";
import { CommonContext } from "../../../../../context/CommonProvider";
import { STTMODULE } from "../../../../../helpers/ConditionVariable";
import { ActiveColor, COLORS, sttCollectDropDownData, ttsCollectDropDownData } from "../../../../../data/dashboard/createCollectIndexData";
import Dropdown from "../../../../Dropdown";



const CollectData = ({ data }: { data: collectDataDT }) => {

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
        <Dropdown.Type4
          data={type === STTMODULE ? sttCollectDropDownData : ttsCollectDropDownData}
          handleActivePanel={handleActivePanel}
          active={activePanel}
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
