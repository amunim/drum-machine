import { CustomSwitch } from "./CustomSwitch"

export function DrumControls() {
    return (
        <>
            <div className="flex flex-col mx-auto w-48">
                <div className="flex flex-col justify-center">
                    <CustomSwitch id="PowerSwitch" label="Power" />
                    <div id="messenger" className="mt-2 ml-2 w-48 h-12 bg-gray-400">

                    </div>
                    <div id="slider" className="mt-2 mx-auto w-52">
                        <input type="range" min="1" max="100" defaultValue="40" className="slider" />
                    </div>
                    <CustomSwitch id="DrumPiano" label="Bank" />
                </div>
            </div>
        </>
    )
}