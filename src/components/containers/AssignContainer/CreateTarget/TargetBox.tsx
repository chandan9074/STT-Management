import React from "react";
import Icons from "../../../../assets/Icons";
import Buttons from "../../../Buttons";

const TargetBox = ({
  targetTitle,
  onClick,
}: {
  targetTitle: string;
  onClick: () => void;
}) => {
  return (
    <div>
      <Buttons.IconWithTextButton.Tertiary
        label={targetTitle}
        size="medium"
        variant="Blue"
        disabled={false}
        icon={<img src={Icons.AddBlue} className="w-[12px] h-[12px]" alt="" />}
        iconAlign="start"
        onClick={onClick}
      />
    </div>
  );
};

export default TargetBox;
