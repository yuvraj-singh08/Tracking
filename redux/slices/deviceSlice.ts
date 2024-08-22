import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import device from "../initialstates/device";

const deviceSlice = createSlice({
    name: "device",
    initialState: device,
    reducers: {
        setDeviceInfo: (state, action) => {
            state = action.payload;
        },
    },
})

export default deviceSlice.reducer;
