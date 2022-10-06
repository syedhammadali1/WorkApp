import React, { FC } from "react";
interface Props {
  children?: any;
  className?: string;
  restProps?: any;
}

export const FloatingButton: FC<Props> = (props) => {
  return (
    <button className={`${props.className} common-floating-button`} {...props.restProps}>
      {props.children}
    </button>
  );
};
