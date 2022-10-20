import React, { FC } from "react";

interface Props{
  className?:any;
  src?:any;
  alt?:any;
  clickEvent?:any;
  restProps?:any;
}
export const Img:FC<Props> = (props) => {  
  return (
    <img
      className={`${props.className} common-image`}
      src={props.src}
      alt={props.alt}
      onClick={props.clickEvent}
      {...props.restProps}
      loading={"lazy"}
    />
  );
};
