import React, {FC} from "react";
interface Props{
  children?:any;
  className?:string;
  restProps?:any;
}
export const Grid:FC<Props> = (props) => {
  return (
    <div className={`${props.className} common-grid`} {...props.restProps}>
      {props.children}
    </div>
  );
};
