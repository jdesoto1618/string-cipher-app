import { RotCipher } from "@/components/rot-cipher";

export default function Homepage() {
  return (
    <main>
      <header className="p-6">
        <h1 className="text-4xl font-bold">ROT Cipher</h1>
      </header>

      <RotCipher />
    </main>
  );
}
