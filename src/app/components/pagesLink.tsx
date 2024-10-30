"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PagesLink({
  name,
  onClick,
  children,
  tfx = true,
}: {
  name?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: React.ReactNode;
  tfx?: boolean;
}) {
  const parentRef = useRef(null);
  const childRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    parentRef.current.onmouseenter = () => {
      gsap.killTweensOf(childRef.current);
      tl.fromTo(
        childRef.current,
        {
          y: "0%",
          opacity: 1,
        },
        {
          duration: 0.2,
          y: "-80%",
          opacity: 0,
          ease: "power3.in",
        }
      ).fromTo(
        childRef.current,
        {
          y: "80%",
          opacity: 0,
        },
        {
          duration: 0.2,
          ease: "power3.out",
          y: "0%",
          opacity: 1,
        }
      );
    };
  }, []);

  return (
    <li
      className={`elistic-btn ${tfx ? "tfx" : ""}`}
      ref={parentRef}
      onClick={onClick}
    >
      <button ref={childRef} type="button">
        {name ? name : children}
      </button>
    </li>
  );
}
