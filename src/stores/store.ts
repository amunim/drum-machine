import { configureStore } from "@reduxjs/toolkit";
import InstrumentSlice from "./InstrumentSlice";
import labelSlice from "./labelSlice";
import PowerSlice from "./PowerSlice";
import volumeSlice from "./volumeSlice";

export const store = configureStore({
    reducer: {
        power: PowerSlice,
        instrument: InstrumentSlice,
        volume: volumeSlice,
        label: labelSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;