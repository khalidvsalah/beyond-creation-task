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
          <PagesLink path="/" name="Home" />
          <PagesLink
            onClick={() => setOpenDMenu(true)}
            path="/developments"
            name="Developments"
          />
          <PagesLink path="/mip-experiences" name="Mip Experiences" />
          <PagesLink path="/about" name="About Us" />
        </ul>
      </div>
    </header>
  );
}

// {/* <ul>
//   <PagesLink path="/" name="Home" />
//   <PagesLink path="/development" name="Development" />
//   <PagesLink path="/mip-experiences" name="Mip Experiences" />
//   <PagesLink path="/about" name="About Us" />
//   {/* <PagesLink path="/about" name="About Us" /> */}
// </ul>
// <div>
//   <ul>
//     <li>
//       <a className="whatsapp" href=""></a>
//     </li>
//     <li>
//       <button type="button" className="email"></button>
//     </li>
//     <li>
//       <button type="button" className="search"></button>
//     </li>
//   </ul>
//   <div>
//     <button type="button" className="menu"></button>
//   </div>
// </div> */}
