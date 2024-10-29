import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { normalize, clamp } from "../../utils/math";

import PagesLink from "../pagesLink";

export default function Search({ openSeach }: { openSeach: boolean }) {
  const [state, setState] = useState<number>(0);
  const [progress, setPrgroess] = useState<number>(0);
  const eleRef = useRef<null | HTMLElement>(null);
  const [down, setDown] = useState(false);

  const sBallRef = useRef(null);
  const lineRef = useRef(null);

  const end = 2000000;

  useEffect(() => {
    if (openSeach) {
      gsap.to("#menu-search", {
        duration: 1,
        ease: "expo.out",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      });
      gsap.to("#developments-menu .black", {
        duration: 0.7,
        ease: "power2.inOut",
        opacity: "0.7",
      });
    } else {
      gsap.to("#menu-search", {
        duration: 1,
        ease: "expo.inOut",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      });
      gsap.to("#developments-menu .black", {
        duration: 0.7,
        ease: "power2.inOut",
        opacity: 0,
      });
    }
  }, [openSeach]);

  const handleProgress = (e) => {
    const ele = sBallRef.current;
    const parent = e.target.parentNode;
    const left = parent.offsetLeft;
    const width = parent.offsetWidth;
    let bar = left + width;

    bar = clamp(0, 1, normalize(left, bar, e.pageX));

    ele.style.transform = `translateX(${bar * width}px)`;
    setPrgroess(Math.round(bar * end));
  };

  const handleDown = (e) => {
    setDown(true);
    handleProgress(e);
  };
  const handleMove = (e) => {
    if (down) handleProgress(e);
  };
  window.onpointerup = (e) => {
    setDown(false);
  };

  return (
    <section ref={eleRef} id="menu-search">
      <div className="search-header">
        <h3>Search Properties</h3>
        <ul className="nav-wrap">
          <PagesLink onClick={() => setState(0)} name="Residential" />
          <PagesLink onClick={() => setState(1)} name="Commercial" />
        </ul>
      </div>
      <div className="search-content">
        <form>
          <div className="main-select">
            <ul>
              <li>
                <div>
                  <h6>Location</h6>
                  <select id="location">
                    <option value="1">new cairo</option>
                    <option value="2">ain sokhna</option>
                    <option value="3">new capital</option>
                    <option value="5">north coast</option>
                  </select>
                </div>
              </li>
              <li>
                <div>
                  <h6>Project</h6>
                  <select id="project">
                    <option value="">Choose project</option>
                    <option value="3">il bosco city</option>
                    <option value="4">la nuova vista</option>
                  </select>
                </div>
              </li>
              <li>
                <div>
                  <h6>Unit type</h6>
                  <select id="unit_type">
                    <option value="">Choose unit type</option>
                    <option value="8">duplex</option>
                    <option value="2">town house</option>
                    <option value="4">apartment</option>
                    <option value="1">villa</option>
                    <option value="3">twin house</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
          <div
            className={`residential-select ${state === 0 ? "flex" : "none"}`}
          >
            <ul>
              <li>
                <div>
                  <h6>
                    Property area m <sup>2</sup>
                  </h6>
                  <select id="area">
                    <option value="">Select property area</option>
                    <option value="238">238</option>
                    <option value="224">224</option>
                    <option value="112-183">112-183</option>
                    <option value="224.3">224.3</option>
                    <option value="212">212</option>
                    <option value="282">282</option>
                    <option value="230">230</option>
                    <option value="212-224.3">212-224.3</option>
                    <option value="361.9">361.9</option>
                    <option value="321">321</option>
                    <option value="459">459</option>
                  </select>
                </div>
              </li>
              <li>
                <div>
                  <h6>Bedrooms</h6>
                  <select id="bedrooms">
                    <option value="">Select bedrooms</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>
              <li>
                <div>
                  <h6>Bathrooms</h6>
                  <select id="bathrooms">
                    <option value="">Select bathrooms</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
          <div className="select-ratio">
            <div className={`${state === 0 ? "flex" : "none"}`}>
              <h4>Finished</h4>
              <ul>
                <li className={`${state === 1 ? "disable" : "able"}`}>
                  <input id="all" type="radio" name="finished" value="All" />
                  <label htmlFor="all">
                    <span></span> All
                  </label>
                </li>
                <li className={`${state === 0 ? "disable" : "able"}`}>
                  <input
                    id="finished"
                    type="radio"
                    name="finished"
                    value="finished"
                  />

                  <label htmlFor="finished">
                    <span></span> finished
                  </label>
                </li>
                <li className={`${state === 1 ? "disable" : "able"}`}>
                  <input
                    id="unfinished"
                    type="radio"
                    name="finished"
                    value="unfinished"
                  />

                  <label htmlFor="unfinished">
                    <span></span> unfinished
                  </label>
                </li>
              </ul>
            </div>
            <div>
              <h4>Delivery</h4>
              <ul>
                <li>
                  <input id="d-all" type="radio" name="finished" value="All" />
                  <label htmlFor="d-all">
                    <span></span> All
                  </label>
                </li>
                <li className={`${state === 0 ? "disable" : "able"}`}>
                  <input id="under" type="radio" name="under" value="under" />

                  <label htmlFor="under">
                    <span></span> under construction
                  </label>
                </li>
                <li className={`${state === 1 ? "disable" : "able"}`}>
                  <input
                    id="ready"
                    type="radio"
                    name="finished"
                    value="ready"
                  />

                  <label htmlFor="ready">
                    <span></span> ready to deliver
                  </label>
                </li>
              </ul>
            </div>
            <div className="progress">
              <div>
                <h4>Price Range</h4>
                <div className="progress-price">
                  <div>
                    <h6>From</h6>
                    <p>{progress}</p>
                    <span>EUR</span>
                  </div>
                  <div>
                    <h6>To</h6>
                    <p>{end}</p>
                    <span>EUR</span>
                  </div>
                </div>
              </div>
              <ul className="ball-wrap">
                <li className="ball">
                  <svg>
                    <use xlinkHref="#progress"></use>
                  </svg>
                </li>
                <li className="ball" ref={sBallRef}>
                  <svg>
                    <use xlinkHref="#progress"></use>
                  </svg>
                </li>
                <li
                  className="line"
                  ref={lineRef}
                  onPointerDown={handleDown}
                  onPointerMove={handleMove}
                ></li>
              </ul>
            </div>
          </div>
        </form>
      </div>
      <div className="show-more">
        <button
          type="button"
          onClick={() => {
            eleRef.current.classList.toggle("active");
          }}
        >
          <span>More Search Options</span>
          <span className="arrow">
            <svg>
              <use xlinkHref="#arrow"></use>
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}
