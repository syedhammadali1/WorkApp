
import React, { FC } from "react";

interface Props {
  children?: any;
  className?: string;
  restProps?: any
}

export const Stack: FC<Props> = (props) => {
  return (
    <div className={`${props.className} common-stack`} {...props.restProps}>
      {props.children}
    </div>
  );
};

