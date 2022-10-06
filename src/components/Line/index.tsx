// import { any } from "prop-types";
import React, { FC } from "react";

interface Props {
  className?:any;
};

export const Line:FC<Props> = ({ className, ...restProps }) => {
  return <div className={className} {...restProps} />;
};
