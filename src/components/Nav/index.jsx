import { useState } from "react";
import { headerLogo } from "../../assets/images";
import { hamburger, close } from "../../assets/icons";
import { navLinks } from "../../constants";
import "./styles.css";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((nav) => (
            <li key={nav.label}>
              <a
                href={nav.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {nav.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block">
          <img
            src={toggle ? close : hamburger}
            alt="Menu"
            width={25}
            height={25}
            className="cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
          />

          {/* Another way to make the animation */}
          {/*  <div
            className={`
              ${
                toggle
                  ? "opacity-100 duration-500 ease-in-out"
                  : "opacity-0 duration-0"
              }
              p-6 bg-pale-blue absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl justify-end transition-opacity
            `}
          > */}
          <div
            className={`
              ${toggle ? "flex" : "hidden"}
              p-6 bg-pale-blue absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar
            `}
          >
            <ul className="flex flex-col items-center">
              {navLinks.map((nav) => (
                <li key={nav.label}>
                  <a
                    href={nav.href}
                    className="font-montserrat leading-loose text-lg text-slate-gray"
                  >
                    {nav.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
