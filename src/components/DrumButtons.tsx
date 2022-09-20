export function DrumButtons() {
    const buttons = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

    return (
        <div className="mx-auto h-40 w-48 grid grid-cols-3 gap-2">
            {buttons.map(item => (
                <div key={item} className="drumButton border-1 rounded-md border-black text-center bg-gray-500">
                    {item}
                </div>
            ))}
        </div>
    );
}