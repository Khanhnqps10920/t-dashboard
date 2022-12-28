//import ant design
import { Button, DatePicker, DatePickerProps, Input, Modal, Select } from "antd";
import { message, Upload, UploadFile } from "antd";
import { UploadChangeParam } from "antd/es/upload";

//import interface
import IModal from "./typesModal";

//import image
import exportIMG from '../../assets/image/export.png'

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
    const renderSelect = () => {
        return modalProps.selectInput?.map(element=>{
            //Title need to be implemented
             return <Select 
                defaultValue={element.options[0].value} 
                options={element.options} 
                
                onChange={(value)=>{handleChange(value)}}
            />
        });
    }

    //Date Logic
    const handleChangeDate: DatePickerProps['onChange'] = (date,dateString) =>{
        console.log(date,dateString);
    }
    //format date
    const dateFormat = 'DD/MM/YYYY';
    const renderDate = () => {
        return modalProps.dateInput?.map(element=>{
            //Title need to be implemented
            return <DatePicker 
            onChange={(date,dateString)=>{handleChangeDate(date,dateString)}} 
            format={dateFormat} 
            placeholder = {element.placeholder}
            />
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

    const renderFile = () =>{
        return modalProps.fileInput?.map(element=>{
            return <Upload 
                name="file"
                type="drag"
                accept={element.type}
                multiple = {true}
                onChange={(info)=>{handleChangeFile(info)}}
            >
                <div className="file__img"><img src={exportIMG} alt="export image" /></div>
                <div className="file__content">Drag image or browse to <span style={{color: "#FF69A5"}}>select file</span></div>
            </Upload>
        });
    }

    //Text Logic
    const { TextArea } = Input;
    const handleChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) =>{
        const {name, value} = event.target;
        console.log(name,value);
    }
    const renderText = () =>{
        return modalProps.textInput?.map(element=>{
            return <TextArea 
            placeholder={element.placeholder} 
            name={element.title} 
            onChange={(event)=>{handleChangeText(event)}}
            />
        });
    }

    //Normal Input Logic
    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = event.target;
        console.log(name ,value);
    }
    const renderInput = () =>{
        return modalProps.normalInput?.map(element=>{
            return <Input 
            placeholder={element.placeholder} 
            name={element.title} 
            onChange={event=>{handleChangeInput(event)}}
            />
        });
    }


    return (
    <Modal
        open={isOpen}
        title={modalProps.mainTitle}
        onOk={()=>{setIsOpen(false)}}
        onCancel={()=>{setIsOpen(false)}}
        footer={[
            <Button key={modalProps.buttonContent} type="primary" onClick={()=>{setIsOpen(false)}}>{modalProps.buttonContent}</Button>
        ]} // Custom Button
    >
        {renderSelect()}
        {renderDate()}
        {renderFile()}
        {renderText()}
        {renderInput()}
    </Modal>);
}

export default CustomModal;