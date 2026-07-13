import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ProfileEditorPro from "./ProfileEditorPro.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProfileEditorPro />
  </StrictMode>,
);
