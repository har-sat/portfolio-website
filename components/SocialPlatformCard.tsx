import Image, { StaticImageData } from "next/image";

export default function SocialPlatformCard({
  image,
  name,
  href,
}: {
  image: StaticImageData;
  name: string;
  href: string;
}) {
  return (
    <a href={href} className="block w-[400px] mx-auto">
      <article className="flex items-center p-8 bg-backgroundColor-900 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 hover:bg-gray-700 h-36">
        <Image
          src={image}
          alt={`${name} logo`}
          width={70}
          height={70}
          className="mr-8"
        />
        <span className="text-white 
        
        font-thin text-2xl">{name}</span>
      </article>
    </a>
  );
}
