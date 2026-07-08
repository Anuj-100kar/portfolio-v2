export default function ContactForm() {
  return (
    <form className="space-y-6">

      <input
        placeholder="Your Name"
        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
      />

      <input
        type="email"
        placeholder="Your Email"
        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
      />

      <input
        placeholder="Subject"
        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
      />

      <textarea
        rows={6}
        placeholder="Message"
        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 outline-none focus:border-blue-500 resize-none"
      />

      <button
        className="
        bg-blue-600
        hover:bg-blue-500
        px-8
        py-4
        rounded-xl
        font-semibold
        transition
        "
      >
        Send Message
      </button>

    </form>
  );
}