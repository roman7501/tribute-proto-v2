import Sketch from "./js/sketch.js";
import getScrollWithAnims from "./js/utils/getScrollWithAnims.js";

new Sketch({ dom: document.getElementById("webgl") });
new getScrollWithAnims();
