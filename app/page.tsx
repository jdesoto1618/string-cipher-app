import { RotCipher } from "@/components/rot-cipher";

export default function Homepage() {
  return (
    <main>
      <header className="bg-linear-to-r from-indigo-500 to-emerald-500 p-6">
        <h1 className="text-4xl font-bold">ROT Cipher</h1>
      </header>

      <RotCipher />
    </main>
  );
}
