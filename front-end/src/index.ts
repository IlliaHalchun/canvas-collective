import "./fonts/fonts.scss";
import "./index.scss";

import { Container, interfaces } from "inversify";
import "reflect-metadata";
import {KEYS} from "./IoC/keys";
import {IApp} from "./app.interface";
import {App} from "./app";

// Setting up a container
const container_options: interfaces.ContainerOptions = {defaultScope: "Singleton"};
const container = new Container(container_options);

// Binding main dependencies
container.bind<IApp>(KEYS.APP).to(App);

// Binding controls dependencies

// Bootstrap
const application: IApp = container.get(KEYS.APP);
application.init();
