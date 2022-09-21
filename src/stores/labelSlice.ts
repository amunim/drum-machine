import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface LabelState {
    value: string
}

const initialState: LabelState = {
    value: ''
};

const labelSlice = createSlice({
    name: 'label',
    initialState,
    reducers: {
        setLabel(state, action: PayloadAction<string>) {
            state.value = action.payload;
        }
    }
})

export const { setLabel } = labelSlice.actions;
export const selectLabel = (state: RootState) => state.label.value;
export default labelSlice.reducer