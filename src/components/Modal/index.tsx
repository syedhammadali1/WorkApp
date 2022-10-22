import { Modal } from 'antd';
import React, { FC, useState } from 'react'
import { forwardRef, useImperativeHandle } from 'react';

interface Props {
    children?: any,
    ref?: any;
    modalBodyStyle?: any;
    fullModalStyle?: any;
    width?: number;
    restProps?: any;

}

const MyModal: FC<Props> = forwardRef((props, ref) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    useImperativeHandle(ref, () => ({
        showModal() {
            setIsModalOpen(true);
        },
    }));
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    }


    return (
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={props.width} style={props.fullModalStyle} bodyStyle={props.modalBodyStyle} centered {...props.restProps}>
            {props.children}
        </Modal>
    );
});

export default MyModal



