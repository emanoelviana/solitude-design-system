import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import FoundationsPage from "../pages/foundations/FoundationsPage";
import ComponentsPage from "../pages/components/ComponentsPage";
import AboutPage from "../pages/about/AboutPage";
import OverviewPage from "../pages/overview/OverviewPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <OverviewPage />,
      },
      {
        path: "foundations",
        element: <FoundationsPage />,
      },
      {
        path: "components",
        element: <ComponentsPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);
