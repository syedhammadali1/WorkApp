// import { any } from "prop-types";
import React, { FC } from "react";

interface Props {
  className?:string;
  restProps?:any;
};

export const Line:FC<Props> = (props) => {
  return <div className={props.className} {...props.restProps} />;
};
