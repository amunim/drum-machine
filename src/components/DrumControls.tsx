export function DrumControls() {
    let Power = true;

    function OnPowerSwitchClick()
    {
        Power = !Power;
    }

    return (
        <>
            <div className="flex flex-col mx-auto w-48">
                <div className="flex flex-col">
                    <div id="PowerSwitch" className="mx-auto">
                        <strong>Power</strong>
                        <div className="w-14 h-6 p-1 bg-black flex flex-row">
                            {!Power && <div className="bg-blue-600 w-[50%] hover:cursor-pointer" onClick={() => OnPowerSwitchClick()}>
                            </div>}
                            {Power && <div className="bg-blue-600 w-[50%] hover:cursor-pointer" onClick={() => OnPowerSwitchClick()}>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}