import { Button } from "antd";
import CustomModal from "."

import { useState } from "react";

import IModal from "./typesModal"

const modalProps : IModal = {
    mainTitle: 'Sample Modal',
    normalInput: [
        {
            name: 'valueSample',
            title: 'Input Title',
            placeholder: 'ko biet ghi gi'
        },
        {
            name: 'valueSample',
            title: 'Input Title',
            placeholder: 'ko biet ghi gi'
        },
    ],
    selectInput: [
        {
            name: 'valueSample',
            title: 'text',
            options: [{ value: 'Hung', label: 'Hung' }, { value: 'BK', label: 'BK' }, { value: 'SP', label: 'SP' }]
        },
        {
            name: 'valueSample',
            title: 'text',
            options: [{ value: 'IdolKDB', label: 'IdolKDB' }, { value: 'GOAT', label: 'GOAT' }, { value: 'LeBron', label: 'LeBron' }]
        },
    ],
    dateInput: null,
    fileInput: [
        {
            name: 'valueSample',
            title: 'Drag your file here',
            type: ['.png','.jpeg','.jpg','.docx']
        },
        {
            name: 'valueSample',
            title: 'Drag your file here',
            type: ['.png','.jpeg','.jpg','.docx']
        },
    ],
    additionalInput:[
        {
            name: 'valueSample',
            title: 'Additional Title',
            placeholder: 'ko biet ghi gi'
        },
        {
            name: 'valueSample',
            title: 'Additional Title',
            placeholder: 'ko biet ghi gi'
        },
    ],
    textInput: [
        {
            name: 'valueSample',
            title: 'Text Title',
            placeholder: 'ko biet ghi gi'
        },
        {
            name: 'valueSample',
            title: 'Text Title',
            placeholder: 'ko biet ghi gi'
        },
    ],
    buttonContent: 'Submit'
};


const testSample = () =>{
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [resultModal, setResultModal] = useState<any>(null);
    return <>
        <Button onClick={()=>{setIsOpen(true)}}>Open the Modal</Button>
        <CustomModal 
            modalProps={modalProps} 
            isOpen={isOpen} 
            setIsOpen={setIsOpen} 
            setResultModal={setResultModal}
            ></CustomModal>
    </>
}

export default testSample; 