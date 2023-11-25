'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdBug } from "react-icons/io";
import classNames from "classnames";
const NavBar = () => {
  const currentpath = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-5 border-b px-5 h-14 items-center ">
      <Link href="/">
        <IoMdBug />
      </Link>
      <ul className="flex space-x-5">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classNames({
              "text-zinc-500": true,
              " hover:text-zinc-800 transition-colors": true,
              "text-zinc-950": link.href === currentpath,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
