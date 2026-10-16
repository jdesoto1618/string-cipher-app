import { useId } from 'react';

type TextPanelProps = {
    text: string;
    onTextChange: (text: string) => void;
    ciphertext: string;
};

export function TextPanel({ text, onTextChange, ciphertext }: TextPanelProps) {
    const inputId = useId();
    const isInputEmpty = ciphertext.trim() === "";

    return (
        <div className="grid gap-8 rounded-lg border-2 border-emerald-500 bg-white p-4 shadow-md sm:p-8">
            <div className="flex flex-col gap-2">
                <label htmlFor={inputId} className="text-2xl font-semibold text-gray-800">
                    Plaintext
                </label>
                <textarea
                    id={inputId}
                    value={text}
                    onChange={(e) => onTextChange(e.target.value)}
                    rows={3}
                    placeholder="Type plaintext here"
                    className="rounded border-b-2 border-neutral-800 bg-neutral-50 p-3 text-xl outline-none focus:bg-white placeholder:text-gray-500 text-emerald-700"
                />
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold text-gray-800">Encoded Ciphertext</h2>
                <p aria-live="polite" className={`rounded border-neutral-800 bg-neutral-100 ${!isInputEmpty ? "text-emerald-700" : "text-gray-500"} p-3 text-xl`}>
                    {isInputEmpty ? "Ciphertext will show here" : ciphertext}
                </p>
            </div>
        </div>
    );
}
