import Image from "next/image";

import NavItem from "./NavItem";
import Logo from "@/public/Logo.svg";

export default function NavBar() {
  return (
    <header className="m-8 flex items-center justify-center px-6 py-4">
      <div className="absolute left-0 px-4">
        <Image src={Logo} alt="Logo" width={64} height={64} />
      </div>
      <nav>
        <ul className="flex flex-row space-x-20 ">
          <li>
            <NavItem title="Home" href="/" />
          </li>
          <li>
            <NavItem title="Projects" href="/projects" />
          </li>
          <li>
            <NavItem title="Resume" href="/resume" />
          </li>
          <li>
            <NavItem title="Socials" href="/socials" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
