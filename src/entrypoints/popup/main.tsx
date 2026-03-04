import { createRoot } from "react-dom/client";
import { Popup } from "./Popup";
import "./main.scss";

const root = createRoot(document.getElementById("app")!);
root.render(<Popup />);
