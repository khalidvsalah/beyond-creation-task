"use client";

import PagesLink from "../pagesLink";

interface HeaderProps {
  setOpenDMenu: (isOpen: boolean) => void;
}

export default function Header({ setOpenDMenu }: HeaderProps) {
  return (
    <header>
      <div className="header-wrapper">
        <div id="logo" className="menu-logo">
          <svg>
            <use xlinkHref="#main-logo"></use>
          </svg>
        </div>
        <ul className="nav-wrap">
          <PagesLink name="Home" />
          <PagesLink onClick={() => setOpenDMenu(true)} name="Developments" />
          <PagesLink name="Mip Experiences" />
          <PagesLink name="About Us" />
        </ul>
      </div>
    </header>
  );
}
