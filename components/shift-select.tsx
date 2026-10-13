import { useId } from "react";

type ShiftSelectProps = {
    value: number;
    onChange: (shift: number) => void;
};

const shifts = Array.from({ length: 25 }, (_, i) => i + 1);

export function ShiftSelect({ value, onChange }: ShiftSelectProps) {
    return (
        <div className="flex flex-col items-center gap-3 sm:flex-row">
            <label htmlFor={id} className="text-xl">
                Choose a cipher number to encode your text
            </label>

            <select
                id={id}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="rounded bg-emerald-600 px-3 py-2 font-semibold text-white"
                >
                {shifts.map(shift => (
                    <option key={shift} value={shift}>Rot {shift}</option>
                ))}
            </select>
        </div>
    );
}
