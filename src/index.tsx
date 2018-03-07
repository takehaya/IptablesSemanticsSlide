import * as React from "react";
import * as ReactDom from "react-dom";

import Slide from "./slide";

const root = document.createElement('div');
document.body.appendChild(root);

const render = (Component: React.ReactType) => {
    ReactDom.render((<div><Component /></div>), root);
};

render(Slide);
