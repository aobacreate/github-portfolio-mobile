import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { readmeRawUrl } from "@/data/works";

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const {slug} = await params;
  
  const readmeURL = readmeRawUrl(slug);

  const res = await fetch(readmeURL, {
    cache: "no-store"
  });

  const markdown = res.ok
    ? await res.text()
    : `# READMEの取得に失敗しました\n\nStatus: ${res.status}\nURL: ${readmeURL}`;

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
      <div className="mb-6">
        <Link href="/" className="underline text-sm">
          ← 一覧へ戻る
        </Link>
      </div>

      <div
          className="
            prose
            max-w-none
            text-[10px]
            leading-[1.6]
            md:text-[14px]
          "
        >
        <ReactMarkdown
          components={{
            a: ({ node, ...props }) => (
              <a {...props} target="_blank" rel="noopener noreferrer" />
            ),
          }}
        >
          {markdown}
        </ReactMarkdown>
      </div>

    </main>
  );
}
