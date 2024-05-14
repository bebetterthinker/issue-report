"use client";
import Link from "next/link";
import { BiSolidBugAlt } from "react-icons/bi";
import { usePathname } from "next/navigation";
import classnames from "classnames";
const NavBar = () => {
  const links = [
    {
      label: "DashBord",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues",
    },
  ];
  const currentPath = usePathname();
  console.log(currentPath);
  return (
    <nav className="text-black flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <BiSolidBugAlt />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={classnames({
                "text-zinc-900": link.href === currentPath,
                "text-zinc-500": link.href !== currentPath,
                "hover:text-zinc-800 transition-colors": true,
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
