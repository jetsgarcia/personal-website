export default function HeroSection() {
  return (
    <div className="relative">
      <div className="grid place-items-center text-center h-[calc(100dvh-40px)] bg-gradient-to-br from-blue-600 to-cyan-400">
        <div className="grid gap-2 max-w-[120rem] m-auto px-14 2xl:px-56">
          <h1 className="text-4xl 2xl:text-5xl leading-tight 2xl:leading-normal font-black">
            DELIVERING EFFICIENT WEB SOLUTIONS
            <br />
            FOR REAL WORLD PROBLEMS
          </h1>
          <p>
            Hey there! I&apos;m Jetter, a full-stack web developer with a
            curious mind
          </p>
        </div>
      </div>
      <a
        href="#"
        className="absolute bottom-0 right-0 py-6 px-32 2xl:py-8 2xl:px-40 bg-black rounded-tl-lg"
      >
        Explore
      </a>
    </div>
  );
}
