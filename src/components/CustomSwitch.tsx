import { useState } from "react"

export function CustomSwitch({id, label}: {id: string, label: string}) {

    const [switchFlag, setSwitch] = useState(false);

    function OnPowerSwitchClick() {
        setSwitch(!switchFlag);
    }

    return (
        <>
            <div id={id} className="mx-auto">
                <strong>{label}</strong>
                <div className="w-14 h-6 p-1 bg-black flex flex-row">
                    <div className={`${!switchFlag ? 'bg-blue-600' : 'bg-black'} w-[50%] hover:cursor-pointer`} onClick={() => OnPowerSwitchClick()}>
                    </div>
                    <div className={`${switchFlag ? 'bg-blue-600' : 'bg-black'} w-[50%] hover:cursor-pointer`} onClick={() => OnPowerSwitchClick()}>
                    </div>
                </div>
            </div>
        </>
    )
}