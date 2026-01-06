import Link from "next/link";
import { works } from "@/data/works";
import { githubUrl } from "@/data/works";

export default function Home() {
  const sortedWorks = [...works].reverse();
  
  return (
      <main
        className="
          mx-auto
          w-full
          max-w-[393px]
          px-4
          py-6
          md:max-w-[768px] md:px-6 md:py-8
          lg:max-w-[900px] lg:py-10
        "
      >
      <div className="flex flex-col gap-1 items-center">
        <h1 className="text-2xl font-semibold">Works</h1>
        <p className="mt-1 text-sm text-[color:var(--color-text-meta)]">
          Aoba Create の制作実績
        </p>
      </div>
      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {sortedWorks.map((w) => (
          <div
            key={w.slug}
            className="
              mx-auto
              w-full
              max-w-[420px]
              flex
              flex-col
              gap-2
              rounded-2xl
              border
              p-5
              shadow-sm
            "
          >
            <Link
              href={`/works/${w.slug}`}
              className="
                inline-block
                text-base
                font-semibold
                leading-snug
              "
            >
              {w.title}
            </Link>
            <Link
              href={githubUrl(w.slug)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-blue-600 underline"
            >
              GitHub
            </Link>
          </div> 
        ))}
      </div>
    </main>
  );
}

