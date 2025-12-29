import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./styles/main.css";

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={routes} />
    <Analytics />
    <SpeedInsights />
  </>
);
