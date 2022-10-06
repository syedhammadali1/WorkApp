import React, { FC } from "react";
interface Props {
  children?: any;
  className?: string;
  restProps?: any
}

export const Column: FC<Props> = (props) => {
  return (
    <div className={`${props.className} common-column`} {...props.restProps}>
      {props.children}
    </div>
  );
};
