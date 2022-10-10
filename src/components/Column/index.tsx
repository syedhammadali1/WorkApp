import React, { FC } from "react";
interface Props {
  children?: any;
  className?: string;
  restProps?: any;
}

export const Column: FC<Props> = ({ children, className, restProps }: Props) => {
  return (
    <div className={`${className} common-column`} {...restProps} >
      {children}
    </div>
  );
};
