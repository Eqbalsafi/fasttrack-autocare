import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Disable browser's scroll restoration on refresh
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Force scroll to top on page load/refresh
window.scrollTo(0, 0);

createRoot(document.getElementById("root")!).render(<App />);
