import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import { User } from "../../../utilities/model";

const initialState = {
    users: [],
    loading: false,
    error: false,
};

export const createUser = createAsyncThunk("createUser", async (_inputData: User = new User()) => {
    
 
  console.log('user', _inputData);

  alert('User registered succesfully');
});

const registerUserSlice = createSlice({
  name: "registerUserSlice",
  initialState,
  
  reducers: {}, 
  
  extraReducers: (builder: { addCase: (arg0: any, arg1: { (state: { loading: boolean; dataChanged: boolean; }, action: any): void; (state: { loading: boolean; dataChanged: boolean; }, action: any): void; (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; }) => void; }) => {
 
    builder.addCase(createUser.pending, (state: { loading: boolean; dataChanged: boolean; }, action: any) => {
      
      state.loading = true;
      state.dataChanged = false;
    });
    builder.addCase(createUser.fulfilled, (state: { loading: boolean; dataChanged: boolean; }, action: any) => {
      
      state.loading = false; 
      state.dataChanged = true;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      
      state.error = true;
      state.dataChanged = false;
    });
 
  },
});

export const { } =
registerUserSlice.actions;

export default registerUserSlice.reducer;
