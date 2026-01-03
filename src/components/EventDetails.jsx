import { motion } from "framer-motion";

const EVENT_DATA = {
  "event-ultimate-socio-technocrat": {
    title: "Ultimate Socio Technocrat",
    posterUrl: "/assets/ust-poster.jpg",
    registerUrl: "https://forms.gle/v9oVjrefsgEKrwEe6",
    teamSize: "1-3",
    entryFee: "₹100",
    perks: ["Certificates", "Recognition"],
    about: "Compete as a socially conscious technocrat—solve civic-tech problems with impact-first thinking.",
    rounds: [
      { name: "Prelims", detail: "Problem pitch" },
      { name: "Final", detail: "Presentation + Q&A" }
    ],
    rulebookUrl: "https://example.com/ust-rulebook.pdf",
    contact: [{ name: "Coordinator", phone: "+91-9555555555" }],
    prizePool: "₹9,000",
    venue: "Pandhuran Bhavan"
  },
  "event-pragyan-lecture-series": {
    title: "Pragyan Lecture Series",
    posterUrl: "/assets/pragyan-lecture.jpg",
    registerUrl: "https://forms.gle/your-pragyan-lectures",
    teamSize: "Individual",
    entryFee: "₹100",
    perks: ["Certificates"],
    about: "A two-part enlightening lecture series featuring eminent speakers with perspectives, insights, and interactive Q&A sessions.",
    rounds: [
      { name: "Lecture 1", detail: "First talk + Q&A" },
      { name: "Lecture 2", detail: "Second talk + Q&A" }
    ],
    rulebookUrl: "https://example.com/pragyan-lecture-series.pdf",
    contact: [{ name: "Coordinator", phone: "+91-9666666666" }],
    prizePool: "—",
    venue: "Valmiki Bhavan + Thengadi Bhavan"
  },
  "event-pragyan-panel": {
    title: "Pragyan Panel Discussion",
    posterUrl: "/assets/pragyan-panel.jpg",
    registerUrl: "https://forms.gle/your-panel",
    teamSize: "Audience",
    entryFee: "₹100",
    perks: ["Certificates"],
    about: "Experts debate contemporary topics—hear multiple sides and ask questions.",
    rounds: [{ name: "Panel", detail: "Discussion + Audience Q&A" }],
    rulebookUrl: "https://example.com/panel-details.pdf",
    contact: [{ name: "Coordinator", phone: "+91-9888888888" }],
    prizePool: "—",
    venue: "On Ground"
  },
  "event-speech": {
    title: "Speech Competition",
    posterUrl: "/assets/speech.jpg",
    registerUrl: "https://forms.gle/your-speech",
    teamSize: "Individual",
    entryFee: "₹100",
    perks: ["Certificates"],
    about: "Craft compelling arguments and deliver memorable speeches.",
    rounds: [
      { name: "Prelims", detail: "Prepared speech" },
      { name: "Final", detail: "Extempore" }
    ],
    rulebookUrl: "https://example.com/speech-rulebook.pdf",
    contact: [{ name: "Coordinator", phone: "+91-9898989898" }],
    prizePool: "₹6,000",
    venue: "Madhav Bhavan"
  },
  "event-reel-making": {
    title: "Reel Making Competition",
    posterUrl: "/assets/reel.jpg",
    registerUrl: "https://forms.gle/your-reel",
    teamSize: "1-3",
    entryFee: "₹100",
    perks: ["Certificates", "Social Feature"],
    about: "Make creative reels—story, edit, and wow the audience.",
    rounds: [{ name: "Submission", detail: "Online reel submission" }],
    rulebookUrl: "https://example.com/reel-rulebook.pdf",
    contact: [{ name: "Coordinator", phone: "+91-9797979797" }],
    prizePool: "₹6,000",
    venue: "Yadav Bhavan"
  },
  "event-drawing": {
    title: "Drawing Competition",
    posterUrl: "/assets/drawing.jpg",
    registerUrl: "https://forms.gle/your-drawing",
    teamSize: "Individual",
    entryFee: "₹100",
    perks: ["Certificates"],
    about: "Showcase your art skills—theme-based drawing challenge.",
    rounds: [{ name: "On-site", detail: "Timed drawing" }],
    rulebookUrl: "https://example.com/drawing-rulebook.pdf",
    contact: [{ name: "Coordinator", phone: "+91-9686868686" }],
    prizePool: "₹6,000",
    venue: "Madhav Bhavan"
  },
  "event-treasure-hunt": {
    title: "Treasure Hunt",
    posterUrl: "/assets/treasure-hunt.jpg",
    registerUrl: "https://forms.gle/your-treasure",
    teamSize: "2-4",
    entryFee: "₹100 per team",
    perks: ["Certificates", "Fun"],
    about: "Solve clues, race through campus, and find the treasure!",
    rounds: [{ name: "Hunt", detail: "Clue chase" }],
    rulebookUrl: "https://example.com/treasure-rulebook.pdf",
    contact: [{ name: "Coordinator", phone: "+91-9676767676" }],
    prizePool: "₹9,000",
    venue: "Maharshi Vyas Sabagruh"
  },
  "event-hackathon": {
    title: "Hackathon — Sankalpthon",
    posterUrl: "/assets/hackathon-poster.jpg", // replace with actual path
    registerUrl: "https://forms.gle/your-hackathon-form", // replace
    teamSize: "1-4",
    entryFee: "₹100 per team",
    perks: ["Certificates", "Goodies", "Mentorship", "Food"],
    about: "A national-level 24-hour innovation challenge where teams solve real-world problem statements, earn XP, and build prototypes to top the live leaderboard.",
    rounds: [
      { name: "Round 1", detail: "Ideation + Initial prototype (6 hours)" },
      { name: "Round 2", detail: "Build + Integrate (12 hours)" },
      { name: "Final", detail: "Demo + Judging (6 hours)" }
    ],
    rulebookUrl: "https://example.com/hackathon-rulebook.pdf",
    contact: [
      { name: "Coordinator 1", phone: "+91-9000000000" },
      { name: "Coordinator 2", phone: "+91-9111111111" }
    ],
    prizePool: "₹21,000",
    venue: "Ramdeobaba University"
  },
  "event-project": {
    title: "Project Competition — Pradarshanam",
    posterUrl: "/assets/project-poster.jpg",
    registerUrl: "https://forms.gle/your-project-form",
    teamSize: "1-3",
    entryFee: "₹100 per project",
    perks: ["Certificates", "Showcase", "Feedback"],
    about: "Showcase your prototypes — circuits, hardware, and smart systems.",
    rounds: [
      { name: "Screening", detail: "Abstract submission" },
      { name: "Demo", detail: "On-site prototype demo" }
    ],
    rulebookUrl: "https://example.com/project-rulebook.pdf",
    contact: [{ name: "Coordinator", phone: "+91-9222222222" }],
    prizePool: "₹10,000",
    venue: "Expo Hall"
  },
  "event-yuva-sansad": {
    title: "Youth Parliament — Yuva Sansad",
    posterUrl: "/assets/yuva-sansad-poster.jpg",
    registerUrl: "https://forms.gle/your-yuva-form",
    teamSize: "Individual",
    entryFee: "₹100",
    perks: ["Certificates", "Best Speaker Award"],
    about: "Leadership and governance simulation — debate policies and propose solutions.",
    rounds: [
      { name: "Prelims", detail: "Policy pitch" },
      { name: "Final", detail: "Debate in house" }
    ],
    rulebookUrl: "https://example.com/yuva-rulebook.pdf",
    contact: [{ name: "Coordinator", phone: "+91-9333333333" }],
    prizePool: "₹8,000",
    venue: "Yadav Bhavan (Ground Floor) - Round 1, Maharshi Vyas Sabagruh - Round 2"
  },
  "event-group-discussion": {
    title: "Group Discussion",
    posterUrl: "/assets/group-discussion.jpg",
    registerUrl: "https://forms.gle/your-group-discussion",
    teamSize: "4-6",
    entryFee: "₹100",
    perks: ["Certificates"],
    about: "Demonstrate your communication and critical thinking skills in a structured group discussion on contemporary topics.",
    rounds: [
      { name: "Prelims", detail: "Topic presentation" },
      { name: "Final", detail: "Group discussion" }
    ],
    rulebookUrl: "https://example.com/group-discussion-rulebook.pdf",
    contact: [{ name: "Coordinator", phone: "+91-9555555556" }],
    prizePool: "₹6,000",
    venue: "Yadav Bhavan"
  },
  "event-open-stage": {
    title: "Open Stage",
    posterUrl: "/assets/open-stage-poster.jpg",
    registerUrl: "https://forms.gle/your-open-stage-form",
    teamSize: "Solo/Duo/Group",
    entryFee: "₹100",
    perks: ["Certificates", "Stage Photos"],
    about: "A free stage to showcase any talent — music, dance, poetry, and more.",
    rounds: [{ name: "Performance", detail: "Live showcase" }],
    rulebookUrl: "https://example.com/open-stage-rulebook.pdf",
    contact: [{ name: "Coordinator", phone: "+91-9444444444" }],
    prizePool: "₹6,000",
    venue: "Main Stage"
  }
};

export default function EventDetails({ route, onNavigate }) {
  const data = EVENT_DATA[route];

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
              <InfoCard label="Entry Fee" value={data.entryFee} />
              <InfoCard label="Prize Pool" value={data.prizePool} />
              <InfoCard label="Venue" value={data.venue} />
              <InfoCard label="Perks" value={data.perks.join(', ')} />
            </div>

            {/* Rounds */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-3">Rounds</h2>
              <div className="space-y-3">
                {data.rounds.map((r, i) => (
                  <div key={i} className="p-4 rounded-lg bg-white/10 border border-white/10">
                    <div className="font-semibold">{r.name}</div>
                    <div className="text-white/80 text-sm">{r.detail}</div>
                  </div>
                ))}
              </div>
            </section>

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
              <img src={data.posterUrl} alt={`${data.title} poster`} className="w-full h-auto" />
            </div>
            <a href={data.registerUrl} target="_blank" rel="noreferrer" className="block text-center px-6 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full font-black">Register</a>
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
