import { Button } from "antd";
import CustomModal from "."

import { useState } from "react";

import IModal from "./typesModal"

const modalProps : IModal = {
    mainTitle: 'Sample Modal',
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
    selectInput: [
        {
            title: 'text',
            options: [{ value: 'Hung', label: 'Hung' }, { value: 'BK', label: 'BK' }, { value: 'SP', label: 'SP' }]
        },
        {
            title: 'text',
            options: [{ value: 'IdolKDB', label: 'IdolKDB' }, { value: 'GOAT', label: 'GOAT' }, { value: 'LeBron', label: 'LeBron' }]
        },
    ],
    dateInput: null,
    fileInput: [
        {
            title: 'Drag your file here',
            type: ['.png','.jpeg','.jpg','.docx']
        },
        {
            title: 'Drag your file here',
            type: ['.png','.jpeg','.jpg','.docx']
        },
    ],
    additionalInput:[
        {
            title: 'Additional Title',
            placeholder: 'ko biet ghi gi'
        },
        {
            title: 'Additional Title',
            placeholder: 'ko biet ghi gi'
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