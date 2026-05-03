import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import Lenis from "lenis";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);
export let smoother: Lenis;

const Navbar = () => {
  useEffect(() => {
    smoother = new Lenis({
      lerp: 0.06,
      smoothWheel: true,
    });

    // Connect Lenis to GSAP ScrollTrigger
    smoother.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      smoother.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    smoother.scrollTo(0, { immediate: true });
    smoother.stop();

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          if (section) {
            smoother.scrollTo(section, { lerp: 0.06 });
          }
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollTrigger.refresh(true);
    });
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          UP
        </a>
        <a
          href="mailto:utkarshpareek70@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          utkarshpareek70@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
