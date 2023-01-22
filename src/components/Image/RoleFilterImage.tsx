
import React from "react";
import Icons from "../../assets/Icons";

const RoleFilterImage = ({ role }: { role: string }) => {
  return (
    <>
      {role.toLowerCase() === "admin" ? (
        <img src={Icons.admin} alt="admin" className="w-6 h-6 filter grayscale " />
      ) : role.toLowerCase() === "manager" ? (
        <img src={Icons.manager} alt="manager" className="w-6 h-6 filter grayscale " />
      ) : role.toLowerCase() === "team leader" ? (
        <img src={Icons.teamLeader} alt="teamLeader" className="w-6 h-6 filter grayscale " />
      ) : role.toLowerCase() === "collector" ? (
        <img src={Icons.collector} alt="collector" className="w-6 h-6 opacity-[0.55] filter grayscale " />
      ) : role.toLowerCase() === "audio checker" ? (
        <img src={Icons.audioChecker} alt="audioChecker" className="w-6 h-6 opacity-[55%] filter grayscale " />
      ) : role.toLowerCase() === "annotator" ? (
        <img src={Icons.annotator} alt="annotator" className="w-6 h-6 opacity-[0.9] filter grayscale" />
      ) : role.toLowerCase() === "validator" ? (
        <img src={Icons.validator} alt="validator" className="w-6 h-6 filter grayscale " />
      ) : role.toLowerCase() === "speaker" ? (
        <img src={Icons.speakerMale} alt="speakerMale" className="w-6 h-6 opacity-[85%] filter grayscale " />
      ) : (
        ""
      )}
    </>
  );
};

export default RoleFilterImage;
