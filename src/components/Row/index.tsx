import React, { FC } from "react";

interface Props {
  children?: any;
  className?: string;
  id?: any;
}

export const Row: FC<Props> = (props) => {
  return (
    <div className={`${props.className} common-row`} {...props.id}>
      {props.children}
    </div>
  );
};
