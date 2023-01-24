import React from "react";

type Props = {
  paddingX?: string;
  paddingY?: string;
  marginX?: string;
  marginY?: string;
  bgColor?: string;
  textColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  border?: string;
  hoverBorder?: string;
  borderRadius?: string;
  hoverBorderRadius?: string;
  boxShadow?: string;
  hoverBoxShadow?: string;
  fontSize?: string;
  fontWeight?: string;
  hoverFontSize?: string;
  hoverFontWeight?: string;
  duration?: string;
  title: string;
};

const BgHoverBtn = ({
  paddingX,
  paddingY,
  marginX,
  marginY,
  bgColor,
  hoverBgColor,
  textColor,
  hoverTextColor,
  border,
  hoverBorder,
  borderRadius,
  hoverBorderRadius,
  boxShadow,
  hoverBoxShadow,
  fontSize,
  fontWeight,
  hoverFontSize,
  hoverFontWeight,
  duration,
  title,
}: Props) => {
  return (
    <button
      className={`${paddingX} ${paddingY} ${marginX} ${marginY} ${bgColor} ${hoverBgColor} ${textColor} ${hoverTextColor} ${border} ${hoverBorder} ${borderRadius} ${hoverBorderRadius} ${boxShadow} ${hoverBoxShadow} ${fontSize} ${fontWeight} ${hoverFontSize} ${hoverFontWeight} ${duration}`}
    >
      {title}
    </button>
  );
};

export default BgHoverBtn;
