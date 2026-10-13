import { useId } from 'react';

type TextPanelProps = {
    text: string;
    onTextChange: (text: string) => void;
    ciphertext: string;
};

export function TextPanel({ text, onTextChange, ciphertext }: TextPanelProps) {
    const inputId = useId();

    return (
        <div className="grid gap-8 rounded-lg border-2 border-emerald-500 bg-white p-6 shadow-md sm:p-10">
            <div className="flex flex-col gap-2">
                <label htmlFor={inputId} className="text-2xl font-semibold text-emerald-700">
                    Plaintext
                </label>
                <textarea
                    id={inputId}
                    value={text}
                    onChange={(e) => onTextChange(e.target.value)}
                    rows={3}
                    placeholder="Type something..."
                    className="rounded border-b-2 border-neutral-800 bg-neutral-50 p-3 text-xl outline-none focus:bg-white"
                />
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold text-emerald-700">Ciphertext</h2>
                <output
                    aria-live="polite"
                    className="block min-h-16 whitespace-pre-wrap break-words p-3 text-xl"
                >
                    {ciphertext}
                </output>
            </div>
        </div>
    );
}
