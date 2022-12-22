import { AnyAction, createSlice, ThunkAction } from "@reduxjs/toolkit"
import { RootState } from "../../redux/store";

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

// thunk middleware
export const middleware = () : ThunkAction<void, RootState, unknown, AnyAction> =>{
    return (dispatch, getState) =>{
        //Intercept
        //Maybe load data from api before action
    }
};

export const { /*put reducers above*/ addData, deleteData } =  samplePageSlice.actions;
export const SamplePage = (state: RootState) => state.samplePageSlice;
export default samplePageSlice.reducer;
// remember to put the slice to the /redux/store.ts