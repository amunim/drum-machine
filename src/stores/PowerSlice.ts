import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface PowerState {
    value: boolean
}

const initialState: PowerState = {
    value: true,
}

const powerSlice = createSlice({
    name: 'power',
    initialState,
    reducers: {
        setPower(state, action: PayloadAction<boolean>) {
            state.value = action.payload;
        }
    }
})

export const { setPower } = powerSlice.actions;

export const selectPower = (state: RootState) => state.power.value;

export default powerSlice.reducer;