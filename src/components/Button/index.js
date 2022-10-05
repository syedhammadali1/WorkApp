import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder5: "rounded-radius5",
  CustomBorderTL4:
    "rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px]",
  icbRoundedBorder15: "rounded-radius155",
};
const variants = {
  FillPink400: "bg-pink_400 text-white_A700",
  OutlineBluegray900:
    "border border-bluegray_900 border-solid text-bluegray_900",
  FillGray900: "bg-gray_900 text-white_A700",
  FillPink900: "bg-pink_900 text-white_A700",
  FillGray902: "bg-gray_902 text-white_A700",
  icbFillGray902: "bg-gray_902",
};
const sizes = {
  sm: "lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px]",
  md: "xl:p-[11px] p-[13px] 3xl:p-[15px] lg:p-[9px]",
  lg: "lg:p-[13px] xl:p-[16px] p-[19px] 3xl:p-[22px]",
  smIcn: "p-[3px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder5",
    "CustomBorderTL4",
    "icbRoundedBorder15",
  ]),
  variant: PropTypes.oneOf([
    "FillPink400",
    "OutlineBluegray900",
    "FillGray900",
    "FillPink900",
    "FillGray902",
    "icbFillGray902",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder5",
  variant: "FillPink400",
  size: "md",
};

export { Button };
