import { useEffect } from "react";
import { motion } from "framer-motion";
import posterUST from "../assets/UST.png";
import posterLectureSeries from "../assets/Lecture Series.png";
import posterGroupDiscussion from "../assets/Group Discussion.png";
import posterSpeech from "../assets/Speech Competition.png";
import posterReel from "../assets/Reel competition.png";
import posterDrawing from "../assets/Drawing Competition.png";
import posterTreasureHunt from "../assets/Treasure Hunt.png";
import posterHackathon from "../assets/Hackathon.png";
import posterProject from "../assets/Project Competition.png";
import posterYouthParliament from "../assets/Youth Parliament.png";
import posterOpenStage from "../assets/Open Stage.png";

const EVENT_DATA = {
  "event-ultimate-socio-technocrat": {
    title: "Ultimate Socio Technocrat",
    posterUrl: posterUST,
    registerUrl: "https://forms.gle/v9oVjrefsgEKrwEe6",
    teamSize: "3-5",
    entryFee: "₹100",
    about: "Compete as a socially conscious technocrat—solve civic-tech problems with impact-first thinking.",
    rulebookUrl: "/rulebooks/Ultimate Socio-Technocrat_rulebook.pdf",
    contact: [
      { name: "Coordinator 1: Prany Pakhonde", phone: "+91-8767974636" },
      { name: "Coordinator 2: Isha Khatri", phone: "+91-8446904436" }
    ],
    prizePool: "₹9,000",
    venue: "Pandhuran Bhavan"
  },
  "event-pragyan-lecture-series": {
    title: "Pragyan Lecture Series",
    posterUrl: posterLectureSeries,
    registerUrl: "https://forms.gle/U4j88Td6TJcM6Gyu9",
    teamSize: "Individual",
    entryFee: "₹100",
    about: "A two-part enlightening lecture series featuring eminent speakers with perspectives, insights, and interactive Q&A sessions.",
    rulebookUrl: "/rulebooks/Pragyan Lecture Series_Rulebook.pdf",
    contact: [
      { name: "Coordinator 1: Roshan Ithankar", phone: "+91-8459994371" },
      { name: "Coordinator 2: Tushar Talekar", phone: "+91-7507306312" }
    ],
    prizePool: "—",
    venue: "Valmiki Bhavan + Thengadi Bhavan"
  },
  "event-pragyan-panel": {
    title: "Pragyan Panel Discussion",
    posterUrl: posterLectureSeries,
    registerUrl: "https://forms.gle/U4j88Td6TJcM6Gyu9",
    teamSize: "Audience",
    entryFee: "₹100",
    about: "Experts debate contemporary topics—hear multiple sides and ask questions.",
    rulebookUrl: "/rulebooks/Panel Discussion rulebook.pdf",
    contact: [
      { name: "Coordinator 1: Rahul Trivedi", phone: "+91-8668997469" },
      { name: "Coordinator 2: Prajwala Dhurve", phone: "+91-8668997469" }
    ],
    prizePool: "—",
    venue: "On Ground"
  },
  "event-speech": {
    title: "Speech — Vak Yadnah",
    posterUrl: posterSpeech,
    registerUrl: "https://forms.gle/U4j88Td6TJcM6Gyu9",
    teamSize: "Individual",
    entryFee: "₹100",
    about: "Craft compelling arguments and deliver memorable speeches.",
    rulebookUrl: "/rulebooks/Speech Competition_Rulebook.pdf",
    contact: [
      { name: "Coordinator 1: Krish Agrawal", phone: "+91-8956369613" },
      { name: "Coordinator 2: Vaishnavi Mamulkar", phone: "+91-9699836744" },
      { name: "Coordinator 3: V.S Pavitra", phone: "+91-8208213286" }
    ],
    prizePool: "₹6,000",
    venue: "Madhav Bhavan"
  },
  "event-reel-making": {
    title: "Reel Making — Silver Screen",
    posterUrl: posterReel,
    registerUrl: "https://forms.gle/U4j88Td6TJcM6Gyu9",
    teamSize: "Individual",
    entryFee: "₹100",
    about: "Make creative reels—story, edit, and wow the audience.",
    rulebookUrl: "/rulebooks/Silver screen_rulebook.pdf",
    contact: [
      { name: "Coordinator 1: Shreenath Dhole", phone: "+91-9637594399" },
      { name: "Coordinator 2: Pranay Surtavanshi", phone: "+91-9309553192" }
    ],
    prizePool: "₹6,000",
    venue: "Yadav Bhavan"
  },
  "event-drawing": {
    title: "Drawing — Aakriti",
    posterUrl: posterDrawing,
    registerUrl: "https://forms.gle/U4j88Td6TJcM6Gyu9",
    teamSize: "Individual",
    entryFee: "₹100",
    about: "Showcase your art skills—theme-based drawing challenge.",
    rulebookUrl: "/rulebooks/Drawing Competition P.pdf",
    contact: [
      { name: "Coordinator 1: Vedant Satpaise", phone: "+91-7057458920" },
      { name: "Coordinator 2: Prachiti Kothekar", phone: "+91-9172013926" },
      { name: "Coordinator 3: Abha Medpilwar", phone: "+91-9588690401" }
    ],
    prizePool: "₹6,000",
    venue: "Madhav Bhavan"
  },
  "event-treasure-hunt": {
    title: "Treasure Hunt — Advay Shodh",
    posterUrl: posterTreasureHunt,
    registerUrl: "https://forms.gle/oGW1TA2f7tm9dNwC7",
    teamSize: "3-5 (Individual entries allowed - teams will be formed on spot)",
    entryFee: "₹100 per team",
    about: "Solve clues, race through campus, and find the treasure!",
    rulebookUrl: "/rulebooks/Treasure Hunt_rulebook.pdf",
    contact: [
      { name: "Coordinator 1: Devansh Burhade", phone: "+91-9673903008" },
      { name: "Coordinator 2: Charvi Khandar", phone: "+91-7385395360" }
    ],
    prizePool: "₹9,000",
    venue: "Maharshi Vyas Sabagruh"
  },
  "event-hackathon": {
    title: "Hackathon — Sankalpthon",
    posterUrl: posterHackathon,
    registerUrl: "https://forms.gle/jYBbkYTwhuWBqRDS7",
    teamSize: "1-4",
    entryFee: "₹100/- per person",

    about: "A national-level 24-hour innovation challenge where teams solve real-world problem statements, earn XP, and build prototypes to top the live leaderboard.",
    rulebookUrl: "/rulebooks/Hackathon_rulebook.pdf",
    contact: [
      { name: "Coordinator 1: Yashpal Chandewar", phone: "+91-7821903083" },
      { name: "Coordinator 2: Samruddhi Raut", phone: "+91-7248940875" }
    ],
    prizePool: "₹21,000",
    venue: "Ramdeobaba University"
  },
  "event-project": {
    title: "Project Competition — Prayog Manthan",
    posterUrl: posterProject,
    registerUrl: "https://forms.gle/EoreVKfNNV2fiPMa6",
    teamSize: "Free (Any team size)",
    entryFee: "₹100 per project",
    about: "Showcase your prototypes — circuits, hardware, and smart systems.",
    rulebookUrl: "/rulebooks/Project Competition_Rulebook.pdf",
    contact: [
      { name: "Coordinator 1: Tejas Chaudhary", phone: "+91-9356802767" },
      { name: "Coordinator 2: Vaishnavi Bobade", phone: "+91-7666469109" }
    ],
    prizePool: "₹10,000",
    venue: "Expo Hall"
  },
  "event-yuva-sansad": {
    title: "Youth Parliament — Yuva Sansad",
    posterUrl: posterYouthParliament,
    registerUrl: "https://forms.gle/eXWMZwZfMf5ApNZSA",
    teamSize: "Individual",
    entryFee: "₹100",
    about: "Leadership and governance simulation — debate policies and propose solutions.",
    rulebookUrl: "/rulebooks/Youth Parliament_Rulebook.pdf",
    contact: [
      { name: "Coordinator 1: Ankit Chandrakar", phone: "+91-8308877784" },
      { name: "Coordinator 2: Dayal Ghoble", phone: "+91-9545274943" },
      { name: "Coordinator 3: Shushobhita Mallick", phone: "+91-9518545205" }
    ],
    prizePool: "₹8,000",
    venue: "Yadav Bhavan (Ground Floor) - Round 1, Maharshi Vyas Sabagruh - Round 2"
  },
  "event-group-discussion": {
    title: "Group Discussion — Manthnath Amrutam",
    posterUrl: posterGroupDiscussion,
    registerUrl: "https://forms.gle/U4j88Td6TJcM6Gyu9",
    teamSize: "Individual",
    entryFee: "₹100",
    about: "Demonstrate your communication and critical thinking skills in a structured group discussion on contemporary topics.",
    rulebookUrl: "/rulebooks/Group discussion_RULEBOOK.pdf",
    contact: [
      { name: "Coordinator 1: Raj Chaudhari", phone: "+91-9145552333" },
      { name: "Coordinator 2: Chiraye Patle", phone: "+91-8793801526" },
      { name: "Coordinator 3: Sanwedana Lokhande", phone: "+91-9834705122" }
    ],
    prizePool: "₹6,000",
    venue: "Yadav Bhavan"
  },
  "event-open-stage": {
    title: "Open Stage — Rang Manch",
    posterUrl: posterOpenStage,
    registerUrl: "https://forms.gle/LPGtSnCmAaDgwGYD9",
    teamSize: "Solo/Duo/Group",
    entryFee: "₹100",
    about: "A free stage to showcase any talent — music, dance, poetry, and more.",
    rulebookUrl: "/rulebooks/Open Stage_rulebook.pdf",
    contact: [
      { name: "Coordinator 1: Siddeshawar Madne", phone: "+91-8767492833" },
      { name: "Coordinator 2: Prachi Nitnaware", phone: "+91-7841886750" }
    ],
    prizePool: "₹6,000",
    venue: "Main Stage"
  }
};

