import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../stores/hooks";
import { selectInstrument } from "../stores/InstrumentSlice";
import { setLabel } from "../stores/labelSlice";
import { selectPower } from "../stores/PowerSlice";

enum keys {
    Q = 'Q', W = 'W', E = 'E', A = 'A', S = 'S', D = 'D', Z = 'Z', X = 'X', C = 'C'
}

export function DrumButtons() {
    const power = useAppSelector(selectPower);
    const instrument = useAppSelector(selectInstrument);
    const dispatch = useAppDispatch();

    const displays = {
        drum: {
            Q: 'Heater 1',
            W: 'Heater 2',
            E: 'Heater 3',
            A: 'Heater 4',
            S: 'Clap',
            D: 'Open-HH',
            Z: "Kick-n'Hat",
            X: "Kick",
            C: "Closed-HH",
        }
    }

    function HandleClick(button: keys) {
        if (power && instrument === 'drum') {
            (document.getElementById(button.toString()) as HTMLAudioElement).play();
            dispatch(setLabel(displays[instrument][button.toString() as keys]))

            setTimeout(() => dispatch(setLabel('')), 400)
        }
    }

    function handleKeyUp(event: KeyboardEvent) {
        if ((Object as any).values(keys).includes(event.key.toUpperCase()))
            HandleClick(event.key.toUpperCase() as keys);
    }

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp)

        return () => {
            window.removeEventListener('keyup', handleKeyUp);
        }
    }, []);

    return (
        <div className="mx-auto h-40 w-48 grid grid-cols-3 gap-2">
            {Object.keys(keys).map(item => (
                <div key={item} id={item + "drum-pad"} onClick={() => HandleClick(item as keys)} className="drum-pad border-1 pt-3 rounded-md border-black text-center bg-gray-500">
                    {item}
                    <audio src={`/${instrument}/${item}.mp3`} id={item} className="clip" />
                </div>
            ))}
        </div>
    );
}