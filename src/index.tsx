import * as React from "react";
import * as ReactDom from "react-dom";
import { AppContainer } from "react-hot-loader";

import Slide from "./slide";

const root = document.createElement('div');
document.body.appendChild(root);

const render = (Component: React.ReactType) => {
    ReactDom.render((<AppContainer><Component /></AppContainer>), root);
};

render(Slide);

if (module.hot) {
    module.hot.accept("./slide", () => render(Slide));
}