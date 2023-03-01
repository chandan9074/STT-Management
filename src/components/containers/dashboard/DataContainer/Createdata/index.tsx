import { useContext, useState } from "react";
import Header from "../Header";
import DataContainerModal from "../DataContainerModal";
import Graphs from "../Graphs";
import { createDataDT } from "../../../../../types/dashboardTypes";
import AgeWise from "../Graphs/AgeWise";
import EconomicSituationWise from "../Graphs/EconomicSituationWise";
import { CommonContext } from "../../../../../context/CommonProvider";
import { STTMODULE } from "../../../../../helpers/ConditionVariable";
import Dropdown from "../../../../Dropdown";
import {
  ActiveColorDomainWise,
  ActiveColorRecordingArea,
  domainWiseColors,
  reacordingAreaColors,
  sttCreateDropDownData,
  ttsCreateDropDownData
} from "../../../../../data/dashboard/createCollectIndexData";



const CreateData = ({ data }: { data: createDataDT }) => {

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
      "Domain-wise": (
        <Graphs.DomainWise
          data={data.domainWise}
          colorsArray={domainWiseColors}
          hoverTooltipsColors={ActiveColorDomainWise}
        />
      ),
      "Gender-wise": <Graphs.GenderWise data={data.genderWise} />,
      "Age-wise": <AgeWise data={data.ageWise} />,
      "Locality-wise": <Graphs.LocalityWise data={data.localityWise} />,
      "Economic Situation-wise": <EconomicSituationWise data={data.economicSituationWise} />,
      "Education-wise": <Graphs.EducationWise data={data.educationWise} />,
      "Recording Distance": (
        <Graphs.RecordingDistance data={data.recordingDistance} />
      ),
      "Profession-wise": <Graphs.ProfessionWise data={data.professionWise} />,
      "Recording Area": (
        <Graphs.DomainWise
          data={data.recordingArea}
          colorsArray={reacordingAreaColors}
          hoverTooltipsColors={ActiveColorRecordingArea}
        />
      ),
    };
    return Category1[key];
  };

  return (
    <div>
      <Header
        headerType="Create"
        borderColor={type === STTMODULE ? "border-border-teal" : "border-[#80CBC4]"}
        bgColor={type === STTMODULE ? "bg-green-05" : "bg-[#FCF7FC]"}
        targetColor={type === STTMODULE ? "text-green/50-05956F" : "text-[#C22EB6]"}
        data={data}
      />

      <div className="flex justify-between p-5 bg-white rounded-b-xl">
        <Dropdown.Type4
          data={type === STTMODULE ? sttCreateDropDownData : ttsCreateDropDownData}
          handleActivePanel={handleActivePanel}
          active={activePanel}
        />
        <DataContainerModal
          data={data}
          name="create"
          activePanel={activePanel}
        />
      </div>
      <div className="rounded-b-xl px-5 pb-3 h-[450px]">
        {DistributionDropdownMenu(activePanel)}
      </div>
    </div>
  );
};

export default CreateData;
