import React, { useContext, useEffect, useRef, useState } from "react";
import Buttons from "../../../Buttons";
import Icons from "../../../../assets/Icons";
import { Filter } from "../../../Filter";
import { filterData } from "../../../../data/script/filter";
import { ScriptContext } from "../../../../context/ScriptProvider";
import { SearchBox } from "../../../SearchBox";
import { targetFilterListDT } from "../../../../types/assignTypes";
import { CommonContext } from "../../../../context/CommonProvider";
import { scriptResDT } from "../../../../types/script";
import { EDIT_SCRIPT_PATH } from "../../../../helpers/Slug";
import { Link } from "react-router-dom";

type Props = {
  selectedScript: scriptResDT[];
  setSelectedScript: React.Dispatch<React.SetStateAction<scriptResDT[]>>;
}

const Header = ({ selectedScript, setSelectedScript }: Props) => {
  const scriptContext = useContext(ScriptContext);
  const commonContext = useContext(CommonContext)
  const csvRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState<number>(0);
  const [filterList, setFilterList] = useState<targetFilterListDT>({
    dataType: [],
    distributionSource: [],
    domain: [],
    subDomain: []
  })

  useEffect(() => {
    let count = 0;
    for (const key in filterList) {
      if (filterList[key].length > 0) {
        count += 1
      }
    }
    setCount(count)
  }, [filterList]);

  const handleFilterList = (key: string, value: string) => {
    if (filterList[key].includes(value)) {
      setFilterList({
        ...filterList,
        [key]: filterList[key].filter((item) => item !== value),
      });
    } else {
      setFilterList({
        ...filterList,
        [key]: [...filterList[key], value],
      });
    }
  }
  const handleReset = (key: string, type: "single" | "all") => {
    if (type === "all") {
      setFilterList({
        dataType: [],
        distributionSource: [],
        domain: [],
        subDomain: []
      })
    }
    else {
      if (key === "domain") {
        setFilterList({
          ...filterList,
          [key]: [],
          subDomain: []
        })
      }
      else {
        setFilterList({
          ...filterList,
          [key]: []
        })
      }
    }
  }

  const handleSubmitFilter = () => {
    const params = {
      module: filterList.dataType.join(","),
      domain: filterList.domain.join(","),
      subDomain: filterList.subDomain.join(","),
      distribution: filterList.distributionSource.join(","),
      role: commonContext.role.toLowerCase()
    }
    scriptContext.setScriptFilter({ ...scriptContext.scriptFilter, ...params })
    scriptContext.getAllScript(params);
  }

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      let formData = new FormData();
      formData.append("csvFile", file);
      scriptContext?.uploadCsv(formData);
    }
  };

  const handleUpload = () => {
    csvRef.current?.click();
  };


  return (
    <div className="mt-3 flex items-center justify-between mb-5">
      <div>
        <h1 className="text-heading-6 text-ct-blue-95 font-medium">Script</h1>
        <p className="text-small text-ct-blue-90-70% mt-1.5">
          List of Script, Create Script
        </p>
      </div>
      <div className="flex items-center">
        {selectedScript.length > 0 ? <>
          <Buttons.BgHoverBtn
            onClick={() => {
              scriptContext.deleteScript(commonContext.role, selectedScript.map((item) => item.id).join(",")); setSelectedScript([]);
            }}
            title="Delete"
            paddingY="py-2"
            paddingX="px-4"
            borderRadius="rounded-[6px]"
            textColor="text-secondary-blue-50"
            fontSize="text-small"
            fontWeight="font-medium"
            duration="duration-300"
            hoverBgColor="hover:bg-white"
          />
          {selectedScript.length === 1 &&
            <Link to={`${EDIT_SCRIPT_PATH}/${selectedScript[0]?.id}`}>
              <Buttons.BgHoverBtn
                title="Edit"
                paddingY="py-2"
                paddingX="px-4"
                borderRadius="rounded-[6px]"
                textColor="text-secondary-blue-50"
                fontSize="text-small"
                fontWeight="font-medium"
                duration="duration-300"
                hoverBgColor="hover:bg-white"
                marginX="mx-2"
              />
            </Link>
          }
        </> : null}
        <SearchBox.Type1 inputWidth="w-52" placeholder="Search with script ID, Title..." bgColor="bg-blue-gray-A10" textColor="text-ct-blue-90-70%" />
        {/* <Filter.Type1 filterData={filterData} /> */}
        <Filter.Type2 handleSubmitFilter={handleSubmitFilter} filterData={filterData} count={count} filterList={filterList} handleReset={handleReset} handleFilterList={handleFilterList} />
        <input
          type="file"
          ref={csvRef}
          accept=".csv"
          className="hidden"
          onChange={(e) => {
            if (e.target.files) {
              handleFile(e);
            }
          }}
        />
        <Buttons.IconWithTextButton.Secondary
          label="Upload Script"
          size="small"
          variant="Blue"
          marginX="ml-6 mr-3"
          iconAlign="start"
          icon={<img src={Icons.upload} alt="upload" />}
          onClick={handleUpload}
        />
        <Buttons.IconWithTextButton.Primary
          label="Create Script"
          size="small"
          variant="Megenta"
          icon={<img src={Icons.Add} alt="add" />}
          onClick={() => scriptContext.setModalOpen(true)}
        />
      </div>
    </div>
  );
};

export default Header;