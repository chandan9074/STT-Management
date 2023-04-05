import Icons from "../../assets/Icons";

const RoleImage = ({ role, width, height }: { role: string, width?: string, height?: string }) => {
  return (
    <>
      {role.toLowerCase() === "admin" ? (
        <img src={Icons.admin} alt="admin" className={`${width ? `${width}` : "w-6"} ${height ? `${height}` : "h-6"}`} />
      ) : role.toLowerCase() === "manager" ? (
        <img src={Icons.manager} alt="manager" className={`${width ? `${width}` : "w-6"} ${height ? `${height}` : "h-6"}`} />
      ) : role.toLowerCase() === "team leader" ? (
        <img src={Icons.teamLeader} alt="teamLeader" className={`${width ? `${width}` : "w-6"} ${height ? `${height}` : "h-6"}`} />
      ) : role.toLowerCase() === "collector" ? (
        <img src={Icons.collector} alt="collector" className={`${width ? `${width}` : "w-6"} ${height ? `${height}` : "h-6"}`} />
      ) : role.toLowerCase() === "audio checker" ? (
        <img src={Icons.audioChecker} alt="audioChecker" className={`${width ? `${width}` : "w-6"} ${height ? `${height}` : "h-6"}`} />
      ) : role.toLowerCase() === "annotator" ? (
        <img src={Icons.annotator} alt="annotator" className={`${width ? `${width}` : "w-6"} ${height ? `${height}` : "h-6"}`} />
      ) : role.toLowerCase() === "validator" ? (
        <img src={Icons.validator} alt="validator" className={`${width ? `${width}` : "w-6"} ${height ? `${height}` : "h-6"}`} />
      ) : role.toLowerCase() === "speaker" ? (
        <img src={Icons.speakerMale} alt="speakerMale" className={`${width ? `${width}` : "w-6"} ${height ? `${height}` : "h-6"}`} />
      )  : role === "speakerFemale" ? (
        <img src={Icons.speakerFemale} alt="speakerFemale" className={`${width ? `${width}` : "w-6"} ${height ? `${height}` : "h-6"}`} />
      ) : (
        ""
      )}
    </>
  );
};

export default RoleImage;
