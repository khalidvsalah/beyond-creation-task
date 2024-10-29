"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

import PagesLink from "../pagesLink";

const CURRENCY_CHOISES = ["EGP", "SAR", "AED", "USD", "EUR"];

interface BlockProps {
  name?: string;
  children: React.ReactNode;
}

function Block({ name, children }: BlockProps) {
  return (
    <li className="block">
      <form>
        <label>
          <input type="checkbox" name="" id="" />
        </label>
      </form>
      <h4 className="tfx">{name}</h4>

      <ul>{children}</ul>
    </li>
  );
}

function Account({ children }: BlockProps) {
  const magnic = 50;

  const $root = useRef(null);
  const rootBound = useRef(null);

  const handleMouseLeave = () => {
    gsap.killTweensOf($root.current);
    gsap.to($root.current, {
      x: 0,
      y: 0,
      ease: "expo.inOut",
      duration: 0.8,
    });
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    rootBound.current = $root.current.getBoundingClientRect();
    gsap.to($root.current, {
      x: ((x - rootBound.current.x) / $root.current.offsetWidth - 0.5) * magnic,
      y:
        ((y - rootBound.current.y) / $root.current.offsetHeight - 0.5) * magnic,
      ease: "power1.out",
    });
  };

  return (
    <button
      ref={$root}
      className="account"
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {children}
    </button>
  );
}

function Right({ tfx }: { tfx: boolean }) {
  return (
    <>
      <Block name="Residential">
        <PagesLink tfx={tfx} name="IL BOSCO" />
        <PagesLink tfx={tfx} name="IL BOSCO City" />
        <PagesLink tfx={tfx} name="Vinci" />
        <PagesLink tfx={tfx} name="La Nuova Vista" />
      </Block>
      <Block name="Commercial">
        <PagesLink tfx={tfx} name="Cairo Business Park" />
        <PagesLink tfx={tfx} name="Garden 8" />
        <PagesLink tfx={tfx} name="Radical-1" />
        <PagesLink tfx={tfx} name="Vinci Street" />
      </Block>
      <Block name="Coastal">
        <PagesLink tfx={tfx} name="Kai Sokhna" />
        <PagesLink tfx={tfx} name="Can Limon" />
        <PagesLink tfx={tfx} name="Solare" />
      </Block>
      <Block name="Flagship">
        <PagesLink tfx={tfx} name="Vertical Forest" />
      </Block>
    </>
  );
}

export function List({
  name,
  choices,
  listOpen,
  setListOpen,
}: {
  name: string;
  choices: Array<string>;
  listOpen?: boolean;
  setListOpen?: (arg: boolean) => void;
}) {
  const currencyRef = useRef(null);
  useEffect(() => {
    gsap.killTweensOf(".cTfx");

    if (listOpen) {
      currencyRef.current.classList.add("active");
      gsap.to(".cTfx", {
        duration: 1,
        stagger: 0.035,
        ease: "power3.inOut",
        y: "0",
      });
    } else {
      currencyRef.current.classList.remove("active");
      gsap.to(".cTfx", {
        duration: 1,
        stagger: 0.035,
        ease: "power3.inOut",
        y: "100px",
      });
    }
  }, [listOpen]);

  return (
    <div
      className="slider-list"
      onClick={() => {
        setListOpen(!listOpen);
      }}
      ref={currencyRef}
    >
      <ul className="slider-list-wrapper tfx">
        <PagesLink>{name}</PagesLink>
        <li>
          <svg
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.8125 8.25L7.5625 13.75C7.40625 13.9062 7.21875 13.9687 7 13.9687C6.8125 13.9687 6.625 13.9062 6.46875 13.75L1.21875 8.25C0.937501 7.9375 0.937501 7.46875 1.25 7.1875C1.53125 6.90625 2.03125 6.90625 2.3125 7.21875L6.25 11.375L6.25 0.749999C6.25 0.312499 6.59375 -5.60052e-07 7 -5.24537e-07C7.375 -4.91753e-07 7.75 0.3125 7.75 0.75L7.75 11.375L11.7188 7.21875C12 6.90625 12.5 6.90625 12.7813 7.1875C13.0938 7.46875 13.0938 7.96875 12.8125 8.25Z"
              fill="currentColor"
            ></path>
          </svg>
        </li>
      </ul>
      <ul className="slider-list-items">
        {choices.map((choice: string, idx: number) => {
          return (
            <li key={idx}>
              <span className="cTfx">{choice}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Menu({
  openMenu,
  isMobile,
}: {
  openMenu: boolean;
  isMobile: boolean;
}) {
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const eleRef = useRef(null);

  useEffect(() => {
    gsap.killTweensOf(eleRef.current);
    gsap.killTweensOf("#menu .tfx");

    if (openMenu) {
      gsap.to(eleRef.current, {
        duration: 1.2,
        ease: "expo.inOut",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      });
      gsap.to("#menu .tfx", {
        duration: 1,
        delay: 0.9,
        stagger: 0.035,
        ease: "expo.out",
        y: "0",
        opacity: 1,
      });
      gsap.to(".top .currency", {
        duration: 0,
        opacity: 1,
      });
    } else {
      gsap.to("#menu .tfx", {
        duration: 1,
        stagger: -0.035,
        ease: "expo.in",
        y: "100%",
        opacity: 0,
      });
      gsap.to(eleRef.current, {
        duration: 1,
        delay: 1.7,
        ease: "expo.out",
        clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
      });
      gsap.to(".top .currency", {
        duration: 0,
        opacity: 0,
      });
      setCurrencyOpen(false);
    }
  }, [openMenu]);

  return (
    <section ref={eleRef} id="menu">
      <div className="top">
        <div className="menu-logo tfx">
          <svg>
            <use xlinkHref="#main-logo"></use>
          </svg>
        </div>
        <List
          name="currency"
          choices={CURRENCY_CHOISES}
          listOpen={currencyOpen}
          setListOpen={setCurrencyOpen}
        />
      </div>
      <div className="bottom">
        <div className="device-wrap">
          {isMobile ? (
            <ul className="mobile-wrap">
              <li className="tfx">home</li>
              <Right />
              <li className="tfx">about us</li>
              <li className="tfx">sustainability</li>
              <li className="tfx">our partners</li>
              <li className="tfx">mip experiences</li>
              <li className="tfx">csr activities</li>
              <li className="tfx">cons. updates</li>
              <li className="tfx">contact us</li>
              <li className="tfx">careers</li>
            </ul>
          ) : (
            <div className="desk-wrap">
              <div className="left">
                <h3 className="tfx">Quick Links</h3>
                <ul className="left-wrapper">
                  <li className="tfx">home</li>
                  <li className="tfx">about us</li>
                  <li className="tfx">sustainability</li>
                  <li className="tfx">our partners</li>
                  <li className="tfx">mip experiences</li>
                  <li className="tfx">csr activities</li>
                  <li className="tfx">cons. updates</li>
                  <li className="tfx">contact us</li>
                  <li className="tfx">careers</li>
                </ul>
              </div>
              <div className="right">
                <h3 className="tfx">Developments</h3>
                <ul className="right-wrapper">
                  <Right />
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="social-media tfx">
        <Account>
          <FaInstagram />
        </Account>
        <Account>
          <FaFacebookF />
        </Account>
        <Account>
          <FaLinkedinIn />
        </Account>
        <Account>
          <FaYoutube />
        </Account>
      </div>
    </section>
  );
}
