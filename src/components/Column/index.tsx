import React, { FC } from "react";
interface Props {
  children?: any;
  className?: string;
  style?: any;
  restProps?: any
}

export const Column: FC<Props> = (props) => {
  
  return (
    <div className={`${props.className} common-column`} {...props.style}{...props.restProps}>
      {props.children}
    </div>
  );
};
