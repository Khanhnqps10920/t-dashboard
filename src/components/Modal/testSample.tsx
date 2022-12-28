import { Button } from "antd";
import CustomModal from "."

import { useState } from "react";

import IModal from "./typesModal"

const modalProps : IModal = {
    mainTitle: 'Sample Modal',
    selectInput: [
        {
            title: 'text',
            options: [{ value: 'Hung', label: 'Hung' }, { value: 'Hung', label: 'Hung' }, { value: 'Hung', label: 'Hung' }]
        },
        {
            title: 'text',
            options: [{ value: 'Hung', label: 'Hung' }, { value: 'Hung', label: 'Hung' }, { value: 'Hung', label: 'Hung' }]
        },
    ],
    dateInput: [
        {
            title: 'Birthday',
            placeholder: 'mm/dd/yy'
        },
        {
            title: 'Your Grandma Birthday :>',
            placeholder: 'mm/dd/yy'
        }
    ],
    fileInput: [
        {
            title: 'Drag your file here',
            type: '.png,.jpeg,.jpg,.docx'
        },
        {
            title: 'Drag your file here',
            type: '.png,.jpeg,.jpg,.docx'
        },
    ],
    textInput: [
        {
            title: 'Text Title',
            placeholder: 'ko biet ghi gi'
        },
        {
            title: 'Text Title',
            placeholder: 'ko biet ghi gi'
        },
    ],
    normalInput: [
        {
            title: 'Input Title',
            placeholder: 'ko biet ghi gi'
        },
        {
            title: 'Input Title',
            placeholder: 'ko biet ghi gi'
        },
    ],
    buttonContent: 'Submit'
};


const testSample = () =>{
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return <>
        <Button onClick={()=>{setIsOpen(true)}}>Open the Modal</Button>
        <CustomModal modalProps={modalProps} isOpen={isOpen} setIsOpen={setIsOpen}></CustomModal>
    </>
}

export default testSample;