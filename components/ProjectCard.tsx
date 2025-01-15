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
      className="hover:cursor-pointer inline-block"
    >
      <article className="text-text-50 bg-backgroundColor-900 m-4 p-9 w-full max-w-md">
        <div className="pb-2">
          <h1 className="font-black text-3xl mb-2 ">{title}</h1>
          <p className="font-medium ">{description}</p>
        </div>

        <ul>
          {techStack.map((item) => (
            <li
              key={item.name}
              className="font-mono pl-2 flex flex-row gap-2"
            >
              <span>
                <Image
                className="iniline"
                  src=".next/static/media/Logo.a0f790d0.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              </span>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </article>
    </a>
  );
}
