import {injectable} from "inversify";
import "reflect-metadata";
import {IApp} from "./app.interface";
import {isMobileDevice} from "./utils/is-mobile-device.util";

@injectable()
export class App implements IApp {
    private input: IInput;

    private useInput() {
        if(isMobileDevice())
            this.view = new MobileView();
        else
            this.view = new DesktopView();
        this.view.init();
    }

    public init(): void {
        this.useView();
    } 
}
