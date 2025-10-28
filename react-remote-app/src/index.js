import { createRoot } from "react-dom/client";
import HelloRemote from "./components/HelloRemote";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<HelloRemote />);
