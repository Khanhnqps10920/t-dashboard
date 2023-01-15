//import ant design
import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
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
import { useForm } from "antd/es/form/Form";

interface IProps {
    modalProps: IModal,
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setResultModal: React.Dispatch<any>,
};


const CustomModal = ({ modalProps, isOpen, setIsOpen, setResultModal }: IProps) => {

    const [submitData, setSubmitData] = useState<any>(null);

    const handleChange = (name: string, value: string | number) => setSubmitData({...submitData, [name]: value });

    //Select logic
    const renderSelect = (contentArray: ISelectInput[] | null) => {
        return contentArray?.map((element, index) => {
            return (
                <Form.Item className="Modal__labelForm" key={`select-${index}`}>
                    <label>{element.title}</label>
                    <Select
                        defaultValue={element.options[0].value}
                        options={element.options}
                        onChange={(value) => { handleChange(element.name, value) }}
                        suffixIcon={<img src={vectorImg} />}
                    />
                </Form.Item>)
        });
    }

    //Date Logic
    const handleChangeDate = (date:any | null, name: string, dateString: string) => setSubmitData({...submitData, [name]:dateString});

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
                        onChange={(date, dateString) => { handleChangeDate(date, element.name, dateString) }}
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
    };
    
    const onChange = (name: string, info: UploadChangeParam<UploadFile<any>>) => setSubmitData({...submitData, [name]: info.fileList});
    const renderFile = (contentArray: IFileType[] | null) => {
        return contentArray?.map((element, index) => {
            return (
                <Form.Item className="Modal__labelForm" key={`file-${index}`} >
                    <label>{element.title}</label>
                    <Dragger
                        name={element.title}
                        {...fileProps}
                        onChange={(info)=>{onChange(element.name,info)}}
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
    const handleChangeText = (name: string, event: React.ChangeEvent<HTMLTextAreaElement>) => setSubmitData({...submitData, [name]: event.target.value});
    const renderText = (contentArray: ITextBox[] | null) => {
        return contentArray?.map((element, index) => {
            return (
                <Form.Item className="Modal__labelForm" key={`text-${index}`}>
                    <label>{element.title}</label>
                    <TextArea
                        name={element.title}
                        placeholder={element.placeholder}
                        onChange={(event) => { handleChangeText(element.name, event) }}
                    />
                </Form.Item>)
        });
    }

    //Normal Input Logic
    const handleChangeInput = (name:string, event: React.ChangeEvent<HTMLInputElement>) => setSubmitData({...submitData, [name]: event.target.value});
    const renderInput = (contentArray: IInput[] | null) => {
        return contentArray?.map((element, index) => {
            return (
                <Form.Item className="Modal__labelForm" key={`input-${index}`} >
                    <label>{element.title}</label>
                    <Input
                        placeholder={element.placeholder}
                        name={element.title}
                        onChange={event => { handleChangeInput(element.name, event) }}
                    />
                </Form.Item>)
        });
    }

    const onFinish = () => {
        setResultModal(submitData);
        setSubmitData(null);
    }

    return (
        <Modal
            open={isOpen}
            className="Modal"
            onCancel={() => { setIsOpen(false)}}
            footer={null}
            closeIcon={<img style={{ height: '1rem', width: '1rem' }} src={closeIconImg} />}
        >
            <div className="Modal__title">{modalProps.mainTitle}</div>
            <div className="Modal__line"></div>
            <Form onFinish={onFinish} initialValues={undefined}>
                {renderInput(modalProps.normalInput)}
                {renderSelect(modalProps.selectInput)}
                {renderDate(modalProps.dateInput)}
                {renderFile(modalProps.fileInput)}
                {renderInput(modalProps.additionalInput)}
                {renderText(modalProps.textInput)}
                <div style={{ display: "flex", position: 'relative', height: '3rem' }}>
                    <Button key={modalProps.buttonContent} htmlType='submit' className="Modal__button" onClick={() => { setIsOpen(false);}}>{modalProps.buttonContent}</Button>
                </div>
            </Form>
        </Modal >);
}

export default CustomModal; 