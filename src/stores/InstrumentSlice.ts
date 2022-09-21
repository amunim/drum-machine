import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export type instruments = 'drum' | 'piano';

interface InstrumentState {
    value: instruments,
}

const initialState: InstrumentState = {
    value: 'drum'
};

const instrumentSlice = createSlice({
    name: 'instrument',
    initialState,
    reducers: {
        setInstrument(state, action: PayloadAction<instruments>) {
            state.value = action.payload;
        }
    }
});

export const { setInstrument } = instrumentSlice.actions;
export const selectInstrument = (state: RootState) => state.instrument.value;
export default instrumentSlice.reducer;