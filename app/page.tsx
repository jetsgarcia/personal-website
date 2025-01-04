export default function Home() {
  return (
    <main>
      <div className="relative">
        <div className="h-[calc(100dvh-120px)] flex items-center pl-24 bg-gradient-to-br from-blue-600 to-cyan-400">
          <div className="grid gap-4">
            <h1 className="text-5xl leading-tight">
              Delivering <b>Efficient Web Solutions</b>
              <br />
              for <b>Real-world Problems</b>
            </h1>
            <p>
              Hey there! I&apos;m Jetter, a full-stack web developer with a deep
              passion for technology and innovation
            </p>
          </div>
        </div>
        <a
          href="#"
          className="absolute bottom-0 right-0 py-8 px-40 bg-black rounded-tl-lg"
        >
          Explore
        </a>
      </div>
    </main>
  );
}
