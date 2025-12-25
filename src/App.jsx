import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/header/main/Header";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToPage = (index) => {
    switch (index) {
      case 1:
        navigate("/");
        break;
      case 2:
        navigate("/foundations");
        break;
      case 3:
        navigate("/components");
        break;
      case 4:
        navigate("/about");
        break;
    }
  };

  return (
    <main className="h-full grid grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="lg:flex overflow-scroll overflow-x-hidden ml-0 lg:ml-70">
        <Sidebar />
        <Outlet />
      </div>
      <Navbar
        action1={() => navigateToPage(1)}
        action2={() => navigateToPage(2)}
        action3={() => navigateToPage(3)}
        action4={() => navigateToPage(4)}
        pathName={location.pathname}
      />
    </main>
  );
}

export default App;
