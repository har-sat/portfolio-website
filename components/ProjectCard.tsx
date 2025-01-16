import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  techStack,
  href,
}: {
  title: string;
  description: string;
  techStack: { image: string; name: string }[];
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="hover:cursor-pointer flex transition-transform transform hover:scale-105 justify-center"
    >
      <article className="bg-backgroundColor-900 text-text-50 shadow-lg rounded-lg overflow-hidden m-4 p-6 w-[300px] h-[420px] flex flex-col justify-between hover:shadow-xl">
        <div>
          <h1 className="font-extrabold text-xl mb-3 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            {title}
          </h1>
          <p className="font-medium text-sm text-text-50/80 mb-4 line-clamp-3">
            {description}
          </p>
        </div>

        <ul className="mt-auto space-y-2 max-h-[120px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600">
          {techStack.map((item, index) => (
            <li
              key={index}
              className="font-mono flex items-center gap-3 text-sm text-text-50/90"
            >
              <Image
                src={item.image}
                alt=""
                width={20}
                height={20}
                className="inline"
              />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </article>
    </a>
  );
}
