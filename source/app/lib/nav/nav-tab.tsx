import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, Dispatch, SetStateAction, useRef } from "react";

interface NavTabProps {
  href: string;
  children: ReactNode;
  setPosition: Dispatch<SetStateAction<{ left: number; width: number; opacity: number }>>
}

export default function NavTab({ href, setPosition , children }: NavTabProps) {
  const path_name = usePathname();
  const ref = useRef<HTMLAnchorElement>(null)
  return (
    <Link
    ref={ref}
    onMouseEnter={() => {
      if(!ref.current) return;
      const {width} = ref.current.getBoundingClientRect();
      setPosition({
        width: width + 30, left: ref.current.offsetLeft - 15, opacity: 1
      })
    }}
      href={href}
      className={`text-white text-base m-3 z-10 position-relative mix-blend-difference ${
        path_name === href
          ? "font-semibold underline-offset-8"
          : "no-underline font-light"
      }`}
    >
      {children}
    </Link>
  );
}
