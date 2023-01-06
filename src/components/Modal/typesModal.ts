// Normal Input
export interface IInput {
    name: string,
    title: string,
    placeholder: string,
};

// Select Box
export interface ISelectInput {
    name: string,
    title: string,
    options: IOptions[],
}

export interface IOptions {
    value: string | number,
    label: string
}

// Date
export interface IDate {
    name: string,
    title: string,
    placeholder: string,
};

// File
export interface IFileType {
    name: string,
    title: string,
    type: string[],
}

// Text Box
export interface ITextBox {
    name: string,
    title: string,
    placeholder: string,
};

// Final Modal
export default interface IModal {
    mainTitle: string | null,
    normalInput: Array<IInput> | null,
    selectInput: Array<ISelectInput> | null,
    dateInput: Array<IDate> | null,
    fileInput: Array<IFileType> | null,
    additionalInput: Array<IInput> | null,
    textInput: Array<ITextBox> | null,
    buttonContent: string | null,
};