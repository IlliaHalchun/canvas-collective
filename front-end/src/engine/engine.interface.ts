import {Camera, Renderer, Scene} from "three"

export interface IViewEngine {
    init(): void
    getScene(): Scene
    getRenderer(): Renderer
    getCamera(): Camera
}
