import React from "react";
import Layouts from "../../components/Layouts";
import Header from "../../components/containers/script/Header";
import ScriptForm from "./ScriptForm";
import Table from "../../components/Table";

const Script = () => {
  return (
    <Layouts.Forth>
      <div className="min-h-[calc(100vh-9.5vh)]">
        <Header />
        <Table.Type4 />
      </div>
    </Layouts.Forth>
  );
};
export default Script;
