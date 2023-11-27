import { allChangeLogs, ChangeLog } from "contentlayer/generated";
import Badge from "@/components/badge";
import { MDX } from "@/components/content/mdx";
import Authors from "@/components/author";

export default function LogPost({ log }: { log: ChangeLog }) {
  return (
    <article className="md:flex">
      <h2 className="content-date h-full mt-px">
        <a>{log.date}</a>
      </h2>
      <div className="content-block pb-20">
        <div className="feed-border"></div>
        <div className="feed-dot"></div>
        <Badge
          label={"v " + log.release}
          className={"absolute -top-6 right-0 md:static mb-4"}
        />

        <h1 className="text-xl sm:text-3xl font-bold mb-4">{log.title}</h1>
        <MDX code={log.body.code} className="px-5 pt-4 sm:px-10" />
        <Authors authors={log.authors ?? [""]} />
      </div>
    </article>
  );
}
