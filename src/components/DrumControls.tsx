import { useAppDispatch, useAppSelector } from "../stores/hooks"
import { setInstrument } from "../stores/InstrumentSlice";
import { selectLabel } from "../stores/labelSlice";
import { setPower } from "../stores/PowerSlice";
import { CustomSwitch } from "./CustomSwitch"

export function DrumControls() {

    const dispatch = useAppDispatch();
    const label = useAppSelector(selectLabel);

    return (
        <>
            <div className="flex flex-col mx-auto w-48">
                <div className="flex flex-col justify-center">
                    <CustomSwitch id="PowerSwitch" label="Power" onFlick={(power: boolean) => dispatch(setPower(power))} />
                    <div id="messenger" className="mt-2 w-52 h-12 bg-gray-400 text-center font-bold pt-2 text-lg">
                        {label}
                    </div>
                    <div id="slider" className="mt-2 mx-auto w-52">
                        <input type="range" min="1" max="100" defaultValue="40" className="slider" />
                    </div>
                    <CustomSwitch id="DrumPiano" label="Bank" onFlick={(power: boolean) => !power ? dispatch(setInstrument('drum')) : dispatch(setInstrument('piano'))} />
                </div>
            </div>
        </>
    )
}