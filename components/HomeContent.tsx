"use client";
import { motion } from "motion/react";

const points: string[] = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
];

export default function HomeContent() {
  return (
    <motion.div
      className="flex flex-col gap-6 max-w-3xl items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl sm:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 items-center">
        Hello! I&apos;m Harsat
      </h1>
      <p className="text-lg sm:text-xl text-gray-300">
        A 2nd year CS student based in India
      </p>
      <ul className="mt-4 space-y-2 text-gray-400">
        {points.map(point => <motion.li key={point} className="text-lg">
          {point}
        </motion.li>)}
      </ul>
    </motion.div>
  );
}
