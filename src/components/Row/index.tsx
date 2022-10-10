import React, { FC } from "react";

interface Props {
  children?: any;
  className?: string;
  restProps?: any;
}

export const Row: FC<Props> = (props) => {
  return (
    <div className={`${props.className} common-row`} {...props.restProps}>
      {props.children}
    </div>
  );
};
