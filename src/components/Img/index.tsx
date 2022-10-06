import React, { FC } from "react";

interface Props{
  className?:any;
  src?:any;
  alt?:any;
}
export const Img:FC<Props> = ({
  className,
  src = "defaultNoData.png",
  alt = "testImg",
  ...restProps
}) => {
  return (
    <img
      className={`${className} common-image`}
      src={src}
      alt={alt}
      {...restProps}
      loading={"lazy"}
    />
  );
};
