"use client";

import { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { CheckDevice } from "../../app";

import PagesLink from "../pagesLink";
import { List } from "../header/menu";

const DESTINATION_CHOISES = [
  "Latest",
  "Reidential",
  "Commercial",
  "Coastal",
  "Flagship",
];

function Card({ isMobile }: { isMobile: boolean | undefined }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!isMobile) {
      gsap.to(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        opacity: 0,
        y: "50%",
      });
    }
  }, [isMobile]);

  return (
    <li ref={cardRef} className="destination-card">
      <div className="destination-card-wrap">
        <div className="left">
          <div className="left-head"></div>
          <div className="left-contnet">
            <h5>New Cairo</h5>
            <h3>IL BOSCO CITY</h3>
            <p className="destination-card-desc">
              IL BOSCO City is the first 15 min city in Egypt, where all your
              essential needs are within 15 mins from your home
            </p>
            <ul className="payment">
              <li>
                <h6>Payment Plane</h6>
                <p>5% DP / 9 years</p>
              </li>
              <li>
                <h6>Payment Price</h6>
                <p>EGP 8,000,000</p>
              </li>
            </ul>
          </div>
          <div className="left-footer">
            <ul>
              <PagesLink name="Learn More" />
              <PagesLink name="Enquire Now" />
            </ul>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </li>
  );
}

export default function Destination() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [state, setState] = useState<number>(0);
  const isMobile = useContext<boolean | undefined>(CheckDevice);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".destination",
      pin: ".destination-header",
      start: "top top",
      end: "bottom bottom",
      pinSpacing: false,
    });
  }, []);

  return (
    <section className="destination">
      <div className="destination-header">
        <h3>Current Launches</h3>
        {isMobile ? (
          <List
            name="filter"
            choices={DESTINATION_CHOISES}
            listOpen={filterOpen}
            setListOpen={setFilterOpen}
          />
        ) : (
          <ul className="nav-wrap">
            {DESTINATION_CHOISES.map((name, idx) => {
              return (
                <PagesLink
                  key={idx}
                  onClick={() => setState(idx)}
                  name={name}
                />
              );
            })}
          </ul>
        )}
      </div>
      <div className="destination-cards">
        <ul className={`${state === 0 ? "block" : "none"}`}>
          <Card isMobile={isMobile} />
          <Card isMobile={isMobile} />
          <Card isMobile={isMobile} />
        </ul>
      </div>
    </section>
  );
}
