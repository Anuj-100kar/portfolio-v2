import HeroButtons from "./herobuttons";
import HeroSocial from "./herosocial";

export default function HeroContent() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center">

      <p className="text-blue-500 font-semibold text-lg">
        👋 Hello, I'm
      </p>

      <h1 className="text-6xl md:text-7xl font-extrabold mt-4">
        Anuj Shambharkar
      </h1>

      <h2 className="text-3xl text-zinc-300 mt-6 font-semibold">
        Full Stack Developer
      </h2>

      <p className="text-zinc-400 max-w-2xl mt-8 leading-8 text-lg">
        I build scalable web applications,
        modern user experiences, and AI-powered
        products using React, Node.js,
        TypeScript, Java, and MongoDB.
      </p>

      <HeroButtons />

      <HeroSocial />

    </div>
  );
}