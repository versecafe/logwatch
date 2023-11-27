import Image from "next/image";
import Link from "next/link";

interface Props {
  authors: string[];
}

export default function Authors(props: Props) {
  return (
    <div className="flex -space-x-2 relative z-0 overflow-hidden mt-6">
      {props.authors.map((author, i) =>
        author != "" ? (
          <Link key={i} href={author}>
            <Image
              key={i}
              className="relative inline-block h-8 w-8 rounded-full ring-2 ring-white"
              style={{ zIndex: props.authors.length - i }}
              width={64}
              height={64}
              src={`${author}.png`}
              alt={author}
            />
          </Link>
        ) : null,
      )}
    </div>
  );
}
