import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { SplitText } from "gsap/SplitText";

export default class Slow {
  constructor() {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, SplitText);
  }

  anim() {
    this.forgive();
  }

  forgive() {
    const splitTextForgive = new SplitText("#forgive", { type: "words,chars" });
    const splitTextUnderstand = new SplitText("#understand", { type: "words,chars" });
    const tl = gsap.timeline();
    tl.from(splitTextForgive.words[0], {
      y: -200,
      opacity: 0,
      duration: 2,
    });
    tl.from(
      splitTextForgive.words[1],
      {
        y: -200,
        opacity: 0,
        duration: 2,
        delay: 0.2,
      },
      "<"
    );
    tl.from(
      splitTextForgive.words[2],
      {
        y: -200,
        opacity: 0,
        duration: 2,
        delay: 0.2,
      },
      "<"
    );
    tl.from(
      splitTextForgive.words[3],
      {
        y: -200,
        opacity: 0,
        duration: 3,
        delay: 0.2,
      },
      "<"
    );
    tl.from(
      splitTextForgive.words[4],
      {
        y: -200,
        opacity: 0,
        duration: 3,
        delay: 0.35,
      },
      "<"
    );
    tl.from(
      splitTextForgive.words[5],
      {
        y: -200,
        opacity: 0,
        duration: 2,
        delay: 1.5,
      },
      "<"
    );
    tl.from(
      splitTextForgive.words[6],
      {
        y: -200,
        opacity: 0,
        duration: 2,
        delay: 0.2,
      },
      "<"
    );
    tl.from(
      splitTextForgive.words[7],
      {
        y: -200,
        opacity: 0,
        duration: 2,
        delay: 0.2,
      },
      "<"
    );
    tl.from(
      splitTextForgive.words[8],
      {
        opacity: 0,
        y: -200,
        duration: 4,
        delay: 0,
      },
      "<"
    );
    tl.from(
      splitTextForgive.words[9],
      {
        opacity: 0,
        y: -200,
        opacity: 0,
        duration: 6,
        delay: 0.2,
      },
      "<"
    );
    tl.to("#forgive", {
      opacity: 0.2,
      duration: 4,
    });
    tl.from(
      splitTextUnderstand.words,
      {
        y: -200,
        duration: 5,
        stagger: 0.2,
      },
      "<"
    );
  }
}
