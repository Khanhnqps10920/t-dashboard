//import ant design
import { Button, DatePicker, DatePickerProps, Form, Input, Modal, Select } from "antd";
import { message, Upload, UploadFile } from "antd";
import { UploadChangeParam } from "antd/es/upload";

//import interface
import IModal, { IDate, IFileType, IInput, ITextBox, ISelectInput } from "./typesModal";

//import image
import exportIMG from '../../assets/export.png'
import closeIconImg from '../../assets/CloseIcon.jpg'
import vectorImg from '../../assets/Vector.png'
import pickerImg from '../../assets/Picker.jpg'

//import style
import './modal.scss'

interface IProps {
    modalProps: IModal,
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
};


const CustomModal = ({ modalProps, isOpen, setIsOpen } : IProps) => {

    const handleChange = (value: string | number ) =>{
        console.log(value);
    }

    //Select logic
    const renderSelect = (contentArray: ISelectInput[] | null) => {
        return contentArray?.map((element,index)=>{
            //Title need to be implemented
             return (
            <Form.Item className="Modal__labelForm" key={`select-${index}`}>
                <label>{element.title}</label>
                <Select 
                    defaultValue={element.options[0].value} 
                    options={element.options} 
                    onChange={(value)=>{handleChange(value)}}
                    suffixIcon = {<img src={vectorImg}/>}
                />
            </Form.Item>)
        });
    }

    //Date Logic
    const handleChangeDate: DatePickerProps['onChange'] = (date,dateString) =>{
        console.log(date,dateString);
    }
    //format date
    const dateFormat = 'DD/MM/YYYY';
    const renderDate = (contentArray: IDate[] | null) => {
        return contentArray?.map((element,index)=>{
            //Title need to be implemented
            return (
            <Form.Item className="Modal__labelForm" key={`date-${index}`}>
                <label>{element.title}</label>
                < br/>
                <DatePicker 
                style={{width: '100%'}}
                onChange={(date,dateString)=>{handleChangeDate(date,dateString)}} 
                format={dateFormat} 
                placeholder = {element.placeholder}
                suffixIcon={<img src={pickerImg}/>}
                />
            </Form.Item>)
        });
    }

    //File Logic
    const handleChangeFile = (info : UploadChangeParam<UploadFile<any>>) =>{
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    }

    const renderFile = (contentArray: IFileType[] | null) =>{
        return contentArray?.map((element,index)=>{
            return (
            <Form.Item className="Modal__labelForm" key={`file-${index}`}>
                <label>{element.title}</label>
                <Upload 
                    name="file"
                    type="drag"
                    accept={element.type}
                    multiple = {true}
                    action=""
                    onChange={(info)=>{handleChangeFile(info)}}
                >   
                    <div className="Modal__file">
                        <div className="Modal__file__img"><img src={exportIMG} alt="export image" /></div>
                        <div className="Modal__file__content">Drag image or browse to <span style={{color: "#FF69A5"}}>select file</span></div>
                    </div>
                </Upload>
            </Form.Item>)
        });
    }

    //Text Logic
    const { TextArea } = Input;
    const handleChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) =>{
        const {name, value} = event.target;
        console.log(name,value);
    }
    const renderText = (contentArray: ITextBox[] | null) =>{
        return contentArray?.map((element, index)=>{
            return (
            <Form.Item className="Modal__labelForm" key={`text-${index}`}>
                <label>{element.title}</label>
                <TextArea 
                placeholder={element.placeholder} 
                name={element.title} 
                onChange={(event)=>{handleChangeText(event)}}
                />
            </Form.Item>)
        });
    }

    //Normal Input Logic
    // const [indexInput, setIndexInput] = useState<number>(0);
    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = event.target;
        console.log(name ,value);
    }
    const renderInput = (contentArray: IInput[] | null) =>{
        return contentArray?.map((element,index)=>{
            // setIndexInput(indexInput + 1);
            return (
                <Form.Item className="Modal__labelForm" key={`input-${index}`}>
                <label>{element.title}</label>
                <Input 
                placeholder={element.placeholder} 
                name={element.title} 
                onChange={event=>{handleChangeInput(event)}}
                />
                </Form.Item>)
        });
    }


    return (
    <Modal
        open={isOpen}
        className="Modal"
        onOk={()=>{setIsOpen(false)}}
        onCancel={()=>{setIsOpen(false)}}
        footer={[
            <Button key={modalProps.buttonContent} className="Modal__button" onClick={()=>{setIsOpen(false)}}>{modalProps.buttonContent}</Button>
        ]} // Custom Button
        closeIcon = {<img style={{height: '1rem', width: '1rem'}} src= {closeIconImg}/>}
    >   
    <div className="Modal__title">{modalProps.mainTitle}</div>
    <div className="Modal__line"></div>
        <Form>
            {renderInput(modalProps.normalInput)}
            {renderSelect(modalProps.selectInput)}
            {renderDate(modalProps.dateInput)}
            {renderFile(modalProps.fileInput)}
            {renderInput(modalProps.additionalInput)}
            {renderText(modalProps.textInput)}
        </Form>
    </Modal>);
}

export default CustomModal; 