import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface VolumeState {
    value: number;
}

const initialState: VolumeState = {
    value: 40
};

const volumeSlice = createSlice({
    name:'volume',
    initialState,
    reducers: {
        setVolume(state, action: PayloadAction<number>) {
            state.value = action.payload;
        }
    }
});

export const {setVolume} = volumeSlice.actions;
export const selectVolume = (state: RootState) => state.volume;
export default volumeSlice.reducer;