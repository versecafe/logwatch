import Hero from "@/components/hero";
import {allChangeLogs} from "contentlayer/generated";
import LogPost from "@/components/log-post"

export default function Home() {
  const logs = allChangeLogs.sort((b, a) => (a.release.localeCompare(b.release)))

  return (
    <main className="min-h-screen relative">
      <Hero/>
      <section
        className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {logs.map((log) => (
          <LogPost key={log.release} log={log}/>
        ))}
      </section>
    </main>
  )
}
