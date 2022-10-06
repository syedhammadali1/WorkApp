import React, { FC } from "react";

interface Props {
  children?:any;
  className?:string;
  orientation?:string;
  restProps?:any;
}

export const List:FC<Props> = (props) => {
  return (
    <div
      className={`${props.className} ${
        props.orientation === "horizontal" ? "common-grid" : "common-list"
      }`}
      {...props.restProps}
    >
      {props.children}
    </div>
  );
};
