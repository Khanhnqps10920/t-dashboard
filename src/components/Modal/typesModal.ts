// Select Box
interface ISelectInput{
    title: string,
    options: IOptions[],
}

export interface IOptions{
    value: string | number,
    label: string
}

// Date
export interface IDate{
    title: string,
    placeholder: string,
};

// File
export interface IFileType {
    title: string,
    type: string,
}

// Text Box
export interface ITextBox {
    title: string,
    placeholder: string,
};

// Normal Input
export interface IInput{
    title: string,
    placeholder: string,
};

// Final Modal
export default interface IModal {
    mainTitle: string | null,
    selectInput: Array<ISelectInput> | null,
    dateInput: Array<IDate> | null,
    fileInput: Array<IFileType> | null ,
    textInput: Array<ITextBox> | null,
    normalInput: Array<IInput> | null,
    buttonContent: string | null,
};