import Link from "next/link";
import { IoMdBug } from "react-icons/io";
const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-5 border-b px-5 h-14 items-center ">
      <Link href="/"><IoMdBug/></Link>
      <ul className="flex space-x-5">
        {links.map((link) => (
          <Link
            key={link.href}
            className="text-zinc-400 hover:text-zinc-900 transition-colors"
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
