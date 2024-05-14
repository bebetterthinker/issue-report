import Link from "next/link";
import { BiSolidBugAlt } from "react-icons/bi";

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
              className="text-zinc-500 hover:text-zinc-800 transition-colors"
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
