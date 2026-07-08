export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full h-20 border-b border-zinc-800 bg-black/70 backdrop-blur-xl z-50">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">
        <h1 className="text-white text-xl font-bold">
          Anuj.dev
        </h1>

        <div className="flex gap-8 text-zinc-300">
          <button >Home</button>
          <button>About</button>
          <button>Projects</button>
          <button>Contact</button>
          <button>Journey</button>
          <button>Services</button>
          <button>Contact</button>
          
        </div>
      </div>
    </nav>
  );
}