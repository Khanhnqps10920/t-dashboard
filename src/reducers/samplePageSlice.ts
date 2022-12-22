import { AnyAction, createSlice, ThunkAction } from "@reduxjs/toolkit"
import { RootState } from "../redux/store";

export interface IValueSample{
    id: string,
    name: string,
    title: string,   
};// just sample

export interface IinitialState{
    data: IValueSample[]
};

const initialState: IinitialState = { // need to be exactly the name "initialState"
    data: []
};

const samplePageSlice = createSlice({
    name:'samplePage',
    initialState,
    reducers:{
        //some actions of the redux
        loadInitialData:(state: IinitialState, action: {type: string, payload: IValueSample[]})=>{
            state.data = [...action.payload];
        },
        addData:(state: IinitialState, action: {type: string, payload: IValueSample})=>{
            state.data.push(action.payload);
        },
        deleteData:(state: IinitialState, action: {type:string, payload: IValueSample})=>{
            const index = state.data.findIndex(element=>{
                return element.id === action.payload.id;
            });
            if(index > -1){
                state.data.splice(index,1);
            }
        },
        // some actions of the redux
    }
});

// thunk middleware // dont need to be exactly the name function
export const middleware = () : ThunkAction<void, RootState, unknown, AnyAction> =>{
    return async (dispatch, getState) => {
        //Intercept
        //Maybe load data from api before action
        const reponse = await fetch('https://63a493b02a73744b007bae4c.mockapi.io/thunk'); // This is my mockAPI only for sample
        if(!reponse.ok){
            const errorMessage = `An error has occured: ${reponse.status}`;
            throw new Error(errorMessage);
        }
        const products: IValueSample[] = await reponse.json();
        dispatch(loadInitialData(products)); // load the data from the API first
        //At this time the app doesn't have axios package so I use Fetch :vvvvvv
    }
};

export const { /*put reducers above*/ loadInitialData ,addData, deleteData } =  samplePageSlice.actions;
export const SamplePage = (state: RootState) => state.samplePageSlice;
export default samplePageSlice.reducer;
// remember to put the slice to the /redux/store.ts