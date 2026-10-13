export const alphabet_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const alphabet_length = alphabet_letters.length;
const upper_a = 65;
const lower_a = 97;

export function normalizeShift(shift: number): number {
    return ((shift % alphabet_length) + alphabet_length) % alphabet_length;
}

export function rot(text: string, shift: number): string {
    const offset = normalizeShift(shift);

    return text.replace(/[a-z]/gi, (char) => {
       const base = char === char.toUpperCase() ? upper_a : lower_a;
       const index = char.charCodeAt(0) - base;
       return String.fromCharCode(((index + offset) % alphabet_length) + base);
    });
}

export function shiftedAlphabet(shift: number): string {
    const offset = normalizeShift(shift);
    return alphabet_letters.slice(offset) + alphabet_letters.slice(0, offset);
}
