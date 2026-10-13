import { describe, expect, it } from "vitest";
import { normalizeShift, rot, shiftedAlphabet } from "@/lib/rot-cipher";

describe("rot", () => {
    it("shifts letters", () => {
        expect(rot("abc", 1)).toBe("bcd");
    });

    it("preserves case", () => {
       expect(rot("Hello", 13)).toBe("Uryyb");
    });

    it("wraps around the end of the alphabet", () => {
       expect(rot("xyz", 3)).toBe("abc");
       expect(rot("XYZ", 3)).toBe("ABC");
    });

    it("passes non-letters through unchanged", () => {
        expect(rot("Hello, World! 123", 13)).toBe("Uryyb, Jbeyq! 123");
    });

    it("returns the original text for shift 0 or 26", () => {
       expect(rot("Hello", 0)).toBe("Hello");
       expect(rot("Hello", 26)).toBe("Hello");
    });

    it("is reversible: ROT13 ran twice returns the input", () => {
       expect(rot(rot("Round Trip", 13), 13)).toBe("Round Trip");
    });

    it("decodes with a negative shift", () => {
       expect(rot(rot("Secret", 7), -7)).toBe("Secret");
    });

    it("handles an empty string", () => {
        expect(rot("", 5)).toBe("");
    });
});

describe("normalizeShift", () => {
    it("wraps values into 0 - 25", () => {
        expect(normalizeShift(27)).toBe(1);
        expect(normalizeShift(-1)).toBe(25);
        expect(normalizeShift(26)).toBe(0);
    });
});

describe("shiftedAlphabet", () => {
    it("rotates the alphabet", () => {
        expect(shiftedAlphabet(3)).toBe("DEFGHIJKLMNOPQRSTUVWXYZABC");
    });

    it("is unchanged at shift 0", () => {
        expect(shiftedAlphabet(0)).toBe("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
});
