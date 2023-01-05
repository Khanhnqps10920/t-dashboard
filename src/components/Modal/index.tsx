//import ant design
import { Button, DatePicker, DatePickerProps, Form, Input, Modal, Select } from "antd";
import { message, Upload, UploadFile } from "antd";
import { UploadChangeParam, UploadProps } from "antd/es/upload";

//import interface
import IModal, { IDate, IFileType, IInput, ITextBox, ISelectInput } from "./typesModal";

//import image
import exportIMG from '../../assets/export.png'
import closeIconImg from '../../assets/CloseIcon.jpg'
import vectorImg from '../../assets/Vector.png'
import pickerImg from '../../assets/Picker.jpg'

//import style
import './modal.scss'
import { useState } from "react";

interface IProps {
    modalProps: IModal,
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
};


const CustomModal = ({ modalProps, isOpen, setIsOpen }: IProps) => {

    const [submitData, setSubmitData] = useState<any>(null);

    const handleChange = (name: string, value: string | number) => {
        console.log(value);
        setSubmitData({ ...submitData, [name]: value });
        console.log(submitData);
    }

    //Select logic
    const renderSelect = (contentArray: ISelectInput[] | null) => {
        return contentArray?.map((element, index) => {
            //Title need to be implemented
            return (
                <Form.Item className="Modal__labelForm" key={`select-${index}`}>
                    <label>{element.title}</label>
                    <Select
                        defaultValue={element.options[0].value}
                        options={element.options}
                        onChange={(value) => { handleChange(element.title, value) }}
                        suffixIcon={<img src={vectorImg} />}
                    />
                </Form.Item>)
        });
    }

    //Date Logic
    const handleChangeDate: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    }
    //format date
    const dateFormat = 'DD/MM/YYYY';
    const renderDate = (contentArray: IDate[] | null) => {
        return contentArray?.map((element, index) => {
            //Title need to be implemented
            return (
                <Form.Item className="Modal__labelForm" key={`date-${index}`}>
                    <label>{element.title}</label>
                    < br />
                    <DatePicker
                        style={{ width: '100%' }}
                        onChange={(date, dateString) => { handleChangeDate(date, dateString) }}
                        format={dateFormat}
                        name={element.title}
                        placeholder={element.placeholder}
                        suffixIcon={<img src={pickerImg} />}
                    />
                </Form.Item>)
        });
    }

    //File Logic
    const { Dragger } = Upload;
    const dummyRequest = ({ onSuccess }: any) => {
        setTimeout(() => {
            onSuccess('done');
        }, 0);
    }

    const fileProps: UploadProps = {
        name: 'file',
        multiple: true,
        customRequest: dummyRequest,
        onChange(info: UploadChangeParam<UploadFile<any>>) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(event: React.DragEvent<HTMLDivElement>) {
            console.log('Dropped files', event.dataTransfer.files);
        },
    };

    const renderFile = (contentArray: IFileType[] | null) => {
        return contentArray?.map((element, index) => {
            return (
                <Form.Item className="Modal__labelForm" key={`file-${index}`} >
                    <label>{element.title}</label>
                    <Dragger
                        name={element.title}
                        {...fileProps}
                        beforeUpload={(file) => {
                            const name = file.name;
                            let checkExist = false;
                            for (const type of element.type) {
                                if (name.includes(type)) {
                                    checkExist = name.includes(type);
                                    break;
                                }
                            }
                            if (!checkExist) {
                                message.error(`${name} is not an accepted type of file`);
                            }
                            return checkExist || Upload.LIST_IGNORE;
                        }}
                    >
                        <div className="Modal__file">
                            <div className="Modal__file__img"><img src={exportIMG} alt="export image" /></div>
                            <div className="Modal__file__content">Drag image or browse to <span style={{ color: "#FF69A5" }}>select file</span></div>
                        </div>
                    </Dragger>
                </Form.Item>)
        });
    }

    //Text Logic
    const { TextArea } = Input;
    const handleChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        console.log(name, value);
    }
    const renderText = (contentArray: ITextBox[] | null) => {
        return contentArray?.map((element, index) => {
            return (
                <Form.Item className="Modal__labelForm" key={`text-${index}`}>
                    <label>{element.title}</label>
                    <TextArea
                        name={element.title}
                        placeholder={element.placeholder}
                        onChange={(event) => { handleChangeText(event) }}
                    />
                </Form.Item>)
        });
    }

    //Normal Input Logic
    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setSubmitData({ ...submitData, [name]: value });
        console.log(submitData);
    }
    const renderInput = (contentArray: IInput[] | null) => {
        return contentArray?.map((element, index) => {
            return (
                <Form.Item className="Modal__labelForm" key={`input-${index}`} >
                    <label>{element.title}</label>
                    <Input
                        placeholder={element.placeholder}
                        name={element.title}
                        onChange={event => { handleChangeInput(event) }}
                    />
                </Form.Item>)
        });
    }

    const onFinish = (values: any) => {
        console.log({ ...values });

    }

    const onSubmitCapture = (event: React.FormEvent<HTMLFormElement>) => {
        console.log(event.currentTarget);
    }

    return (
        <Modal
            open={isOpen}
            className="Modal"
            onOk={() => { setIsOpen(false) }}
            onCancel={() => { setIsOpen(false) }}
            footer={null}
            closeIcon={<img style={{ height: '1rem', width: '1rem' }} src={closeIconImg} />}
        >
            <div className="Modal__title">{modalProps.mainTitle}</div>
            <div className="Modal__line"></div>
            <Form onFinish={(values) => onFinish(values)} onSubmitCapture={(event) => onSubmitCapture(event)}>
                {renderInput(modalProps.normalInput)}
                {renderSelect(modalProps.selectInput)}
                {renderDate(modalProps.dateInput)}
                {renderFile(modalProps.fileInput)}
                {renderInput(modalProps.additionalInput)}
                {renderText(modalProps.textInput)}
                <div style={{ display: "flex", position: 'relative', height: '3rem' }}>
                    <Button key={modalProps.buttonContent} htmlType='submit' className="Modal__button" onClick={() => { setIsOpen(false); }}>{modalProps.buttonContent}</Button>
                </div>
            </Form>
        </Modal >);
}

export default CustomModal; 