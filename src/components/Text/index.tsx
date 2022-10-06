import React, { FC } from "react";
import { JsxElement } from "typescript";
interface Props {
  children?:JSX.Element|string;
  className?:string;
  variant?:string;
  as?:string; 
  href?:string; 
  // children: React.ReactNode;
}
const variantClasses = {
  h1: "font-bold lg:text-[45px] xl:text-[56px] text-[64px] 3xl:text-[76px]",
  h2: "lg:text-[34px] xl:text-[42px] text-[48px] 3xl:text-[57px]",
  h3: "font-bold lg:text-[17px] xl:text-[21px] text-[24px] 3xl:text-[28px]",
  h4: "font-bold lg:text-[14px] xl:text-[17px] text-[20px] 3xl:text-[24px]",
  h5: "lg:text-[11px] xl:text-[14px] text-[16px] 3xl:text-[19px]",
  h6: "xl:text-[12px] text-[14px] 3xl:text-[16px] lg:text-[9px]",

};
const Text:FC<Props>  = ({ children, className, variant, as, ...restProps }) => {
  const Component = as;
  // console.log(variant ? variantClasses[variant]:'');
  if (!Component) return null;
  if (variant != undefined || null) {
    return (
      <>
    
        <Component 
          className={`${className} ${variantClasses[variant as keyof typeof variantClasses]}`}
          {...restProps}
        >
          {children}
        </Component>
      </>
    
      );
  }

  return (
    <>
  
<p>hello</p>
    </>
  
    );
  

};

Text.defaultProps = {
  as: 'span',
}

export { Text }; 
