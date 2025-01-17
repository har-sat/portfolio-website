"use client";
import { motion } from "motion/react";

export default function HomeContent() {
  return (
    <motion.div
      className="flex flex-col items-center gap-6 max-w-3xl text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .8 }}
    >
      <h1 className="text-5xl sm:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        Hello! I&apos;m Harsat
      </h1>
      <p className="text-lg sm:text-xl text-gray-300">
        A 2nd year CS student based in India
      </p>
      <ul className="mt-4 space-y-2 text-gray-400">
        <motion.li
          className="text-lg"
        >
          Good programmer
        </motion.li>
        <motion.li
          className="text-lg"
        >
          Enthusiastic guy
        </motion.li>
        <motion.li
          className="text-lg"
        >
          Funny ig?
        </motion.li>
      </ul>
    </motion.div>
  );
}
