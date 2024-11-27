import { Outlet } from "react-router-dom";
import { Navbar } from "../Component/Navbar";
import { Footer } from "../Component/Footer";

export const MainLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};
