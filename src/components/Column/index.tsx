import React, { FC } from "react";
interface Props {
  children?: any;
  className?: string;
  restProps?: any;
  kjhk?: any;
}

export const Column: FC<Props> = ({ children, className, restProps,kjhk }: Props) => {
  // console.log(kjhk);
  
  return (
    <div className={`${className} common-column`} {...restProps} data-id={kjhk} >
      {children}
    </div>
  );
};