export default function EventDetails({ route, onNavigate }) {
  const data = EVENT_DATA[route];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [route]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="text-center text-white">
          <p className="text-2xl font-bold mb-4">Event page not found</p>
          <button className="px-6 py-3 bg-white/20 border border-white/40 rounded-lg" onClick={() => onNavigate('events')}>Back to Events</button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen relative pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Top Nav */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md px-4 sm:px-6 py-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <button className="text-white/80 hover:text-white text-sm sm:text-base" onClick={() => onNavigate('events')}>← Back</button>
          <span className="font-bold text-sm sm:text-base">Abhyudaya Events</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 items-start">
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-5xl font-black mb-4">{data.title}</h1>
            <p className="text-white/80 mb-6">{data.about}</p>

            {/* Quick Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <InfoCard label="Team Size" value={data.teamSize} />
              <InfoCard label="Entry Fee (per person)" value={data.entryFee} />
              {data.prizePool !== "—" && <InfoCard label="Prize Pool" value={data.prizePool} />}
            </div>

            {/* Rulebook */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-3">Rulebook</h2>
              <a href={data.rulebookUrl} target="_blank" rel="noreferrer" className="inline-block px-5 py-3 bg-white text-black rounded-lg font-bold">View Rulebook</a>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold mb-3">Contact</h2>
              <div className="space-y-2">
                {data.contact.map((c, i) => (
                  <div key={i} className="text-white/90">{c.name} — {c.phone}</div>
                ))}
              </div>
            </section>
          </div>

          {/* Poster + Register */}
          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden border border-white/20 bg-white/5">
              <img
                src={data.posterUrl}
                alt={`${data.title} poster for Abhyudaya 2025 in Nagpur`}
                loading="lazy"
                decoding="async"
                className="w-full h-auto"
              />
            </div>
            <a href={data.registerUrl} target="_blank" rel="noreferrer" className="block text-center px-6 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full font-black">Register Here</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="p-4 rounded-lg bg-white/10 border border-white/10">
      <div className="text-white/60 text-xs uppercase tracking-wide">{label}</div>
      <div className="text-white font-bold">{value}</div>
    </div>
  );
}
