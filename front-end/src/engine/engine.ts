import {Camera, Mesh, MeshBasicMaterial, PerspectiveCamera, PlaneGeometry, Renderer, Scene, WebGLRenderer} from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {IViewEngine} from "./view.engine.interface";

export class ViewEngine implements IViewEngine {
    private scene: Scene;
    private camera: Camera;
    private renderer: Renderer;
    private controls: OrbitControls;
    private canvas_container: HTMLDivElement = 
        document.querySelector(".js-canvas-container") as HTMLDivElement;

    public getScene(): Scene {
        return this.scene;
    }

    public getCamera(): Camera {
        return this.camera;
    }

    public getRenderer(): Renderer {
        return this.renderer;
    }

    private useRenderer() {
        this.renderer = new WebGLRenderer();
        this.renderer.setSize(window.innerWidth / 2, window.innerHeight);
        this.canvas_container.appendChild(this.renderer.domElement);
    }

    private useCamera() {
        this.camera = new PerspectiveCamera(
            75,
            ( window.innerWidth / 2 ) / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.set(0, 5, -10);
    }

    private useScene() {
         this.scene = new Scene();
    }

    private useEnvironment() {
        const planeGeometry = new PlaneGeometry(10, 10);
        const planeMaterial = new MeshBasicMaterial({ color: 0x555555 });
        const plane = new Mesh(planeGeometry, planeMaterial);
        plane.rotation.x = -Math.PI / 2;
        this.scene.add(plane);
    }

    private useControls() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.screenSpacePanning = false;
        this.controls.minDistance = 0;
        this.controls.maxDistance = 100;
    }

    private useAnimate() {
        this.renderer.render(this.scene, this.camera);
        this.controls.update.apply(this.controls);
        requestAnimationFrame(this.useAnimate.bind(this));
    }

    init(): void {
        this.useScene();
        this.useCamera();
        this.useRenderer();
        this.useEnvironment();
        this.useControls();
        this.useAnimate();
    }
}
