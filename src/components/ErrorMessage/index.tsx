import React, { FC } from "react";

interface Props {
    errors?: any;
    className?: string;
}
const ErrorMessage: FC<Props> = (props) => {

    const ErrorElements = props.errors.map(() => {
        return (
            <div
                className={`text-red-500 text-left text-xs w-full mt-1 ${props.className}`}
            >
                {props.errors.join(", ")}
            </div>
        );
    });

    return (
        <React.Fragment>
            {ErrorElements}
        </React.Fragment>
    )
};


ErrorMessage.defaultProps = {
    className: "",
}


export { ErrorMessage };



