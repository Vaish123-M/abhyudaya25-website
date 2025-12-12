import { useState } from "react";
import IntroScreen from "./components/IntroScreen";
import MainScreen from "./components/MainScreen";
import EventsPage from "./components/EventsPage";
import Theme from "./components/Theme";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState("intro");

  if (currentPage === "intro") {
    return <IntroScreen onEnter={() => setCurrentPage("home")} />;
  }

  if (currentPage === "events") {
    return <EventsPage onNavigate={setCurrentPage} />;
  }

  if (currentPage === "theme") {
    return <Theme onNavigate={setCurrentPage} />;
  }

  if (currentPage === "about") {
    return <AboutUs onNavigate={setCurrentPage} />;
  }

  if (currentPage === "contact") {
    return <Contact onNavigate={setCurrentPage} />;
  }

  return <MainScreen onNavigate={setCurrentPage} />;
}
