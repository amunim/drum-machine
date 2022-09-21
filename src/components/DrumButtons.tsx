import { useEffect } from "react";
import { useAppSelector } from "../stores/hooks";
import { selectInstrument } from "../stores/InstrumentSlice";
import { selectPower } from "../stores/PowerSlice";

export function DrumButtons() {
    const buttons = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

    const power = useAppSelector(selectPower);
    const instrument = useAppSelector(selectInstrument);

    function HandleClick(button: string) {
        if (power && instrument === 'drum')
        {
            alert(button);
        }
    }

    function handleKeyUp(event: KeyboardEvent) {
        if (buttons.includes(event.key.toUpperCase()))
            HandleClick(event.key.toUpperCase());
    }

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp)

        return () => {
            window.removeEventListener('keyup', handleKeyUp);
        }
    }, []);

    return (
        <div className="mx-auto h-40 w-48 grid grid-cols-3 gap-2">
            {buttons.map(item => (
                <div key={item} onClick={() => HandleClick(item)} className="drumButton border-1 pt-3 rounded-md border-black text-center bg-gray-500">
                    {item}
                </div>
            ))}
        </div>
    );
}