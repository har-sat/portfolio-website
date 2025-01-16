import { StaticImageData } from "next/image";
import SocialPlatformCard from "@/components/SocialPlatformCard";
import linkedInLogo from "@/public/linkedIn.svg";
import gitHubLogo from "@/public/github.svg";
import mailLogo from "@/public/mail.svg";

const socialsList: { name: string; image: StaticImageData, href: string }[] = [
  { name: "LinkedIn", image: linkedInLogo, href: "https://github.com/har-sat/" },
  { name: "GitHub", image: gitHubLogo, href: "https://github.com/har-sat/" },
  { name: "Email", image: mailLogo, href: "mailto:harsat.ponnusamy@gmail.com" },
];

export default function SocialsPage() {
  return (
    <div className="flex flex-col items-center pt-20 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Connect with Me</h1>
      <ul className="flex flex-col items-center space-y-6">
        {socialsList.map((item) => (
          <li key={item.name}>
            <SocialPlatformCard name={item.name} image={item.image} href = {item.href} />
          </li>
        ))}
      </ul>
    </div>
  );
}