import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../stores/hooks";
import { selectInstrument } from "../stores/InstrumentSlice";
import { setLabel } from "../stores/labelSlice";
import { selectPower } from "../stores/PowerSlice";
import { selectVolume } from "../stores/volumeSlice";

enum keys {
    Q = 'Q', W = 'W', E = 'E', A = 'A', S = 'S', D = 'D', Z = 'Z', X = 'X', C = 'C'
}

export function DrumButtons() {
    const power = useAppSelector(selectPower);
    const instrument = useAppSelector(selectInstrument);
    const volume = useAppSelector(selectVolume);
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
        },
        piano: {
            Q: 'Chord 1',
            W: 'Chord 2',
            E: 'Chord 3',
            A: 'Shaker',
            S: 'Open-HH',
            D: 'Clap',
            Z: "Punchy Kick",
            X: "Side Kick",
            C: "Snare",
        },
    }

    function HandleClick(button: keys) {
        if (!power) return;

        const audioELem = (document.getElementById(button.toString().toUpperCase()) as HTMLAudioElement);
        audioELem.volume = volume / 100;
        audioELem.play();
        console.log(displays[instrument]);
        dispatch(setLabel(displays[instrument][button.toString().toUpperCase() as keys]))

        setTimeout(() => dispatch(setLabel('')), 400)
    }

    function handleKeyUp(event: KeyboardEvent) {
        if (!(Object as any).values(keys).includes(event.key.toUpperCase())) return;
        HandleClick(event.key.toUpperCase() as keys);
        document.getElementById(event.key.toUpperCase() + "drum-pad")?.classList.remove('drum-pad-active')

    }

    function handleKeyDown(event: KeyboardEvent) {
        if ((Object as any).values(keys).includes(event.key.toUpperCase())) {
            document.getElementById(event.key.toUpperCase() + "drum-pad")?.classList.add('drum-pad-active');
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp)

        return () => {
            window.removeEventListener('keyup', handleKeyUp);
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, []);

    return (
        <div className="mx-auto h-40 w-48 grid grid-cols-3 gap-2">
            {Object.keys(keys).map(item => (
                <div key={item} id={item + "drum-pad"} onClick={() => HandleClick(item as keys)} className="drum-pad border-1 pt-3 rounded-md border-black text-center bg-gray-500">
                    {item}
                    <audio src={`${process.env.PUBLIC_URL}/${instrument}/${item}.mp3`} id={item} className="clip" />
                </div>
            ))}
        </div>
    );
}