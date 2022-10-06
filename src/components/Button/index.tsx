// import React from "react";
import PropTypes from "prop-types";
import React, { FC } from "react";
interface Props {
    children?: any;
    className?: string;
    leftIcon?: string;
    rightIcon?: string;
    shape?: string;
    variant?: string;
    size?: string;
    restProps?: any;
}

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

const Button: FC<Props> = (props) => {
    return (
        <button
            className={`${props.className} ${shapes[props.shape as keyof typeof shapes] || ""} ${variants[props.variant as keyof typeof variants] || ""
                } ${sizes[props.size as keyof typeof sizes] || ""} common-button `}
            {...props.restProps}
        >
            {!!props.leftIcon && props.leftIcon}
            {props.children}
            {!!props.rightIcon && props.rightIcon}
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
