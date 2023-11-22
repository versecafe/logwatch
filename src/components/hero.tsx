import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <header className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-[37.5rem] pt-20 text-center pb-20">
        <div className="flex items-center justify-center space-x-3">
          <Image
            loading="lazy"
            src="/logo.svg"
            alt="Logspot"
            className="h-20 w-20"
            height={20}
            width={20}
          />
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-700 sm:text-5xl">
            logwatch
          </h1>
        </div>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Logwatch is an open source change log template made with Next, React,
          and Tailwindcss. Check out the code on{" "}
          <Link
            href={"https://github.com/versecafe/logwatch"}
            className="underline"
          >
            Github
          </Link>
          . A huge shout out to{" "}
          <Link href={"https://github.com/fayazara"} className="underline">
            Fayzara
          </Link>{" "}
          for making Logspot the Nuxt - Vue project this is a port of.
        </p>
      </div>
    </header>
  );
}
