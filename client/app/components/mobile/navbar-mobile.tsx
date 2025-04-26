import React, { ReactNode } from "react";
import burger from "../../../public/navbar/burger.svg";
import Image from "next/image";
import logo from "../../../public/chem_logo.png";
import "../../ui/nav/navbar-mobile.css";
import home from "../../../public/navbar/home.svg"
import resources from "../../../public/navbar/resources.svg";
import calendar from "../../../public/navbar/calendar.svg";
import about from "../../../public/navbar/about_us.svg";
import { usePathname } from "next/navigation";
export default function NavbarCustomMobile() {
  const [open, setOpen] = React.useState(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  const currentPath = usePathname();

  return (
    <>
      <div
        className={`d-flex justify-around align-items-center w-100 
        ${currentPath !== "/" ? 'other-nav-mobile' : ''}`}
      >
        <Image src={logo} alt="logo" height={114.34} width={169.86} priority />
        <button
          type="button"
          aria-disabled={open}
          disabled={open}
          onClick={toggle}
        >
          <Image
            src={burger}
            alt="burger menu"
            className="burger-menu"
            height={50}
            width={50}
          />
        </button>
      </div>
      <Sidenav open={open} toggle={toggle}>
        <SidenavItem href="/">
          <Image
            src={home}
            alt="Home Icon"
            height={25}
            width={25}
          />
          <span className="pl-2 text-mobile-sidenav">Home</span>
        </SidenavItem>
        <SidenavItem href="/resources">
          <Image
            src={resources}
            alt="Resources Icon"
            height={25}
            width={25}
          />
          <span className="pl-2 text-mobile-sidenav">Resources</span>
        </SidenavItem>
        <SidenavItem href="/calendar">
          <Image
            src={calendar}
            alt="Calendar Icon"
            height={30}
            width={30}
          />
          <span className="pl-2 text-mobile-sidenav">Calendar</span>
        </SidenavItem>
        <SidenavItem href="/about_us">
          <Image
            src={about}
            alt="About Us Icon"
            height={25}
            width={25}
          />
          <span className="pl-2 text-mobile-sidenav">About Us</span>
        </SidenavItem>
      </Sidenav>
    </>
  );
}

/* Sidenav logic */

interface SidenavProps {
  open: boolean;
  toggle: (state?: boolean) => void;
  children: ReactNode;
}

interface SidenavItemProps {
  children: ReactNode;
  href: string;
}

const style = {
  item: `flex justify-start align-items-center align-content-center text-center cursor-pointer font-medium ml-8 mb-10 no-underline text-black text-lg hover:text-blue-500 relative custom-thing`,
  closeIcon: `absolute top-1 focus:outline-none right-3 text-4xl text-black cursor-pointer`,
  sidenav: {
    open: `w-7/12 md:w-60 bg-white text-black overflow-x-hidden`,
    close: `w-0 bg-white text-black overflow-x-hidden`,
    default: `h-screen fixed z-20 top-0 right-0 transition-all ease duration-200`,
  },
};

function Sidenav({ open, toggle, children }: SidenavProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const currentPath = window.location.pathname;

  // Close on click outside
  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        if (!open) return;
        toggle(false);
      }
    };
    window.addEventListener("mousedown", handleOutsideClick);
    return () => window.removeEventListener("mousedown", handleOutsideClick);
  }, [open, toggle]);

  return (
    <aside
      ref={ref}
      className={`${style.sidenav.default} 
        ${open ? style.sidenav.open : style.sidenav.close} 
        ${currentPath === window.location.pathname ? '' : 'other-nav-mobile'}`}
    >
      <button
        aria-label="Close"
        className={style.closeIcon}
        onClick={() => toggle(false)}
      >
        &times;
      </button>
      <div className="mt-12">{children}</div>
    </aside>
  );
}

function SidenavItem({ children, href }: SidenavItemProps) {
  return (
    <a href={href} className={style.item}>
      {children}
    </a>
  );
}

export { Sidenav, SidenavItem };
