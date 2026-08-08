import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { MobileMenu } from "./components/MobileMenu";
import { Navbar } from "./components/Navbar";
import { ScrollProgress } from "./components/ScrollProgress";
import { Sidebar } from "./components/Sidebar";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { GitHubActivity } from "./components/sections/GitHubActivity";
import { Home } from "./components/sections/Home";
import { Projects } from "./components/sections/Projects";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <ScrollProgress />
        <Sidebar />
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main className="lg:pl-[280px]">
          <Home />
          <About />
          <Projects />
          <GitHubActivity />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
