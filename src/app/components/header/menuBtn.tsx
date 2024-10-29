"use client";

import { CiSearch } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import PagesLink from "../pagesLink";

export default function MenuBtn({
  openMenu,
  setOpenMenu,
  openDMenu,
  setOpenDMenu,
  openSeach,
  setOpenSeach,
}: {
  openMenu: boolean;
  setOpenMenu: (param: boolean) => void;
  openDMenu: boolean;
  setOpenDMenu: (param: boolean) => void;
  openSeach: boolean;
  setOpenSeach: (param: boolean) => void;
}) {
  return (
    <div
      id="menu-btn"
      className={`${openMenu || openDMenu || openSeach ? "active" : ""}`}
    >
      <ul className="menu-wrap">
        <li className="toggle-wrap">
          <ul>
            <PagesLink>
              <FaWhatsapp />
            </PagesLink>
            <PagesLink onClick={() => setOpenSeach(true)}>
              <CiSearch />
            </PagesLink>
            <PagesLink>
              <AiOutlineMail />
            </PagesLink>
          </ul>
        </li>
        <li
          className="toggle-menu"
          onClick={() => {
            if (openMenu) setOpenMenu(false);
            if (openDMenu) setOpenDMenu(false);
            if (openSeach) setOpenSeach(false);
            if (!openDMenu && !openMenu && !openSeach) setOpenMenu(true);
          }}
        >
          <div>
            <span className="line-1"></span>
            <span className="line-2"></span>
          </div>
        </li>
      </ul>
    </div>
  );
}
