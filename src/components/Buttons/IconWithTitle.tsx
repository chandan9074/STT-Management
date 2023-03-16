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
  image: string;
  imageHeight?: string;
  imageWidth?: string;
  imageMarginX?: string;
  imageMarginY?: string;
  imageMargin?: string;
  children?: any;
};

const IconWithTitle = ({
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
  image,
  imageHeight,
  imageWidth,
  imageMarginX,
  imageMarginY,
  imageMargin,
  children,
}: Props) => {
  return (
    <button
      className={`${paddingX} ${paddingY} ${marginX} ${marginY} ${bgColor} ${hoverBgColor} ${border} ${hoverBorder} ${borderRadius} ${hoverBorderRadius} ${boxShadow} ${hoverBoxShadow} ${duration} flex items-center justify-center`}
    >
      <img
        src={image}
        alt=""
        className={`${imageHeight} ${imageWidth} ${imageMarginX} ${imageMarginY} ${imageMargin}`}
      />
      <h5
        className={`${textColor} ${hoverTextColor} ${fontSize} ${fontWeight} ${hoverFontSize} ${hoverFontWeight} mb-0`}
      >
        {title}
      </h5>
    </button>
  );
};

export default IconWithTitle;
