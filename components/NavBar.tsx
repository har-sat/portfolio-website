import Image from "next/image";

import NavItem from "./NavItem";
import Logo from "@/public/Logo.svg";

export default function NavBar() {
  const navItems: { [key: string]: string } = {
    "/": "home",
    "/projects": "projects",
    "/resume": "resume",
    "/socials": "socials",
  };

  console.log(navItems["/"]);

  return (
    <header className="m-8 flex items-center justify-center px-6 py-4">
      <div className="hidden sm:block absolute left-0 px-4">
        <Image src={Logo} alt="Logo" width={64} height={64} />
      </div>
      <nav>
        <ul className="flex flex-row space-x-20 ">
          {Object.keys(navItems).map((navItemPath) => (
            <li key={navItemPath}>
              <NavItem title={navItems[navItemPath]} href={navItemPath} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
