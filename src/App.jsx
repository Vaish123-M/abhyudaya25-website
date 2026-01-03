import { useEffect, useState } from "react";
import IntroScreen from "./components/IntroScreen";
import MainScreen from "./components/MainScreen";
import EventsPage from "./components/EventsPage";
import EventDetails from "./components/EventDetails";
import Theme from "./components/Theme";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState("intro");

  useEffect(() => {
    const titleMap = {
      intro: "Abhyudaya 2026 | Welcome",
      home: "Abhyudaya 2026 | Home",
      events: "Abhyudaya 2026 | Events",
      theme: "Abhyudaya 2026 | Theme",
      about: "Abhyudaya 2026 | About",
      contact: "Abhyudaya 2026 | Contact",
    };

    const descriptionMap = {
      intro: "Abhyudaya 2026 — socio-tech and cultural fest with competitions, lectures, and showcases.",
      home: "Discover Abhyudaya 2026 events, highlights, and how to participate.",
      events: "Browse Abhyudaya 2026 events with prize pools, venues, and registrations.",
      theme: "Learn about the Abhyudaya 2026 theme and vision.",
      about: "Know more about Abhyudaya 2026 and the organizing team.",
      contact: "Reach the Abhyudaya 2026 team for queries and partnerships.",
      event: "Explore event details, prize pools, venues, and registration links.",
    };

    const isEvent = currentPage.startsWith("event-");
    const nextTitle = isEvent ? "Abhyudaya 2026 | Event Details" : titleMap[currentPage] || "Abhyudaya 2026";
    const nextDescription = isEvent ? descriptionMap.event : descriptionMap[currentPage] || descriptionMap.intro;

    document.title = nextTitle;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute("content", nextDescription);
  }, [currentPage]);

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

  // Event details routes: currentPage values starting with 'event-'
  if (currentPage.startsWith("event-")) {
    return <EventDetails route={currentPage} onNavigate={setCurrentPage} />;
  }

  return <MainScreen onNavigate={setCurrentPage} />;
}
