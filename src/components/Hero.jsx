import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-cyan-400"
      >
        Vamshi Krishna Donthula
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-xl text-gray-300"
      >
        Software Engineer | Full Stack Developer
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-6"
      >
        <a
          href="#contact"
          className="px-6 py-3 bg-cyan-500 text-black rounded-full shadow-lg hover:scale-105 transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
