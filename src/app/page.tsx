"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import axios from "axios";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Hero, HeroImage, Thumb } from "./components/home/hero";
import Destination from "./components/home/destination";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [num, setNum] = useState<number>(0);
  const [banner, setBanner] = useState<Array<number>>([0, 1, 2]);
  const [data, setData] = useState<Record<string, unknown>>({});
  const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      // try {
      const response = await axios.get(
        "https://api.misritalia.beyond-creation.net/api/page/page/home"
      );
      const fetchedData = response.data;
      setData(fetchedData.data.page);
      // } catch (error) {
      //   setError("Error fetching data");
      // } finally {
      //   setLoading(false);
      // }
    };
    fetchData();
  }, []);

  console.log(data.destinations);

  return (
    <main id="home">
      <div className="thumbs">
        <ul className="thumbs-wrap">
          {banner.map((_, idx) => {
            return (
              <Thumb
                key={idx}
                idx={idx}
                banner={num}
                length={banner.length}
                onClick={() => setNum(idx)}
              />
            );
          })}
          {banner.map((_, idx) => {
            return (
              <Thumb
                key={idx}
                idx={banner.length}
                banner={num}
                length={banner.length}
                onClick={() => setNum(idx)}
              />
            );
          })}
        </ul>
      </div>
      <section className="heros">
        {banner.map((_, idx) => {
          return <Hero key={idx} idx={idx} banner={num} />;
        })}
        <div className="heros-images">
          {banner.map((_, idx) => {
            return (
              <HeroImage
                key={idx}
                idx={idx}
                banner={num}
                length={banner.length}
              />
            );
          })}
        </div>
      </section>
      <Destination />
    </main>
  );
}
