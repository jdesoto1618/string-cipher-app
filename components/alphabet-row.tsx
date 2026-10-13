type AlphabetRowProps = {
    title: string;
    letters: string;
    accent?: boolean;
};

export function AlphabetRow({ title, letters, accent = false }: AlphabetRowProps) {
    return (
        <div className="text-center">
            <h2 className="text-2xl font-semibold">{title}</h2>

            <ul
                className="mt-4 flex flex-wrap justify-center gap-3"
                aria-label={title}
            >
                {letters.split("").map((letter, i) => (
                    <li
                        className={`w-7 text-xl ${accent ? "font-semibold text-emerald-700" : ""}`}
                        key={i}
                    >
                        {letter}
                    </li>
                ))}
            </ul>
        </div>
    )
}
