import { useAppDispatch, useAppSelector } from "../stores/hooks"
import { instruments, selectInstrument, setInstrument } from "../stores/InstrumentSlice";
import { selectLabel } from "../stores/labelSlice";
import { selectPower, setPower } from "../stores/PowerSlice";
import { CustomSwitch } from "./CustomSwitch"

export function DrumControls() {

    const dispatch = useAppDispatch();
    const label = useAppSelector(selectLabel);
    const power = useAppSelector(selectPower);
    const instrument = useAppSelector(selectInstrument);

    function instrumentSwitch(currentInstrument: instruments): boolean {
        return currentInstrument === 'piano';
    }

    return (
        <>
            <div className="flex flex-col mx-auto w-48">
                <div className="flex flex-col justify-center">
                    <CustomSwitch id="PowerSwitch" label="Power" initialState={power} onFlick={(power: boolean) => dispatch(setPower(power))} />
                    <div id="display" className="mt-2 w-52 h-12 bg-gray-400 text-center font-bold pt-2 text-lg">
                        {label}
                    </div>
                    <div id="slider" className="mt-2 mx-auto w-52">
                        <input type="range" min="1" max="100" defaultValue="40" className="slider" />
                    </div>
                    <CustomSwitch id="DrumPiano" label="Bank" initialState={instrumentSwitch(instrument)} onFlick={(power: boolean) => !power ? dispatch(setInstrument('drum')) : dispatch(setInstrument('piano'))} />
                </div>
            </div>
        </>
    )
}