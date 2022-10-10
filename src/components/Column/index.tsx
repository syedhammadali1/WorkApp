import React, { FC } from "react";
interface Props {
  children?: any;
  className?: string;
  style?: any;
  id?: any;
}

export const Column: FC<Props> = ({ children, className, style, id }: Props) => {
  return (
    <div className={`${className} common-column`} {...style} {...id}>
      {children}
    </div>
  );
};
