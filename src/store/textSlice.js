import { createSlice } from '@reduxjs/toolkit'


/**
 * Create a slicer function using redux createslice method
 * 
 */
const textSlice = createSlice({

    // set name
    name:"text",

    // Set default state or initial state as null
    initialState:{content:''},

    // Perform actionn based on state update
    reducers:{
        
        // Action to update text
        updateText: (state,action)=>{

            // update content from the payload value
            state.content = action.payload

        }


    }


}
)

export const {updateText} = textSlice.actions;
export default textSlice.reducer;