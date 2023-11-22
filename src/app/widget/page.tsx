import { allChangeLogs } from "contentlayer/generated";
import LogPost from "@/components/log-post";

export default function Widget() {
  const logs = allChangeLogs.sort((b, a) => a.release.localeCompare(b.release));
  return (
    <main className="min-h-screen bg-white">
      <header className="py-4 px-2.5 sticky top-0 z-50 bg-white bg-opacity-50 backdrop-blur border-b border-slate-100">
        <h1 className="text-gray-500 flex items-center text-sm">
          <span className="h-3 w-3 mr-2 rounded-full bg-primary"></span>
          <span className="font-semibold"> Latest changes </span>
        </h1>
      </header>
      <section className="min-h-[calc(100vh-102px)] pt-4">
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 overflow-hidden">
          {logs.map((log) => (
            <LogPost key={log.release} log={log} />
          ))}
        </div>
      </section>
      <footer className="px-4 py-3 flex items-center justify-between sticky bottom-0 z-50 bg-white bg-opacity-50 backdrop-blur-xl text-xs border-t border-slate-100">
        <a
          className="text-gray-500"
          href="https://github.com/versecafe/logwatch"
          target="_blank"
        >
          Powered by logwatch
        </a>
        <a
          className="text-primary"
          href="https://github.com/versecafe/logwatch"
          target="_blank"
        >
          See all updates
        </a>
      </footer>
    </main>
  );
}
