import React from "react";
import { createRoot } from "react-dom/client";
import HelloRemote from "./components/HelloRemote";

class HelloRemoteElement extends HTMLElement {
  connectedCallback() {
    const root = createRoot(this);
    root.render(<HelloRemote />);
  }

  disconnectedCallback() {
    this.innerHTML = "";
  }
}

customElements.define("hello-remote", HelloRemoteElement);
