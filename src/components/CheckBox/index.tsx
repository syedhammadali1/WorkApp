import { ErrorMessage } from "../../components/ErrorMessage";
import React, { FC } from "react";
import PropTypes from "prop-types";

interface Props {
    inputClassName?: string;
    className?: string;
    boxName?: string;
    children?: string;
    label?: string;
    errors?: any;
    restProps?: any;
}

const CheckBox: FC<Props> = React.forwardRef(
    (props, ref) => {
        return (
            <>
                <div className={props.className}>
                    <input
                        className={`${props.inputClassName}   `}
                        ref={ref}
                        type="checkbox"
                        {...props.restProps}
                    />
                    {props.label}
                </div>
                <ErrorMessage errors={props.errors} />
                {props.children}
            </>
        );
    }
);

CheckBox.propTypes = {
    inputClassName: PropTypes.string,
    className: PropTypes.string,
    boxName: PropTypes.string,
    label: PropTypes.string,
};
CheckBox.defaultProps = {
    inputClassName: "",
    className: "",
    boxName: "",
    label: "",
};

export { CheckBox };
