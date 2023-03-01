import React, { useContext, useRef } from "react";
import Buttons from "../../../Buttons";
import Icons from "../../../../assets/Icons";
import { Filter } from "../../../Filter";
import { filterData } from "../../../../data/script/filter";
import { ScriptContext } from "../../../../context/ScriptProvider";
import { SearchBox } from "../../../SearchBox";

const Header = () => {
  const scriptContext = useContext(ScriptContext);
  const csvRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    // console.log("file", file);
    if (file) {
      let formData = new FormData();
      formData.append("csvFile", file);
      scriptContext?.uploadCsv(formData);

      // const reader = new FileReader();
      // reader.onload = (e) => {
      //   const text = e.target?.result;
      //   if (text) {
      //     const data = text.toString().split("");
      //     const script = data.map((item) => {
      //       return {
      //         script: item,
      //       };
      //     });
      //     // scriptContext?.setScript(script);
      //     // console.log("script data,,,,,,", script);
      //   }
      // };
      // reader.readAsText(file);
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
        <Buttons.BgHoverBtn
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
        <SearchBox.Type1 inputWidth="w-52" placeholder="Search with script ID, Title..." paddingX="px-3" paddingY="py-2" bgColor="bg-blue-gray-A10" textColor="text-ct-blue-90-70%" />
        <Filter.Type1 filterData={filterData} />
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