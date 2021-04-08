import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import fragment from "./shaders/fragment.glsl";
import fragment2 from "./shaders/fragment2.glsl";
import vertex from "./shaders/vertex.glsl";

export default class Sketch {
  constructor(options) {
    this.time = 0;

    this.canvas = options.dom;

    this.scene = new THREE.Scene();

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    console.log(this.height);

    this.camera = new THREE.PerspectiveCamera(70, this.width / this.height, 0.01, 10);
    this.camera.position.z = 1;
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.renderer.render(this.scene, this.camera);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.update();
    this.controls.enableDamping = true;

    this.init();
  }

  init() {
    this.resize();
    this.setupResize();

    this.addObject();
    this.render();
  }

  setupResize() {
    window.addEventListener("resize", this.resize.bind(this));
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
  }

  addObject() {
    this.geometry = new THREE.PlaneGeometry(2, 2, 10, 10);
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
      },
      side: THREE.DoubleSide,
      vertexShader: vertex,
      fragmentShader: fragment,
      transparent: true,
    });
    this.material2 = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
      },
      side: THREE.DoubleSide,
      vertexShader: vertex,
      fragmentShader: fragment2,
      transparent: true,
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh2 = new THREE.Mesh(this.geometry, this.material2);
    this.mesh2.geometry.scale = 0.005;
    this.mesh2.position.z = 0.5;

    this.scene.add(this.mesh);
    this.scene.add(this.mesh2);
  }

  render() {
    this.material.uniforms.time.value += 0.05;
    this.material2.uniforms.time.value += 0.05;
    // this.renderer.render();
    this.renderer.render(this.scene, this.camera);

    this.controls.update();

    window.requestAnimationFrame(this.render.bind(this));
  }
}
