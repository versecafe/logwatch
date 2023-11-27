import Hero from "@/components/hero";
import { allChangeLogs } from "contentlayer/generated";
import LogPost from "@/components/log-post";

export default function Home() {
  const logs = allChangeLogs.sort((a, b) => {
    const a_version = a.release.split(".").map(Number);
    const b_version = b.release.split(".").map(Number);
    const max_length = Math.max(a_version.length, b_version.length);
    for (let i = 0; i < max_length; i++) {
      const a_part = a_version[i] || 0;
      const b_part = b_version[i] || 0;
      if (a_part < b_part) {
        return 1;
      } else if (a_part > b_part) {
        return -1;
      }
    }
    return 0;
  });

  return (
    <main className="min-h-screen relative">
      <Hero />
      <section className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 overflow-hidden">
        {logs.map((log) => (
          <LogPost key={log.release} log={log} />
        ))}
      </section>
    </main>
  );
}
