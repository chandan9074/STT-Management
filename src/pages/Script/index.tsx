import React from "react";
import Layouts from "../../components/Layouts";
import Header from "../../components/containers/script/Header";

const Script = () => {
  return (
    <Layouts.Forth>
      <div className="min-h-[calc(100vh-9.5vh)]">
        <Header />
      </div>
    </Layouts.Forth>
  );
};

export default Script;
