import React, { FC } from "react";
interface Props {
  children?: any;
  className?: string;
  style?: any;
<<<<<<< HEAD
  id?: any;
=======
  restProps?: any
>>>>>>> 2f03e81c9f7843b0dd2f4aa5da8a86ffde0c64d8
}

export const Column: FC<Props> = ({ children, className, style, id }: Props) => {
  return (
<<<<<<< HEAD
    <div className={`${className} common-column`} {...style} {...id}>
      {children}
=======
    <div className={`${props.className} common-column`} {...props.style}{...props.restProps}>
      {props.children}
>>>>>>> 2f03e81c9f7843b0dd2f4aa5da8a86ffde0c64d8
    </div>
  );
};
