"use client";
import Link from "next/link";
import style from "./navbar.module.css";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle"

const links = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "About",
    href: "/about",
  },
  {
    id: 3,
    name: "Contact",
    href: "/contact",
  },
  {
    id: 4,
    name: "Blog",
    href: "/blog",
  },
  {
    id: 5,
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    id: 6,
    name: "Portfolio",
    href: "/portfolio",
  },
];

const Navbar = () => {
  return (
    <div className={style.container}>
      <Link href="/" className={style.logo}>
        Lakki
      </Link>

      <div className={style.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.href} className={style.link}>
            {link.name}
          </Link>
        ))}

        <button
          onClick={() => {
            console.log("Logged out");
          }}
          className={style.logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
