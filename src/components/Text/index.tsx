import React, { FC } from "react";
interface Props {
  children?: JSX.Element | any;
  className?: string;
  variant?: string;
  as?: any;
  href?: string;
  restProps?: any;

}
const variantClasses = {
  h1: "font-bold text-[30px] lg:text-[45px] xl:text-[56px] text-[64px] 3xl:text-[76px]",
  h2: "lg:text-[34px] xl:text-[42px] text-[48px] 3xl:text-[57px]",
  h3: "font-bold lg:text-[17px] xl:text-[21px] text-[24px] 3xl:text-[28px]",
  h4: "font-bold lg:text-[14px] xl:text-[17px] text-[20px] 3xl:text-[24px]",
  h5: "lg:text-[11px] xl:text-[16px] text-[16px] 3xl:text-[19px]",
  h6: "xl:text-[12px] text-[14px] 3xl:text-[16px] lg:text-[9px]",
  footerLink: "xl:text-[14px] text-[14px] 3xl:text-[16px] lg:text-[9px]",
  logoText: "",
};

//  children, className, variant, as, ...restProps
const Text: FC<Props> = (props) => {
  const Component = props.as;
  if (props.variant !== undefined || null) {
    return (
      <>
        <Component
          className={` ${variantClasses[props.variant as keyof typeof variantClasses]} ${props.className}`}
          {...props.restProps}
        >
          {props.children}
        </Component>
      </>
    );
  } else {

    return (
      <>

      </>
    );

  }


};

Text.defaultProps = {
  as: 'span',
}

export { Text }; 
