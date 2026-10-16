"use client";

import { useState } from "react";
import { alphabet_letters, rot, shiftedAlphabet } from "@/lib/rot-cipher";
import { AlphabetRow } from "./alphabet-row";
import { ShiftSelect } from "./shift-select";
import { TextPanel } from "./text-panel";

const defaultShift = 13;

export function RotCipher() {
    const [text, setText] = useState("");
    const [shift, setShift] = useState(defaultShift);

    const ciphertext = rot(text, shift);

    return (
        <div className="rot-cipher-wrapper flex flex-col gap-10 mt-10">
            <section className="flex flex-col gap-8 alphabet-rows-wrapper">
                <AlphabetRow title="Standard Alphabet" letters={alphabet_letters} />
                <AlphabetRow title={`Rot ${shift} Cipher Alphabet`} letters={shiftedAlphabet(shift)} accent />
            </section>

            <ShiftSelect value={shift} onChange={setShift} />

            <TextPanel text={text} onTextChange={setText} ciphertext={ciphertext} />
        </div>
    );
}
