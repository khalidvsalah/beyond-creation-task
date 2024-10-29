"use client";

import { useEffect, useState } from "react";
import PagesLink from "../pagesLink";
import gsap from "gsap";

function Card({ name }: { name: string }) {
  return (
    <li className="card">
      <div className="bg"></div>
      <div className="card-logo"></div>
      <h5>{name}</h5>
      <ul>
        <PagesLink>Explore</PagesLink>
      </ul>
    </li>
  );
}

export default function DevelopmentsMenu({
  openDMenu,
}: {
  openDMenu: boolean;
}) {
  const [state, setState] = useState(0);

  useEffect(() => {
    gsap.killTweensOf(".development-wrap");
    gsap.killTweensOf("#developments-menu .black");

    if (openDMenu) {
      gsap.to(".development-wrap", {
        duration: 1,
        ease: "expo.inOut",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      });
      gsap.to("#developments-menu .black", {
        duration: 1,
        ease: "expo.inOut",
        opacity: "0.7",
      });
    } else {
      gsap.to(".development-wrap", {
        duration: 1,
        ease: "expo.inOut",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      });
      gsap.to("#developments-menu .black", {
        duration: 1,
        ease: "expo.inOut",
        opacity: 0,
      });
    }
  }, [openDMenu]);

  return (
    <section id="developments-menu">
      <div className="development-wrap">
        <h3>Developments</h3>
        <ul className="nav-wrap">
          <PagesLink onClick={() => setState(0)} name="Residential" />
          <PagesLink onClick={() => setState(1)} name="Coastal" />
          <PagesLink onClick={() => setState(2)} name="Commercial" />
          <PagesLink onClick={() => setState(3)} name="Flagship" />
        </ul>
        <div className="card-wrap">
          <ul className={`${state === 0 ? "flex" : "none"}`}>
            <li>
              <h4>New Cairo</h4>
              <ul className="cards">
                <Card name="IL BOSCO City" />
                <Card name="La Nuova Vista" />
              </ul>
            </li>
            <li>
              <h4>New Caital</h4>
              <ul className="cards">
                <Card name="IL BOSCO" />
                <Card name="Vinci" />
              </ul>
            </li>
          </ul>
          <ul className={`${state === 1 ? "flex" : "none"}`}>
            <li>
              <h4>New Cairo</h4>
              <ul className="cards">
                <Card name="Kai Sokhna" />
                <Card name="Can Limon" />
              </ul>
            </li>
            <li>
              <h4>New Caital</h4>
              <ul className="cards">
                <Card name="Solare" />
              </ul>
            </li>
          </ul>
          <ul className={`${state === 2 ? "flex" : "none"}`}>
            <li>
              <h4>New Cairo</h4>
              <ul className="cards">
                <Card name="Garden 8" />
                <Card name="Cairo Business Park" />
              </ul>
            </li>
            <li>
              <h4>New Caital</h4>
              <ul className="cards">
                <Card name="Radical-1" />
                <Card name="Vinci Street" />
              </ul>
            </li>
          </ul>
          <ul className={`${state === 3 ? "flex" : "none"}`}>
            <li>
              <h4>New Cairo</h4>
              <ul className="cards">
                <Card name="Vertical Forest" />
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="black"></div>
    </section>
  );
}
