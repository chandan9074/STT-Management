import React from "react";
import ScriptForm from "./ScriptForm";
import Layouts from "../../components/Layouts";
import Table from "../../components/Table";

const Script = () => {
  return (
    <Layouts.Secondary>
      <Table.Type4 />
      <ScriptForm />
    </Layouts.Secondary>
  );
};
export default Script;
