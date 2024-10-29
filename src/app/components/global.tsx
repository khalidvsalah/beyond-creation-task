"use client";

import { useState, useContext } from "react";

import { CheckDevice } from "../app";

import Header from "./header/header";
import MenuBtn from "./header/menuBtn";
import Menu from "./header/menu";
import DevelopmentsMenu from "./header/developmentsMenu";
import Search from "./header/search";

import SVG from "./svg";

export default function Global() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openDMenu, setOpenDMenu] = useState<boolean>(false);
  const [openSeach, setOpenSeach] = useState<boolean>(false);
  const isMobile = useContext(CheckDevice);

  return (
    <>
      <SVG />
      <Header setOpenDMenu={setOpenDMenu} />
      <MenuBtn
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        openDMenu={openDMenu}
        setOpenDMenu={setOpenDMenu}
        openSeach={openSeach}
        setOpenSeach={setOpenSeach}
      />
      <Menu isMobile={isMobile} openMenu={openMenu} />
      <Search openSeach={openSeach} />
      <DevelopmentsMenu openDMenu={openDMenu} />
    </>
  );
}
