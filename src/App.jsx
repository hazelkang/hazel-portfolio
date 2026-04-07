import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, ChevronRight, ChevronDown, GraduationCap, Briefcase, BookOpen, FlaskConical, Users, Award, ArrowUp, Globe, Brain, BarChart3, Beaker, MessageSquare, Heart, Star, Quote } from "lucide-react";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, Cell, PieChart, Pie } from "recharts";

/* ─── Color Palette ─── */
const C = {
  indigo: "#4F46E5", indigoLight: "#818CF8", indigoBg: "#EEF2FF",
  teal: "#0D9488", tealLight: "#5EEAD4", tealBg: "#F0FDFA",
  coral: "#F43F5E", coralLight: "#FDA4AF", coralBg: "#FFF1F2",
  amber: "#F59E0B", amberLight: "#FCD34D", amberBg: "#FFFBEB",
  violet: "#7C3AED", violetLight: "#A78BFA", violetBg: "#F5F3FF",
  slate: "#1E293B", slateLight: "#64748B",
};

const GRAD = {
  hero: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 40%, #F43F5E 100%)",
  tealCoral: "linear-gradient(135deg, #0D9488 0%, #F43F5E 100%)",
  indigoViolet: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
  warm: "linear-gradient(135deg, #F59E0B 0%, #F43F5E 100%)",
};

const navItems = ["Home", "About", "Research", "Projects", "Teaching", "Experience", "Contact"];

/* ─── Shared Components ─── */
function Nav({ active, setActive }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-lg z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => setActive("Home")} className="text-xl" style={{ background: GRAD.hero, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontFamily: "'Georgia', 'Times New Roman', serif", fontStyle: "italic", fontWeight: 500, letterSpacing: "0.5px" }}>hazel kang</button>
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button key={item} onClick={() => setActive(item)}
              className={`text-sm tracking-wide transition-all ${active === item ? "text-indigo-600 font-semibold" : "text-gray-400 hover:text-gray-700"}`}>
              {item}
            </button>
          ))}
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-600">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d={menuOpen ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} /></svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-4">
          {navItems.map((item) => (
            <button key={item} onClick={() => { setActive(item); setMenuOpen(false); }}
              className={`block py-3 text-sm w-full text-left border-b border-gray-50 ${active === item ? "text-indigo-600 font-semibold" : "text-gray-500"}`}>
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function SectionTitle({ children, sub, color = C.indigo }) {
  return (
    <div className="mb-12">
      <h2 className="text-4xl font-bold tracking-tight" style={{ color: C.slate }}>{children}</h2>
      {sub && <p className="mt-2 text-sm tracking-widest uppercase font-medium" style={{ color }}>{sub}</p>}
      <div className="w-16 h-1 rounded-full mt-4" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
    </div>
  );
}

function Card({ children, className = "", accent }) {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 relative overflow-hidden ${className}`}>
      {accent && <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl" style={{ background: accent }} />}
      {children}
    </div>
  );
}

function Tag({ children, color = C.indigo }) {
  return (
    <span className="inline-block text-xs px-3 py-1 rounded-full font-medium"
      style={{ background: color + "15", color }}>
      {children}
    </span>
  );
}

function IconCircle({ Icon, color, size = 36 }) {
  return (
    <div className="flex items-center justify-center rounded-xl" style={{ width: size, height: size, background: color + "15" }}>
      <Icon size={size * 0.5} style={{ color }} />
    </div>
  );
}

function StatCard({ value, label, color }) {
  return (
    <div className="text-center p-4">
      <p className="text-3xl font-bold" style={{ color }}>{value}</p>
      <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">{label}</p>
    </div>
  );
}

/* ─── HOME ─── */
function Home({ setActive }) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: C.indigo }} />
      <div className="absolute bottom-20 left-0 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ background: C.coral }} />
      <div className="absolute top-40 left-1/4 w-64 h-64 rounded-full opacity-5 blur-3xl" style={{ background: C.teal }} />

      <div className="max-w-3xl text-center relative z-10">
        {/* Profile Photo */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full p-1" style={{ background: GRAD.hero }}>
              <div className="w-full h-full rounded-full border-4 border-white overflow-hidden">
                <img src="/profile.jpeg" alt="Hazel Hyeseung Kang" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg" style={{ background: C.teal }}>
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            </div>
          </div>
        </div>
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-none mb-4">
          <span style={{ background: GRAD.hero, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Hazel</span>
          <br />
          <span className="text-gray-900">Hyeseung Kang</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-8">
          Mixed methods researcher translating complex user behavior into actionable insights with <span className="font-semibold" style={{ color: C.indigo }}>AI/LLM tools</span>, <span className="font-semibold" style={{ color: C.teal }}>experimentation</span>, and <span className="font-semibold" style={{ color: C.coral }}>cross-functional collaboration</span>.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["UX Researcher", "Information Systems", "10+ Years Experience", "5 Countries"].map((t, i) => (
            <Tag key={i} color={[C.indigo, C.teal, C.coral, C.amber][i]}>{t}</Tag>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a href="mailto:kanghazel1@gmail.com" className="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors">
            <Mail size={16} /> kanghazel1@gmail.com
          </a>
          <a href="https://linkedin.com/in/hazel-hyeseung-kang" target="_blank" rel="noreferrer"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors">
            <Linkedin size={16} /> LinkedIn
          </a>
          <span className="flex items-center gap-2 text-sm text-gray-400"><MapPin size={16} /> Boston, MA</span>
        </div>

        <div className="flex justify-center gap-3">
          <button onClick={() => setActive("Projects")}
            className="inline-flex items-center gap-2 text-white text-sm px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            style={{ background: GRAD.hero }}>
            View Projects <ChevronRight size={16} />
          </button>
          <button onClick={() => setActive("Research")}
            className="inline-flex items-center gap-2 text-sm px-6 py-3 rounded-full font-medium border-2 transition-colors"
            style={{ borderColor: C.indigo, color: C.indigo }}>
            Research
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT ─── */
function About() {
  const education = [
    { degree: "Ph.D., Information Systems", school: "Boston University, Questrom School of Business", year: "Expected 2027", detail: "Advisor: Prof. Dokyun (DK) Lee", color: C.indigo },
    { degree: "M.A., Economics", school: "Yonsei University, Seoul", year: "2017", detail: "Advisor: Prof. Youjin Hahn", color: C.teal },
    { degree: "B.A., Economics", school: "Yonsei University, Underwood International College", year: "2015", detail: "", color: C.amber },
  ];
  const skillCategories = [
    { label: "Research Methods", icon: Beaker, color: C.indigo, skills: ["1:1 IDIs", "Focus Groups", "Usability Testing", "Home Usage Tests", "Surveys", "Journey Mapping", "Task Analysis", "Concept Testing"] },
    { label: "Quantitative", icon: BarChart3, color: C.teal, skills: ["A/B Testing", "Field Experiments", "Causal Inference", "Regression", "ANOVA", "Panel Data", "Survival Analysis", "Clustering (GMM)"] },
    { label: "AI & LLM", icon: Brain, color: C.coral, skills: ["Claude (Desktop/CLI/Code/MCP)", "OpenAI API", "Google API", "Prompt Engineering", "RAG", "Pipeline Automation"] },
    { label: "Technical", icon: Globe, color: C.amber, skills: ["Python", "R", "SQL", "Stata", "LaTeX", "Git", "Qualtrics", "Google Analytics"] },
  ];
  return (
    <section className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-5xl mx-auto">
        <SectionTitle sub="Background & Skills" color={C.teal}>About Me</SectionTitle>

        <div className="grid md:grid-cols-5 gap-8 mb-16">
          <div className="md:col-span-3">
            <p className="text-gray-600 leading-relaxed mb-4 text-lg">
              I'm a PhD candidate at Boston University's Questrom School of Business, researching <span className="font-semibold" style={{ color: C.indigo }}>digital persuasion</span> and <span className="font-semibold" style={{ color: C.teal }}>user behavior in online communities</span>.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Before academia, I spent two years at Kantar Korea as a UX Researcher and Project Manager, leading mixed-methods research for Fortune 500 clients including Google, YouTube, Heineken, and Shilla Duty Free across 4 countries.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I bridge rigorous research with real-world product and policy decisions. Fluent in English and Korean.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-xs uppercase tracking-widest font-medium mb-2" style={{ color: C.teal }}>Languages</p>
                <div className="flex flex-wrap gap-2">
                  <Tag color={C.teal}>English (fluent)</Tag>
                  <Tag color={C.coral}>Korean (native)</Tag>
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-medium mb-2" style={{ color: C.amber }}>Places I've Lived</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { place: "🇺🇸 USA — Boston, MA & NJ", color: C.indigo },
                    { place: "🇰🇷 South Korea — Seoul", color: C.coral },
                    { place: "🇩🇪 Germany — Bonn", color: C.amber },
                    { place: "🇮🇳 India — New Delhi", color: C.violet },
                  ].map((p, i) => <Tag key={i} color={p.color}>{p.place}</Tag>)}
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-medium mb-2" style={{ color: C.violet }}>Interests & Hobbies</p>
                <div className="flex flex-wrap gap-2">
                  {["✈️ Travel", "🥾 Hiking", "🥽 AR/VR (Meta Quest daily user)", "🌍 Cross-Cultural Exploration"].map((h, i) => <Tag key={i} color={C.violet}>{h}</Tag>)}
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-sm tracking-widest uppercase font-medium mb-4 flex items-center gap-2" style={{ color: C.indigo }}>
              <GraduationCap size={16} /> Education
            </h3>
            <div className="space-y-4">
              {education.map((e, i) => (
                <div key={i} className="pl-4" style={{ borderLeft: `3px solid ${e.color}` }}>
                  <p className="font-semibold text-sm" style={{ color: C.slate }}>{e.degree}</p>
                  <p className="text-gray-500 text-sm">{e.school}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: e.color + "15", color: e.color }}>{e.year}</span>
                    {e.detail && <span className="text-gray-400 text-xs">{e.detail.includes("DK Lee") ? <a href="https://www.bu.edu/questrom/profiles/dokyun-dk-lee/" target="_blank" rel="noreferrer" className="hover:underline">{e.detail}</a> : e.detail.includes("Youjin Hahn") ? <a href="https://yonsei.pure.elsevier.com/en/persons/youjin-hahn" target="_blank" rel="noreferrer" className="hover:underline">{e.detail}</a> : e.detail}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h3 className="text-sm tracking-widest uppercase font-medium mb-6" style={{ color: C.teal }}>Skills & Methods</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <Card key={i} accent={cat.color}>
              <div className="flex items-center gap-3 mb-4">
                <IconCircle Icon={cat.icon} color={cat.color} />
                <p className="font-semibold" style={{ color: C.slate }}>{cat.label}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s, j) => <Tag key={j} color={cat.color}>{s}</Tag>)}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── RESEARCH ─── */
function Research() {
  const authorLinks = {
    "Hazel Hyeseung Kang": "https://linkedin.com/in/hazel-hyeseung-kang",
    "Dokyun Lee": "https://www.bu.edu/questrom/profiles/dokyun-dk-lee/",
    "Emaad Manzoor": "https://scholar.google.com/citations?user=TcMyxM0AAAAJ",
    "Avi Seidmann": "https://www.bu.edu/questrom/profiles/abraham-avi-seidmann/",
    "Kathleen M. Jagodnik": "https://scholar.google.com/citations?user=kmhfiUgAAAAJ",
    "Alon Bartal": "https://scholar.google.co.il/citations?user=Z_vkNyEAAAAJ",
    "Ganni Galea Curmi": null,
    "Yongmi Kim": null,
    "Youjin Hahn": "https://yonsei.pure.elsevier.com/en/persons/youjin-hahn",
  };
  const AuthorList = ({ authors }) => (
    <span className="text-gray-500 text-sm">
      {authors.map((a, i) => (
        <span key={i}>
          {authorLinks[a.name] ? (
            <a href={authorLinks[a.name]} target="_blank" rel="noreferrer" className="hover:underline" style={{ color: a.me ? C.indigo : undefined }}>{a.name}</a>
          ) : (
            <span style={{ color: a.me ? C.indigo : undefined, fontWeight: a.me ? 600 : undefined }}>{a.name}</span>
          )}
          {a.aff && <span className="text-gray-400 text-xs"> ({a.aff})</span>}
          {i < authors.length - 1 && ", "}
        </span>
      ))}
    </span>
  );
  const papers = [
    {
      title: "When Expertise Hurts: Uncovering Costs of Reputation Systems with LLMs",
      authors: [
        { name: "Hazel Hyeseung Kang", me: true },
        { name: "Dokyun Lee" },
        { name: "Emaad Manzoor" },
      ],
      status: "In preparation for Management Science",
      color: C.indigo,
      icon: Award,
      summary: "We conduct a randomized field experiment on Reddit's r/ChangeMyView, concealing reputation badges for half of 19,965 users across 17,336 persuasion attempts. Using large language models to classify debate content, we find that reputation effects depend on argumentative context: high-status contributors lose persuasive power in subjective debates and when encountering personal experience, while mid-status contributors gain. We identify this as cognitive entrenchment \u2014 reputation systems train high-status members toward analytical rigor that backfires when empathy and perspective-taking matter, undermining deliberation's core purpose of fostering mutual understanding."
    },
    {
      title: "Quantifying Persuasion: A Logos vs. Pathos Analysis Leveraging LLMs in Consumer Evaluation",
      authors: [
        { name: "Hazel Hyeseung Kang", me: true },
        { name: "Dokyun Lee" },
      ],
      status: "Working paper",
      color: C.teal,
      icon: MessageSquare,
      summary: "Although pathos (emotional language) has been extensively explored in marketing and consumer behavior literature, logos (rational language) has not been due to the resource-intensive process of annotation. We use state-of-the-art large language models and the double machine learning framework to prompt and causally identify which logos tactics work best in the context of consumer evaluation and persuasion, controlling for high-dimensional text data. Our research considers heterogeneity in consumer motivation. Results reveal that logos has a greater impact on persuasion than pathos, with the argument from analogy being the most persuasive tactic. These findings provide new insights into the application of theoretical models in large-scale text data analysis and highlight the potential for firms to enhance their marketing strategies through tailored argumentation. Presented at INFORMS Data Science Workshop (Seattle, 2024) and INFORMS Annual Meeting (Phoenix, 2023)."
    },
    {
      title: "Mapping GLP-1 User Personas to Attrition Trajectories: Evidence from Online Health Communities",
      authors: [
        { name: "Hazel Hyeseung Kang", me: true },
        { name: "Dokyun Lee" },
        { name: "Avi Seidmann" },
        { name: "Kathleen M. Jagodnik" },
        { name: "Alon Bartal" },
        { name: "Ganni Galea Curmi" },
      ],
      status: "In data analysis",
      color: C.coral,
      icon: Users,
      summary: "Leads a health-focused study mapping GLP-1 medication (e.g., Ozempic, Wegovy) user personas across 29,000+ Reddit sessions. Applies LLM annotation to classify user discussion patterns, Gaussian Mixture Model (GMM) clustering to identify distinct persona types, and survival analysis to trace how different personas map to medication attrition trajectories over time. Integrates insights from online health communities to understand real-world medication adherence behavior."
    },
    {
      title: "Effects of Fine Dust on Subjective Well-being of Adolescents: Evidence from South Korea",
      authors: [
        { name: "Yongmi Kim", aff: "KDI" },
        { name: "Hazel Hyeseung Kang", me: true, aff: "Boston U" },
        { name: "Youjin Hahn", aff: "Yonsei U" },
      ],
      status: "In preparation for Applied Research in Quality of Life",
      color: C.amber,
      icon: Globe,
      summary: "We investigate the effect of exposure to fine dust (PM\u2081\u2080) on subjective well-being of middle and high school students in South Korea. We control for individual fixed effects to rule out issues with residential sorting and unobserved time-invariant differences across individuals. Our findings suggest that the level of PM\u2081\u2080 negatively affects the self-reported subjective well-being level of adolescents, with the effect being more concentrated among students with lower parental education and male students. We also find a non-linear effect, indicating that the negative effect of fine dust becomes weaker with a higher level of concentration.",
      link: "Fine_Dust_Slides_2024.pdf"
    },
  ];
  const talks = [
    { venue: "INFORMS Data Science Workshop", location: "Seattle, WA", year: "2024", color: C.indigo },
    { venue: "INFORMS Annual Meeting", location: "Phoenix, AZ", year: "2023", color: C.teal },
    { venue: "ISQOLS Conference", location: "Virtual", year: "2020", color: C.amber },
  ];
  return (
    <section className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-5xl mx-auto">
        <SectionTitle sub="Papers, Talks & Grants" color={C.violet}>Research</SectionTitle>

        <Card className="mb-10" accent={GRAD.indigoViolet}>
          <div className="flex items-center gap-3 mb-3">
            <IconCircle Icon={FlaskConical} color={C.violet} />
            <h3 className="font-semibold" style={{ color: C.slate }}>Research Interests</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest font-medium mb-2" style={{ color: C.indigo }}>Substantive</p>
              <div className="flex flex-wrap gap-2">
                {["Digital Persuasion", "Online Deliberation", "User Behavior", "Health Informatics", "Platform Design"].map((t, i) => <Tag key={i} color={C.indigo}>{t}</Tag>)}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-medium mb-2" style={{ color: C.violet }}>Methodological</p>
              <div className="flex flex-wrap gap-2">
                {["LLM-based Measurement", "Causal Inference with Text", "Field Experiments", "Mixed Methods", "Machine Learning"].map((t, i) => <Tag key={i} color={C.violet}>{t}</Tag>)}
              </div>
            </div>
          </div>
        </Card>

        <h3 className="text-sm tracking-widest uppercase font-medium mb-6 flex items-center gap-2" style={{ color: C.indigo }}>
          <BookOpen size={16} /> Working Papers
        </h3>
        <div className="space-y-5 mb-14">
          {papers.map((p, i) => (
            <Card key={i} accent={p.color}>
              <div className="flex gap-4">
                <IconCircle Icon={p.icon} color={p.color} size={44} />
                <div className="flex-1">
                  <p className="font-semibold leading-snug" style={{ color: C.slate }}>{p.title}</p>
                  <div className="mt-1"><AuthorList authors={p.authors} /></div>
                  <p className="text-gray-600 text-sm mt-3 leading-relaxed">{p.summary}</p>
                  <div className="flex items-center gap-3 mt-3 flex-wrap">
                    <span className="inline-block text-xs font-medium px-3 py-1 rounded-full" style={{ background: p.color + "15", color: p.color }}>{p.status}</span>
                    {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full hover:opacity-80 transition-opacity" style={{ background: p.color, color: "white" }}><BookOpen size={12} /> View Slides</a>}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm tracking-widest uppercase font-medium mb-4" style={{ color: C.teal }}>Conference Presentations</h3>
            <div className="space-y-3">
              {talks.map((t, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: t.color + "08" }}>
                  <div className="w-2 h-2 rounded-full" style={{ background: t.color }} />
                  <div className="flex-1">
                    <p className="text-sm font-medium" style={{ color: C.slate }}>{t.venue}</p>
                    <p className="text-gray-400 text-xs">{t.location}</p>
                  </div>
                  <span className="text-sm font-semibold" style={{ color: t.color }}>{t.year}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm tracking-widest uppercase font-medium mb-4 flex items-center gap-2" style={{ color: C.amber }}>
              <Award size={16} /> Grants & Awards
            </h3>
            <div className="space-y-3">
              {[
                { name: "OpenAI Research Grant", amount: "$5,000", color: C.indigo },
                { name: "Google Cloud Credit (Gemma 2)", amount: "$10,000", color: C.teal },
                { name: "Questrom PhD Conference Funding", amount: "2023–24", color: C.violet },
                { name: "BK21 Graduate Scholarship, Yonsei", amount: "2015–16", color: C.amber },
              ].map((g, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl" style={{ background: g.color + "08" }}>
                  <p className="text-sm font-medium" style={{ color: C.slate }}>{g.name}</p>
                  <span className="text-sm font-bold whitespace-nowrap ml-3" style={{ color: g.color }}>{g.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PROJECTS (with methodology visuals) ─── */

/* Dorco HUT - Illustrative radar chart of usability attributes */
function DorcoRadarChart() {
  const data = [
    { attr: "Skin Gentleness", ProductA: 88, ProductB: 78, fullMark: 100 },
    { attr: "Grip", ProductA: 92, ProductB: 86, fullMark: 100 },
    { attr: "Handling", ProductA: 90, ProductB: 85, fullMark: 100 },
    { attr: "Closeness", ProductA: 84, ProductB: 83, fullMark: 100 },
    { attr: "Gliding", ProductA: 86, ProductB: 82, fullMark: 100 },
    { attr: "Safety", ProductA: 85, ProductB: 81, fullMark: 100 },
    { attr: "Cleaning", ProductA: 88, ProductB: 86, fullMark: 100 },
  ];
  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-100">
      <p className="text-xs uppercase tracking-widest font-medium text-center mb-2" style={{ color: C.teal }}>Illustrative: Usability Attribute Comparison</p>
      <ResponsiveContainer width="100%" height={260}>
        <RadarChart data={data}>
          <PolarGrid stroke="#e2e8f0" />
          <PolarAngleAxis dataKey="attr" tick={{ fontSize: 10, fill: "#64748B" }} />
          <PolarRadiusAxis angle={30} domain={[60, 100]} tick={false} axisLine={false} />
          <Radar name="Test Product" dataKey="ProductA" stroke={C.teal} fill={C.teal} fillOpacity={0.25} strokeWidth={2} />
          <Radar name="Competitor" dataKey="ProductB" stroke={C.coral} fill={C.coral} fillOpacity={0.1} strokeWidth={2} />
          <Legend wrapperStyle={{ fontSize: 11 }} />
        </RadarChart>
      </ResponsiveContainer>
      <p className="text-center text-gray-400 text-xs mt-1">Illustrative prototype — not actual proprietary data</p>
    </div>
  );
}

/* Dorco HUT - Rotation design visual */
function DorcoRotationVisual() {
  const groups = ["A-B-C-D", "A-B-D-C", "B-C-D-A", "B-D-A-C", "C-A-B-D", "C-D-A-B", "D-A-B-C", "D-C-A-B"];
  const colors = { A: C.teal, B: C.indigo, C: C.coral, D: C.amber };
  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-100">
      <p className="text-xs uppercase tracking-widest font-medium text-center mb-3" style={{ color: C.indigo }}>Illustrative: 12-Group Rotation Design</p>
      <div className="grid grid-cols-4 gap-1">
        <div className="text-xs font-semibold text-gray-500 text-center py-1">Group</div>
        <div className="text-xs font-semibold text-gray-500 text-center py-1">Wk 1-2</div>
        <div className="text-xs font-semibold text-gray-500 text-center py-1">Wk 3-4</div>
        <div className="text-xs font-semibold text-gray-500 text-center py-1">Samples</div>
        {groups.map((g, i) => {
          const prods = g.split("-");
          return [
            <div key={`g${i}`} className="text-xs text-gray-600 text-center py-1.5 rounded" style={{ background: i % 2 === 0 ? "#f8fafc" : "white" }}>G{i + 1}</div>,
            <div key={`a${i}`} className="flex justify-center gap-1 py-1.5 rounded" style={{ background: i % 2 === 0 ? "#f8fafc" : "white" }}>
              {prods.slice(0, 2).map((p, j) => <span key={j} className="w-5 h-5 rounded-md flex items-center justify-center text-white text-xs font-bold" style={{ background: colors[p] }}>{p}</span>)}
            </div>,
            <div key={`b${i}`} className="flex justify-center gap-1 py-1.5 rounded" style={{ background: i % 2 === 0 ? "#f8fafc" : "white" }}>
              {prods.slice(2, 4).map((p, j) => <span key={j} className="w-5 h-5 rounded-md flex items-center justify-center text-white text-xs font-bold" style={{ background: colors[p] }}>{p}</span>)}
            </div>,
            <div key={`s${i}`} className="text-xs text-gray-500 text-center py-1.5 rounded" style={{ background: i % 2 === 0 ? "#f8fafc" : "white" }}>{[14, 12, 13, 12, 14, 13, 10, 13][i]}</div>
          ];
        })}
      </div>
      <div className="flex justify-center gap-3 mt-3">
        {Object.entries(colors).map(([k, v]) => (
          <div key={k} className="flex items-center gap-1">
            <span className="w-3 h-3 rounded" style={{ background: v }} />
            <span className="text-xs text-gray-500">Product {k}</span>
          </div>
        ))}
      </div>
      <p className="text-center text-gray-400 text-xs mt-2">Illustrative prototype — not actual proprietary data</p>
    </div>
  );
}

/* Dorco HUT - Sample bar chart for satisfaction */
function DorcoSatisfactionChart() {
  const data = [
    { name: "Overall", A: 5.74, B: 5.64, C: 5.71, D: 5.35 },
    { name: "Usability", A: 5.83, B: 5.77, C: 5.86, D: 5.59 },
    { name: "Design", A: 5.89, B: 5.66, C: 5.76, D: 5.50 },
  ];
  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-100">
      <p className="text-xs uppercase tracking-widest font-medium text-center mb-2" style={{ color: C.coral }}>Illustrative: Overall Satisfaction Scores (7-pt Scale)</p>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} barCategoryGap="20%">
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#64748B" }} />
          <YAxis domain={[5, 6.2]} tick={{ fontSize: 10, fill: "#94a3b8" }} />
          <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }} />
          <Legend wrapperStyle={{ fontSize: 11 }} />
          <Bar dataKey="A" name="Test Product" fill={C.teal} radius={[4, 4, 0, 0]} />
          <Bar dataKey="B" name="Existing Product" fill={C.indigo} radius={[4, 4, 0, 0]} />
          <Bar dataKey="C" name="Competitor 1" fill={C.coral} radius={[4, 4, 0, 0]} />
          <Bar dataKey="D" name="Competitor 2" fill={C.amber} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-center text-gray-400 text-xs mt-1">Illustrative prototype — not actual proprietary data</p>
    </div>
  );
}

/* HBG - Framework diagram */
function HBGFrameworkVisual() {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100">
      <p className="text-xs uppercase tracking-widest font-medium text-center mb-4" style={{ color: C.indigo }}>Illustrative: HBG Framework Architecture</p>
      <div className="flex flex-col items-center gap-3">
        {/* Core */}
        <div className="w-full rounded-xl p-4" style={{ background: C.indigoBg }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: C.indigo }}>Core Program</p>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Brand Tracking", sub: "Weekly mobile surveys", color: C.indigo },
              { label: "Strategic Deep Dive", sub: "Annual positioning", color: C.violet },
              { label: "Social/Search Monitor", sub: "Real-time alerts", color: C.teal },
            ].map((m, i) => (
              <div key={i} className="bg-white rounded-lg p-3 text-center shadow-sm">
                <div className="w-2 h-2 rounded-full mx-auto mb-2" style={{ background: m.color }} />
                <p className="text-xs font-semibold" style={{ color: C.slate }}>{m.label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Arrow */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-0.5 rounded" style={{ background: C.coral }} />
          <span className="text-xs font-bold" style={{ color: C.coral }}>+</span>
          <div className="w-8 h-0.5 rounded" style={{ background: C.coral }} />
        </div>
        {/* Flex */}
        <div className="w-full rounded-xl p-4" style={{ background: C.coralBg }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: C.coral }}>Flex Modules (Plug & Play)</p>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Creative Dev", sub: "Neuroscience testing", color: C.coral },
              { label: "Media Deep Dive", sub: "Cross-channel ROI", color: C.amber },
              { label: "Forecasting", sub: "Sales simulation", color: C.violet },
            ].map((m, i) => (
              <div key={i} className="bg-white rounded-lg p-3 text-center shadow-sm">
                <div className="w-2 h-2 rounded-full mx-auto mb-2" style={{ background: m.color }} />
                <p className="text-xs font-semibold" style={{ color: C.slate }}>{m.label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-center text-gray-400 text-xs mt-3">Illustrative prototype — not actual proprietary framework</p>
    </div>
  );
}

/* HBG - Correlation improvement chart */
function HBGCorrelationChart() {
  const data = [
    { name: "Before HBG", correlation: 0.25 },
    { name: "After HBG", correlation: 0.87 },
  ];
  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-100">
      <p className="text-xs uppercase tracking-widest font-medium text-center mb-2" style={{ color: C.teal }}>Illustrative: Brand Metric-Sales Correlation Improvement</p>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} barCategoryGap="40%">
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#64748B", fontWeight: 600 }} />
          <YAxis domain={[0, 1]} tick={{ fontSize: 10, fill: "#94a3b8" }} />
          <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }} />
          <Bar dataKey="correlation" name="Correlation (r)" radius={[8, 8, 0, 0]}>
            <Cell fill={C.coral} />
            <Cell fill={C.teal} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="text-center text-gray-400 text-xs mt-1">Illustrative prototype — not actual proprietary data</p>
    </div>
  );
}

/* HBG - Survey length comparison */
function HBGSurveyChart() {
  const data = [
    { name: "Traditional", minutes: 15, fill: C.coral },
    { name: "HBG Mobile", minutes: 5, fill: C.teal },
  ];
  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-100">
      <p className="text-xs uppercase tracking-widest font-medium text-center mb-2" style={{ color: C.amber }}>Illustrative: Survey Length Reduction</p>
      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={data} layout="vertical" barCategoryGap="30%">
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
          <XAxis type="number" domain={[0, 20]} tick={{ fontSize: 10, fill: "#94a3b8" }} unit=" min" />
          <YAxis type="category" dataKey="name" tick={{ fontSize: 12, fill: "#64748B", fontWeight: 600 }} width={100} />
          <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }} />
          <Bar dataKey="minutes" name="Duration (min)" radius={[0, 8, 8, 0]}>
            {data.map((d, i) => <Cell key={i} fill={d.fill} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="text-center">
        <span className="inline-block text-xs font-bold px-3 py-1 rounded-full" style={{ background: C.tealBg, color: C.teal }}>66% Shorter — No Trend Loss</span>
      </div>
      <p className="text-center text-gray-400 text-xs mt-2">Illustrative prototype — not actual proprietary data</p>
    </div>
  );
}

/* BHT - Rolling 3-Month Brand Awareness Trend */
function BHTRollingChart() {
  const data = [
    { period: "Q1'16", heineken: 68, asahi: 42, hoegaarden: 38, guinness: 45 },
    { period: "Q2'16", heineken: 70, asahi: 44, hoegaarden: 41, guinness: 44 },
    { period: "Q3'16", heineken: 72, asahi: 46, hoegaarden: 43, guinness: 46 },
    { period: "Q4'16", heineken: 71, asahi: 48, hoegaarden: 45, guinness: 45 },
    { period: "Q1'17", heineken: 74, asahi: 49, hoegaarden: 47, guinness: 47 },
    { period: "Q2'17", heineken: 76, asahi: 50, hoegaarden: 49, guinness: 46 },
    { period: "Q3'17", heineken: 78, asahi: 51, hoegaarden: 50, guinness: 48 },
  ];
  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-100">
      <p className="text-xs uppercase tracking-widest font-medium text-center mb-2" style={{ color: "#16A34A" }}>Illustrative: Rolling 3-Month Brand Awareness Trend (3 MAT)</p>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="period" tick={{ fontSize: 10, fill: "#64748B" }} />
          <YAxis domain={[30, 85]} tick={{ fontSize: 10, fill: "#94a3b8" }} unit="%" />
          <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }} />
          <Legend wrapperStyle={{ fontSize: 11 }} />
          <Line type="monotone" dataKey="heineken" name="Heineken" stroke="#16A34A" strokeWidth={3} dot={{ r: 3 }} />
          <Line type="monotone" dataKey="asahi" name="Asahi" stroke="#DC2626" strokeWidth={2} dot={{ r: 2 }} />
          <Line type="monotone" dataKey="hoegaarden" name="Hoegaarden" stroke="#F59E0B" strokeWidth={2} dot={{ r: 2 }} />
          <Line type="monotone" dataKey="guinness" name="Guinness" stroke="#1E293B" strokeWidth={2} dot={{ r: 2 }} />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-center text-gray-400 text-xs mt-1">Illustrative prototype — not actual proprietary data</p>
    </div>
  );
}

/* BHT - Brand Relative Equity Score Comparison */
function BHTBrandEquityChart() {
  const data = [
    { brand: "Guinness", score: 25.0, fill: "#1E293B" },
    { brand: "Heineken", score: 23.46, fill: "#16A34A" },
    { brand: "Hoegaarden", score: 21.3, fill: "#F59E0B" },
    { brand: "Asahi", score: 20.02, fill: "#DC2626" },
  ];
  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-100">
      <p className="text-xs uppercase tracking-widest font-medium text-center mb-2" style={{ color: "#16A34A" }}>Illustrative: Relative Brand Equity Scores</p>
      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={data} layout="vertical" barCategoryGap="25%">
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
          <XAxis type="number" domain={[15, 28]} tick={{ fontSize: 10, fill: "#94a3b8" }} />
          <YAxis type="category" dataKey="brand" tick={{ fontSize: 11, fill: "#64748B", fontWeight: 600 }} width={90} />
          <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }} />
          <Bar dataKey="score" name="Equity Score" radius={[0, 8, 8, 0]}>
            {data.map((d, i) => <Cell key={i} fill={d.fill} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="text-center text-gray-400 text-xs mt-1">Illustrative prototype — not actual proprietary data</p>
    </div>
  );
}

/* BHT - Demographic Cross-Tab Segments */
function BHTDemographicChart() {
  const data = [
    { segment: "Male", awareness: 76, consideration: 52, regular: 28 },
    { segment: "Female", awareness: 72, consideration: 48, regular: 22 },
    { segment: "19-24", awareness: 65, consideration: 42, regular: 18 },
    { segment: "25-29", awareness: 78, consideration: 55, regular: 30 },
    { segment: "30-34", awareness: 80, consideration: 58, regular: 34 },
    { segment: "Heavy", awareness: 88, consideration: 68, regular: 45 },
    { segment: "Light", awareness: 62, consideration: 38, regular: 14 },
  ];
  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-100">
      <p className="text-xs uppercase tracking-widest font-medium text-center mb-2" style={{ color: C.violet }}>Illustrative: Brand Funnel by Demographic Segment</p>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data} barCategoryGap="15%">
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="segment" tick={{ fontSize: 10, fill: "#64748B" }} />
          <YAxis domain={[0, 100]} tick={{ fontSize: 10, fill: "#94a3b8" }} unit="%" />
          <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }} />
          <Legend wrapperStyle={{ fontSize: 11 }} />
          <Bar dataKey="awareness" name="Awareness" fill="#16A34A" radius={[4, 4, 0, 0]} />
          <Bar dataKey="consideration" name="Consideration" fill={C.indigo} radius={[4, 4, 0, 0]} />
          <Bar dataKey="regular" name="Regular Use" fill={C.amber} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-center text-gray-400 text-xs mt-1">Illustrative prototype — cross-tabs by gender, age, and drink frequency</p>
    </div>
  );
}

/* Google - Consumer Decision Journey Visual */
function GoogleCDJVisual() {
  const stages = [
    { name: "Awareness", platforms: [{ name: "YouTube", pct: 45, color: "#FF0000" }, { name: "Naver", pct: 38, color: "#03C75A" }, { name: "Forums", pct: 28, color: C.violet }] },
    { name: "Consideration", platforms: [{ name: "Naver", pct: 52, color: "#03C75A" }, { name: "Forums", pct: 44, color: C.violet }, { name: "Google", pct: 35, color: "#4285F4" }] },
    { name: "Evaluation", platforms: [{ name: "Forums", pct: 56, color: C.violet }, { name: "Google", pct: 48, color: "#4285F4" }, { name: "YouTube", pct: 32, color: "#FF0000" }] },
    { name: "Purchase", platforms: [{ name: "Google", pct: 42, color: "#4285F4" }, { name: "Naver", pct: 40, color: "#03C75A" }, { name: "YouTube", pct: 18, color: "#FF0000" }] },
  ];
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100">
      <p className="text-xs uppercase tracking-widest font-medium text-center mb-4" style={{ color: "#4285F4" }}>Illustrative: Category-Specific Consumer Decision Journey</p>
      <div className="flex gap-2">
        {stages.map((s, i) => (
          <div key={i} className="flex-1">
            <div className="text-center mb-3">
              <p className="text-xs font-bold" style={{ color: C.slate }}>{s.name}</p>
              <div className="w-full h-0.5 mt-1 rounded" style={{ background: `linear-gradient(90deg, #4285F4, #EA4335)`, opacity: 0.3 }} />
            </div>
            <div className="space-y-2">
              {s.platforms.map((p, j) => (
                <div key={j} className="rounded-lg p-2" style={{ background: p.color + "10" }}>
                  <p className="text-xs font-semibold" style={{ color: p.color }}>{p.name}</p>
                  <div className="w-full bg-gray-100 rounded-full h-1.5 mt-1">
                    <div className="h-1.5 rounded-full" style={{ width: `${p.pct}%`, background: p.color }} />
                  </div>
                </div>
              ))}
            </div>
            {i < stages.length - 1 && <div className="text-center mt-2 text-gray-300 text-xs">→</div>}
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-4">
        {[{ name: "YouTube", c: "#FF0000" }, { name: "Naver", c: "#03C75A" }, { name: "Forums/맘카페", c: C.violet }, { name: "Google", c: "#4285F4" }].map((p, i) => (
          <div key={i} className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded" style={{ background: p.c }} /><span className="text-xs text-gray-500">{p.name}</span></div>
        ))}
      </div>
      <p className="text-center text-gray-400 text-xs mt-2">Illustrative prototype — not actual proprietary data</p>
    </div>
  );
}

/* Google - Platform Usage Frequency Chart */
function GooglePlatformChart() {
  const data = [
    { platform: "Naver", timesPerWeek: 12.5, minPerSession: 18 },
    { platform: "Forums/맘카페", timesPerWeek: 5.2, minPerSession: 25 },
    { platform: "YouTube", timesPerWeek: 8.3, minPerSession: 22 },
    { platform: "Google", timesPerWeek: 6.1, minPerSession: 12 },
  ];
  const colors = ["#03C75A", C.violet, "#FF0000", "#4285F4"];
  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-100">
      <p className="text-xs uppercase tracking-widest font-medium text-center mb-2" style={{ color: "#4285F4" }}>Illustrative: Platform Usage Frequency (Weekly)</p>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} barCategoryGap="20%">
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="platform" tick={{ fontSize: 10, fill: "#64748B" }} />
          <YAxis yAxisId="left" tick={{ fontSize: 10, fill: "#94a3b8" }} label={{ value: "Times/week", angle: -90, position: "insideLeft", fontSize: 10, fill: "#94a3b8" }} />
          <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 10, fill: "#94a3b8" }} label={{ value: "Min/session", angle: 90, position: "insideRight", fontSize: 10, fill: "#94a3b8" }} />
          <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }} />
          <Legend wrapperStyle={{ fontSize: 11 }} />
          <Bar yAxisId="left" dataKey="timesPerWeek" name="Times/Week" radius={[4, 4, 0, 0]}>
            {data.map((d, i) => <Cell key={i} fill={colors[i]} />)}
          </Bar>
          <Bar yAxisId="right" dataKey="minPerSession" name="Min/Session" radius={[4, 4, 0, 0]}>
            {data.map((d, i) => <Cell key={i} fill={colors[i]} fillOpacity={0.4} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="text-center text-gray-400 text-xs mt-1">Illustrative prototype — not actual proprietary data</p>
    </div>
  );
}

/* Horoyoi - Consumer Persona Lifestyle Mapping */
function HoroyoiPersonaVisual() {
  const segments = [
    { name: "CONTENTMENT", emoji: "\uD83C\uDFE0", desc: "Rest at home, small happiness", color: "#F9A8D4", bg: "#FDF2F8", traits: ["So-Hwak-Haeng", "Time alone", "Netflix & comfort"] },
    { name: "CAREFREE", emoji: "\uD83C\uDF89", desc: "Fun with close friends, easy-going", color: "#F472B6", bg: "#FCE7F3", traits: ["Home party", "Chat over drinks", "Light-hearted"] },
    { name: "HARMONY", emoji: "\uD83C\uDF05", desc: "Balance, healing, relaxation", color: "#A78BFA", bg: "#F5F3FF", traits: ["Camping", "Night view", "Boyfriend/close friends"] },
    { name: "ENERGETIC", emoji: "\u26A1", desc: "Active schedules, trend-seeking", color: "#FB923C", bg: "#FFF7ED", traits: ["New experiences", "Travel", "Social media"] },
  ];
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100">
      <p className="text-xs uppercase tracking-widest font-medium text-center mb-4" style={{ color: "#EC4899" }}>Illustrative: RTD Consumer Persona Segments</p>
      <div className="grid grid-cols-2 gap-3">
        {segments.map((s, i) => (
          <div key={i} className="rounded-xl p-3" style={{ background: s.bg, border: `1.5px solid ${s.color}30` }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{s.emoji}</span>
              <p className="text-xs font-bold tracking-wide" style={{ color: s.color }}>{s.name}</p>
            </div>
            <p className="text-xs text-gray-600 mb-2">{s.desc}</p>
            <div className="flex flex-wrap gap-1">
              {s.traits.map((t, j) => (
                <span key={j} className="text-xs px-2 py-0.5 rounded-full" style={{ background: s.color + "20", color: s.color }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-gray-400 text-xs mt-3">Illustrative prototype — consumer segments from qualitative IDI analysis</p>
    </div>
  );
}

/* Horoyoi - TVC Campaign Evaluation Visual */
function HoroyoiTVCEvalVisual() {
  const tvcs = [
    { name: "Home Party", likability: 85, understandability: 88, relevance: 82, fit: 90, color: "#F472B6" },
    { name: "So-Hwak-Haeng", likability: 80, understandability: 72, relevance: 78, fit: 85, color: "#A78BFA" },
    { name: "Camping", likability: 78, understandability: 75, relevance: 70, fit: 80, color: "#FB923C" },
  ];
  const metrics = ["likability", "understandability", "relevance", "fit"];
  const metricLabels = { likability: "Likability", understandability: "Clarity", relevance: "Relevance", fit: "Brand Fit" };
  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-100">
      <p className="text-xs uppercase tracking-widest font-medium text-center mb-3" style={{ color: "#EC4899" }}>Illustrative: TVC Campaign Evaluation Matrix</p>
      <div className="space-y-4">
        {tvcs.map((tvc, i) => (
          <div key={i}>
            <p className="text-xs font-bold mb-2" style={{ color: tvc.color }}>{tvc.name}</p>
            <div className="grid grid-cols-4 gap-2">
              {metrics.map((m, j) => (
                <div key={j}>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="h-2 rounded-full transition-all" style={{ width: `${tvc[m]}%`, background: tvc.color }} />
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5 text-center">{metricLabels[m]}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-gray-400 text-xs mt-3">Illustrative prototype — not actual proprietary data</p>
    </div>
  );
}

/* ─── Actual Brand Logos as SVG ─── */
function GoogleLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59A14.5 14.5 0 019.5 24c0-1.59.28-3.14.76-4.59l-7.98-6.19A23.93 23.93 0 000 24c0 3.77.9 7.35 2.56 10.52l7.97-5.93z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 5.93C6.51 42.62 14.62 48 24 48z"/></svg>
  );
}
function YouTubeLogo({ size = 28 }) {
  return (
    <svg width={size * 1.4} height={size} viewBox="0 0 68 48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="#FF0000"/><path d="M27 34l18-10-18-10z" fill="#FFF"/></svg>
  );
}
function HeinekenLogo({ size = 28 }) {
  return (
    <svg width={size * 2.2} height={size} viewBox="0 0 120 48">
      <rect width="120" height="48" rx="8" fill="#00A650"/>
      <text x="60" y="31" textAnchor="middle" fill="white" fontFamily="Arial Black, Arial" fontWeight="900" fontSize="18" letterSpacing="2">HEINEKEN</text>
      <path d="M8 15l4-6 4 6z" fill="#FF0000" opacity="0.9"/>
    </svg>
  );
}
function DorcoLogo({ size = 28 }) {
  return (
    <svg width={size * 2} height={size} viewBox="0 0 100 48">
      <rect width="100" height="48" rx="8" fill="#1A1A2E"/>
      <text x="50" y="31" textAnchor="middle" fill="#00B4A0" fontFamily="Arial Black, Arial" fontWeight="900" fontSize="20" letterSpacing="3">DORCO</text>
    </svg>
  );
}
function ShillaLogo({ size = 28 }) {
  return (
    <svg width={size * 2.6} height={size} viewBox="0 0 140 48">
      <rect width="140" height="48" rx="8" fill="#1C1C1C"/>
      <text x="70" y="29" textAnchor="middle" fill="#C5A55A" fontFamily="Georgia, serif" fontWeight="700" fontSize="14" letterSpacing="4">SHILLA</text>
      <text x="70" y="41" textAnchor="middle" fill="#C5A55A" fontFamily="Georgia, serif" fontSize="8" letterSpacing="2">DUTY FREE</text>
    </svg>
  );
}

function HoroyoiLogo({ size = 28 }) {
  return (
    <svg width={size * 2.4} height={size} viewBox="0 0 120 48">
      <defs>
        <linearGradient id="horoyoiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F9A8D4" />
          <stop offset="50%" stopColor="#F472B6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <rect width="120" height="48" rx="10" fill="url(#horoyoiGrad)" />
      <text x="60" y="22" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="13" letterSpacing="1">HOROYOI</text>
      <text x="60" y="38" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="8" opacity="0.85" letterSpacing="0.5">Beam Suntory</text>
    </svg>
  );
}

function BrandLogo({ name, size = 28 }) {
  const logoMap = {
    Dorco: <DorcoLogo size={size} />,
    Heineken: <HeinekenLogo size={size} />,
    Google: <GoogleLogo size={size} />,
    YouTube: <YouTubeLogo size={size} />,
    "Shilla Duty Free": <ShillaLogo size={size} />,
    Horoyoi: <HoroyoiLogo size={size} />,
    Gillette: (
      <svg width={size * 2} height={size} viewBox="0 0 100 48">
        <rect width="100" height="48" rx="8" fill="#0033A0"/>
        <text x="50" y="31" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="16" letterSpacing="1">Gillette</text>
      </svg>
    ),
  };
  return <div className="flex items-center">{logoMap[name] || <span className="text-sm font-semibold">{name}</span>}</div>;
}

/* ─── Industry Category Badge ─── */
function IndustryBadge({ category, icon }) {
  const cats = {
    "Consumer Hardware": { color: "#0D9488", bg: "#F0FDFA" },
    "FMCG / Beverage": { color: "#16A34A", bg: "#F0FDF4" },
    "Tech / Digital": { color: "#4F46E5", bg: "#EEF2FF" },
    "Retail / Luxury Travel": { color: "#C5A55A", bg: "#FFFBEB" },
  };
  const c = cats[category] || { color: C.indigo, bg: C.indigoBg };
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
      style={{ background: c.bg, color: c.color, border: `1.5px solid ${c.color}30` }}>
      {icon} {category}
    </span>
  );
}

function Projects() {
  const [expanded, setExpanded] = useState("dorco");

  /* ─── Full project data (role-focused descriptions) ─── */
  const projects = [
    {
      id: "dorco",
      title: "Multi-Country Women's Razor Home Usage Test",
      brand: "Dorco",
      industry: "Consumer Hardware",
      industryIcon: "\u2699\uFE0F",
      product: "6-Blade Women's System Razor (Body Shaving)",
      year: "2018",
      color: C.teal,
      gradient: GRAD.tealCoral,
      tags: ["Home Usage Test", "Survey Design", "ANOVA", "Physical Product Ergonomics", "N=150"],
      description: "Designed the survey instrument and fieldwork protocol for a 150-person, 4-product home usage test across the US. Wrote all questionnaire items (7-point Likert scales across 13 usability attributes), built the 12-group rotation matrix to minimize order bias, authored the fieldwork guide for local agencies, and synthesized results into an executive-ready report with USP recommendations.",
      challenge: "Dorco was launching a new 6-blade women's body razor and needed to validate product competitiveness against Gillette Venus Embrace before a multi-country market launch. The study had to isolate true product differences from order and familiarity effects across 4 competing products.",
      method: "I designed the full HUT protocol: wrote the screener questionnaire and respondent selection criteria (age 20-49, weekly shavers, 5+ blade users), authored all survey items covering shaving performance, safety/gentleness, grip/handling, and cleaning. Built a 12-group Latin-square rotation matrix balanced by age and region to minimize sequential bias. Wrote the daily fieldwork monitoring guide and managed respondent compliance tracking. Ran ANOVA analysis across all 13 attributes and synthesized findings into competitive positioning deliverables.",
      findings: [
        "Test product achieved competitive parity with Gillette Venus Embrace across most usability attributes",
        "Significantly outperformed on skin gentleness and low irritation — especially on sensitive areas (bikini line), where competitors showed satisfaction drop-offs",
        "Strong handle ergonomics: highest scores on grip, handling, and handle cleaning; unique mint-tone design appeal",
        "Identified unmet needs from open-ended responses: cartridge pivot flexibility, cleaning time, and width aesthetics",
      ],
      impact: "Translated findings into a strategic report with USP positioning (gentle shaving, superior grip) and communication recommendations. Deliverables directly informed the go-to-market strategy across USA, Germany, and France.",
      competitors: ["Gillette"],
      stats: [
        { value: "150", label: "Participants" },
        { value: "4", label: "Products Tested" },
        { value: "12", label: "Rotation Groups" },
        { value: "3", label: "Countries" },
      ],
      visuals: (
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <DorcoRadarChart />
          <DorcoRotationVisual />
          <div className="md:col-span-2"><DorcoSatisfactionChart /></div>
        </div>
      )
    },
    {
      id: "hbg",
      title: "Brand Health Tracker → Brand Guidance System Transformation",
      brand: "Heineken",
      industry: "FMCG / Beverage",
      industryIcon: "\uD83C\uDF7A",
      product: "Heineken, Edelweiss, Tiger, Apple Fox (Korea Portfolio)",
      year: "2018–2019",
      color: "#16A34A",
      gradient: "linear-gradient(135deg, #16A34A 0%, #065F46 100%)",
      tags: ["Brand Health Tracking", "Survey Localization", "Cross-Country Coordination", "Rolling Panel (N≈4,883)", "Sales Data Integration", "476 Cross-Tab Tables"],
      description: "Led the transformation of Heineken Korea's brand tracking from a traditional 'Brand Health Tracker' to the new 'Brand Guidance System' (HBG). Coordinated directly with Heineken's Netherlands global team and India-based programming team to localize a ~100-country survey module for the Korean market while maintaining global data comparability. Customized the tracker for Heineken's full family of brands in Korea — including Edelweiss, Tiger, and Apple Fox — and solved the critical challenge of ensuring data continuity between the legacy 5-year module and the new HBG framework.",
      challenge: "Heineken was migrating its global brand tracking across ~100 countries from a traditional Brand Health Tracker to the new HBG system. For Korea, the challenge was threefold: localizing a global survey module for Korean consumer context, maintaining strict data comparability with 5 years of legacy tracking data, and integrating survey data with Heineken's sales and advertising data for actionable insights — all while coordinating across time zones with Netherlands HQ and India programming.",
      method: "I coordinated the three-way workflow between Heineken Netherlands (global strategy), India (survey programming), and Korea (local execution). Localized the ~100-country module by adapting question wording, brand lists, and cultural references for Korean imported-beer consumers. Built rolling 3-month aggregate (3 MAT) panel data tracking ~4,883 respondents across 14 rolling periods, with cross-tabulation by gender, age (19-24, 25-29, 30-34), drink frequency (heavy/medium/light), and brand preference segments. Managed 476 cross-tab tables covering brand awareness, usage funnels, consideration, personality attributes, ad awareness, and relative equity scores across 30+ beer brands. Combined survey tracking data with Heineken's sales data and advertising spend data to build integrated brand performance dashboards.",
      findings: [
        "Successfully maintained data comparability between the 5-year legacy module and new HBG framework, enabling unbroken trend analysis",
        "Built rolling 3-month panel tracking with demographic cross-tabs (gender, age, drink frequency, brand preference) across 14 time periods",
        "Integrated survey brand metrics with Heineken sales and advertising data, achieving .87 correlation between brand consideration and volume sales (up from .25)",
        "Customized tracking for full Heineken Korea portfolio — Heineken Regular, Edelweiss, Tiger, Apple Fox, Desperados — with brand-specific equity and personality measurement"
      ],
      impact: "Delivered a fully localized, globally comparable brand guidance system that combined survey data, sales data, and advertising data into actionable dashboards. Enabled Heineken Korea leadership to make real-time course corrections on brand strategy and campaign optimization with data refreshed on rolling 3-month cycles.",
      competitors: [],
      stats: [
        { value: "4,883", label: "Respondents" },
        { value: "476", label: "Cross-Tab Tables" },
        { value: "~100", label: "Countries" },
        { value: ".87", label: "Sales Correlation" },
      ],
      visuals: (
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <BHTRollingChart />
          <BHTBrandEquityChart />
          <BHTDemographicChart />
          <div className="flex flex-col gap-4">
            <HBGFrameworkVisual />
            <HBGCorrelationChart />
          </div>
        </div>
      )
    },
    {
      id: "google",
      title: "Online Retail Shopper — Category-Specific Consumer Decision Journeys",
      brand: "Google",
      industry: "Tech / Digital",
      industryIcon: "\uD83D\uDCBB",
      product: "Google Search, YouTube & Korean Digital Platform Ecosystem",
      year: "2018–2019",
      color: "#4285F4",
      gradient: "linear-gradient(135deg, #4285F4 0%, #EA4335 50%, #FBBC05 100%)",
      tags: ["In-Depth Interviews", "Online Survey", "CDJ Mapping", "Platform Frequency Analysis", "Baby/Pet/Interior Products"],
      description: "Designed and executed Google's 'Online Retail Shopper' study analyzing category-specific consumer decision journeys (CDJs) for baby products, pet products, and interior products in the Korean market. Quantified how consumers use Naver, online forums (맘카페), Google Search, and YouTube at each purchase funnel stage — measuring platform usage frequency (times per week) and engagement depth (minutes per session). Combined a quantitative online survey with qualitative IDI follow-up interviews to build a complete cross-platform journey framework.",
      challenge: "Google Korea needed to understand how Korean online shoppers navigate across competing platforms — Naver, specialized forums (맘카페), Google Search, and YouTube — when making purchase decisions in specific product categories. The key question: where does Google/YouTube fit in the consumer decision journey compared to dominant local platforms, and how does this vary by category?",
      method: "I designed the quantitative online survey instrument measuring platform usage frequency (times per week), session duration (minutes per session), and touchpoint role at each CDJ stage (awareness, consideration, evaluation, purchase) across three product categories: baby products, pet products, and interior products. Wrote the IDI discussion guide for qualitative follow-up interviews exploring decision-making processes and platform switching behavior in depth. Personally moderated IDIs with Korean online shoppers. Synthesized quantitative platform usage data with qualitative journey narratives to map category-specific CDJs showing how Naver, forums, Google, and YouTube each play distinct roles at different funnel stages.",
      findings: [
        "Mapped category-specific CDJs showing distinct platform roles: Naver and forums (맘카페) dominate early consideration for baby products; YouTube drives discovery for interior/home products",
        "Quantified platform usage frequency and depth — Naver averaged highest weekly visits, while forums/맘카페 showed longest session duration, indicating deep trust-based engagement",
        "Identified Google Search's strongest role in the evaluation/comparison stage, where shoppers cross-reference product specs and pricing",
        "Combined quantitative survey metrics with qualitative IDI insights to deliver executive-ready CDJ frameworks to Google Korea's cross-functional teams"
      ],
      impact: "Research directly informed Google Korea's advertising strategy and content recommendations, enabling optimized ad placement by platform role and purchase funnel stage across baby, pet, and interior product categories.",
      competitors: [],
      stats: [
        { value: "3", label: "Product Categories" },
        { value: "4", label: "Platforms Mapped" },
        { value: "IDIs", label: "Moderated" },
        { value: "Survey", label: "Designed" },
      ],
      visuals: (
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="md:col-span-2"><GoogleCDJVisual /></div>
          <GooglePlatformChart />
          <div className="bg-white rounded-2xl p-5 border border-gray-100">
            <p className="text-xs uppercase tracking-widest font-medium text-center mb-3" style={{ color: "#4285F4" }}>Category Focus Areas</p>
            <div className="space-y-3">
              {[
                { cat: "Baby Products", emoji: "\uD83D\uDC76", detail: "High trust reliance on 맘카페 forums; longest research cycles", color: "#EA4335" },
                { cat: "Pet Products", emoji: "\uD83D\uDC3E", detail: "YouTube discovery-driven; strong visual/review content engagement", color: "#FBBC05" },
                { cat: "Interior Products", emoji: "\uD83C\uDFE0", detail: "Cross-platform comparison shopping; Google Search peaks at evaluation", color: "#4285F4" },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: c.color + "08" }}>
                  <span className="text-xl">{c.emoji}</span>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: C.slate }}>{c.cat}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{c.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: "shilla",
      title: "Changi Airport Duty-Free Bid — Competitive Qualitative Research",
      brand: "Shilla Duty Free",
      industry: "Retail / Luxury Travel",
      industryIcon: "\u2708\uFE0F",
      product: "Duty-Free Retail & Luxury Shopping Experience",
      year: "2018–2019",
      color: "#C5A55A",
      gradient: "linear-gradient(135deg, #C5A55A 0%, #8B6914 100%)",
      tags: ["1:1 IDIs", "Focus Groups", "Discussion Guide Design", "Singapore & Korea", "Competitive Strategy"],
      description: "Wrote the discussion guides for 1:1 in-depth interviews and focus groups, then personally conducted qualitative fieldwork in Singapore and Korea. Synthesized traveler shopping behavior findings into competitive strategy recommendations that directly supported Shilla's high-stakes Changi Airport bid.",
      challenge: "Shilla Duty Free was preparing a high-stakes bid to operate duty-free retail at Singapore's Changi Airport. They needed deep consumer and competitive insights to differentiate their proposal and demonstrate understanding of the Singaporean traveler market.",
      method: "I authored the IDI and focus group discussion guides covering traveler shopping motivations, luxury brand perceptions, duty-free expectations, and Changi-specific retail experience needs. Conducted 1:1 interviews and facilitated focus groups across Singapore and Korea. Led the qualitative coding and thematic analysis, then wrote the strategic synthesis report translating raw consumer voices into actionable recommendations for the bid team.",
      findings: [
        "Identified key traveler segments and their distinct duty-free shopping motivations through thematic coding",
        "Mapped competitive landscape of Changi Airport retail based on shopper perception data I collected",
        "Uncovered cultural differences in luxury shopping behavior between Korean and Singaporean travelers",
        "Wrote executive-ready strategy recommendations synthesizing qualitative insights for cross-functional stakeholders"
      ],
      impact: "Deliverables directly supported Shilla Duty Free's Changi Airport bid, providing consumer-grounded competitive differentiation and positioning strategy for the proposal.",
      competitors: [],
      stats: [
        { value: "IDIs", label: "Conducted" },
        { value: "FGs", label: "Facilitated" },
        { value: "2", label: "Countries" },
        { value: "Bid", label: "Deliverable" },
      ],
      visuals: null
    },
    {
      id: "horoyoi",
      title: "Horoyoi RTD Creative Assessment — Consumer Lifestyle & TVC Evaluation",
      brand: "Horoyoi",
      industry: "FMCG / Beverage",
      industryIcon: "\uD83C\uDF78",
      product: "Horoyoi RTD Alcoholic Beverage (Beam Suntory)",
      year: "2019",
      color: "#EC4899",
      gradient: "linear-gradient(135deg, #F9A8D4 0%, #EC4899 50%, #A855F7 100%)",
      tags: ["In-Depth Interviews", "Paired IDIs", "Persona Development", "TVC Pre-Testing", "Creative Strategy"],
      description: "Designed the IDI discussion guide and conducted paired in-depth interviews with RTD (Ready-to-Drink) consumers to develop consumer personas and evaluate three TVC campaigns before launch. Authored the respondent screener, moderated 10 interviews (6 individual + 4 friendship pairs) with 25-34-year-old single working women in Seoul, synthesized qualitative findings into lifestyle persona segments, and delivered creative strategy recommendations to Beam Suntory.",
      challenge: "Beam Suntory identified Korea's RTD market as a high-growth opportunity and planned to launch three Horoyoi TVC campaigns. They needed to understand the lifestyle and values of their target consumers (25-34 single working women), assess how well each TVC resonated with the brand image, and identify improvement areas before going to market.",
      method: "I wrote the full IDI discussion guide covering daily lifestyle routines, life values, stress and coping behaviors, RTD category perceptions, and brand image positioning. Designed the respondent screener (25-34 female, single, working, regular RTD drinkers, mix of Horoyoi users and competitor users). Conducted 6 individual 90-minute IDIs and moderated 4 friendship-pair interviews across a 4-day fieldwork period in Seoul. Led qualitative coding and thematic analysis to develop consumer persona segments. Evaluated 3 TVC campaigns (Home Party, So-Hwak-Haeng, Camping) on likability, understandability, relevance, and brand fit. Synthesized findings into a communication strategy report with tagline and model evaluation.",
      findings: [
        "Developed 4 consumer persona segments — CONTENTMENT (rest & small happiness), CAREFREE (fun with friends), HARMONY (balance & healing), and ENERGETIC (active & trend-seeking) — with distinct RTD drinking occasions mapped to each",
        "Identified that Horoyoi users prioritize 'comfort, ease, and freedom' while non-users pursue 'self-development and trend-following,' informing targeted messaging strategies",
        "Evaluated TVC campaigns: 'Home Party' scored highest on brand fit and likability; 'So-Hwak-Haeng' strongest for core CONTENTMENT segment but tagline needed clarification; 'Camping' appealed to expansion segments",
        "Recommended strengthening Horoyoi's role as 'reward/joy/relaxation' in the storyline, introducing higher-ABV variants and new flavors (soda, green grape, cider) to overcome 'too sweet' barrier"
      ],
      impact: "Delivered a comprehensive creative strategy report that directly informed Beam Suntory's TVC launch decisions, tagline refinement, and product extension roadmap for the Korean RTD market.",
      competitors: [],
      stats: [
        { value: "10", label: "IDIs Conducted" },
        { value: "4", label: "Persona Segments" },
        { value: "3", label: "TVCs Evaluated" },
        { value: "90min", label: "Per Interview" },
      ],
      visuals: (
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <HoroyoiPersonaVisual />
          <HoroyoiTVCEvalVisual />
        </div>
      )
    },
  ];

  return (
    <section className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-5xl mx-auto">
        <SectionTitle sub="UX Research Case Studies" color={C.coral}>Projects</SectionTitle>

        {/* Client logo banner — Kantar mentioned once here */}
        <Card className="mb-10" accent={GRAD.hero}>
          <p className="text-xs uppercase tracking-widest font-medium mb-2" style={{ color: C.indigo }}>UX Researcher & Project Manager at Kantar Korea (2018–2019)</p>
          <p className="text-gray-500 text-sm mb-4">Designed and executed end-to-end mixed-methods research — writing survey instruments, authoring discussion guides, moderating interviews, managing multi-country fieldwork, running statistical analysis, and synthesizing findings into executive-ready deliverables.</p>
          <div className="flex flex-wrap items-center gap-5">
            {["Google", "YouTube", "Heineken", "Horoyoi", "Dorco", "Shilla Duty Free"].map((b) => (
              <BrandLogo key={b} name={b} size={24} />
            ))}
          </div>
          <p className="text-gray-400 text-xs mt-4">8+ concurrent engagements for Fortune Global 500 clients across Korea, Singapore, Germany, USA, and France</p>
        </Card>

        <div className="space-y-8">
          {projects.map((p) => (
            <div key={p.id} className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 bg-white">
              {/* Header banner */}
              <div className="p-6 md:p-8 text-white relative" style={{ background: p.gradient }}>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                <div className="relative z-10">
                  <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-white rounded-xl p-2 flex items-center justify-center" style={{ minWidth: 44, minHeight: 44 }}>
                        <BrandLogo name={p.brand} size={20} />
                      </div>
                      <div>
                        <p className="text-xs tracking-widest uppercase opacity-80">{p.year}</p>
                        <p className="font-bold text-lg">{p.brand}</p>
                      </div>
                    </div>
                    <IndustryBadge category={p.industry} icon={p.industryIcon} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold leading-snug mt-2">{p.title}</h3>
                  <p className="opacity-70 text-xs mt-1">Product: {p.product}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tags.map((t, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full font-medium bg-white bg-opacity-20">{t}</span>
                    ))}
                  </div>
                  {p.competitors && p.competitors.length > 0 && (
                    <div className="flex items-center gap-2 mt-3 opacity-80">
                      <span className="text-xs">Benchmarked against:</span>
                      {p.competitors.map((c) => <BrandLogo key={c} name={c} color="white" />)}
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="px-6 md:px-8 py-4 border-b border-gray-100" style={{ background: p.color + "05" }}>
                <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-4 border-b border-gray-100">
                {p.stats.map((s, i) => <StatCard key={i} value={s.value} label={s.label} color={p.color} />)}
              </div>

              {/* Toggle details */}
              <button onClick={() => setExpanded(expanded === p.id ? null : p.id)}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium hover:bg-gray-50 transition-colors"
                style={{ color: p.color }}>
                {expanded === p.id ? "Hide Details" : p.visuals ? "Show Details & Methodology Visuals" : "Show Details"}
                <ChevronDown size={16} className={`transition-transform ${expanded === p.id ? "rotate-180" : ""}`} />
              </button>

              {expanded === p.id && (
                <div className="px-6 md:px-8 pb-8 pt-2">
                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="text-xs tracking-widest uppercase font-medium mb-2" style={{ color: p.color }}>Challenge</h4>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">{p.challenge}</p>
                      <h4 className="text-xs tracking-widest uppercase font-medium mb-2" style={{ color: p.color }}>Methodology</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{p.method}</p>
                    </div>
                    <div>
                      <h4 className="text-xs tracking-widest uppercase font-medium mb-2" style={{ color: p.color }}>Key Findings</h4>
                      <ul className="space-y-2 mb-6">
                        {p.findings.map((f, i) => (
                          <li key={i} className="text-gray-600 text-sm leading-relaxed flex gap-2">
                            <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: p.color }} />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <h4 className="text-xs tracking-widest uppercase font-medium mb-2" style={{ color: p.color }}>Impact</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{p.impact}</p>
                    </div>
                  </div>

                  {/* Methodology Visuals */}
                  {p.visuals && (
                    <div className="border-t border-gray-100 pt-6">
                      <h4 className="text-xs tracking-widest uppercase font-medium mb-4 text-center" style={{ color: p.color }}>Methodology Visuals</h4>
                      {p.visuals}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── EXPERIENCE ─── */
function Experience() {
  const jobs = [
    {
      title: "Ph.D. Candidate, Information Systems",
      org: "Boston University, Questrom School of Business",
      period: "2021–Present",
      color: C.indigo,
      bullets: [
        "Designed qualitative annotation frameworks grounded in rhetorical theory to classify persuasion strategies across 19,965 users and 17,336 debate attempts",
        "Built end-to-end LLM classification pipelines using Claude, OpenAI, and Google APIs",
        "Leading a health-focused study mapping GLP-1 user personas across 29,000+ Reddit sessions",
        "Awarded OpenAI Research Grant ($5,000) and Google Cloud Academic Program Credit ($10,000)",
      ]
    },
    {
      title: "UX Researcher & Project Manager",
      org: "Kantar Korea",
      period: "2018–2019",
      color: C.teal,
      bullets: [
        "Managed 8+ concurrent mixed-methods research for Fortune 500 clients (Google, YouTube, Heineken, Shilla Duty Free)",
        "Conducted IDIs, focus groups, surveys, and HUTs across Korea, Singapore, Germany, USA, and France",
        "Led Heineken Korea's Brand Health Tracking transformation and Dorco's multi-country product launch research",
        "Built trust with stakeholders from brand managers to C-suite executives across 5 countries",
      ]
    },
    {
      title: "Research Associate",
      org: "Korea Culture & Tourism Institute",
      period: "2019–2020",
      color: C.amber,
      bullets: [
        "Managed 4 policy research projects analyzing OECD COVID-19 response policies for the entertainment industry",
        "Findings directly informed Korea's cultural sector relief strategy",
        "Assessed crowding-out effects of public library lending on publishing revenue using fixed effects models",
      ]
    },
  ];
  const teaching = [
    { course: "QST IS 223: Information Systems & Emerging Technologies in Business", role: "Lead Instructor", term: "Summer 2025", detail: "Eval: 4.37/5", color: C.indigo, instructor: "Sole Instructor", desc: "Sole instructor for 16-student intensive course. Taught database design (ERD, SQL, MS Access), business process modeling, cloud computing, platform strategy, and AI for business. Redesigned curriculum with AI startup case studies, agentic AI demos, and a capstone startup pitch competition.", bullets: ["Designed and delivered all lectures, assignments, and exams for the full course", "Redesigned curriculum to integrate AI startup case studies and agentic AI demos", "Created capstone startup pitch competition as final project", "Achieved 4.37/5 student evaluation"] },
    { course: "QST IS 912: Platform Strategy & Economics", role: "Teaching Assistant", term: "Fall 2021", detail: "PhD Seminar", color: C.teal, instructor: "Prof. Andrei Hagiu", desc: "PhD seminar on platform businesses — network effects, pricing, data-enabled learning, platform design & governance, marketplace vs. reseller models, product-to-platform transformation, and regulation. Covered seminal economics/strategy papers and frontier research topics.", bullets: ["Graded PhD-level research papers and presentation deliverables", "Reviewed student slide decks and provided feedback on 6-slide research presentations", "Supported interactive class discussions on platform economics models (two-sided markets, network effects, competitive dynamics)"] },
    { course: "QST BA 840: Data Ethics: Analytics in Social Context", role: "Teaching Assistant", term: "Spring 2022, Spring 2025", detail: "MSBA", color: C.coral, instructor: "Prof. DK Lee", desc: "Ethics of data analytics covering algorithmic fairness, privacy, bias, and responsible AI deployment.", bullets: ["Developed AI-integrated homework exercises incorporating AI agents and LLM tools", "Graded assignments and mentored MSBA students on ethical AI applications", "Served as TA across two separate semesters (2022, 2025)"] },
    { course: "QST IS 811: Responsible AI for Business Analytics", role: "Teaching Assistant", term: "Spring 2023", detail: "MBA", color: C.violet, instructor: "Prof. DK Lee", desc: "MBA course on responsible AI — interpretability, accountability, and governance of AI systems.", bullets: ["Graded MBA case analyses on AI ethics and governance", "Mentored students on responsible deployment of business AI systems"] },
    { course: "QST BA 820: Unsupervised & Unstructured Machine Learning", role: "Teaching Assistant", term: "Spring 2023", detail: "MSBA", color: C.amber, instructor: "Prof. DK Lee", desc: "Clustering, dimensionality reduction, topic modeling, and NLP methods for unstructured business data.", bullets: ["Graded ML coding assignments and project deliverables", "Held office hours for MSBA students on clustering, NLP, and topic modeling"] },
    { course: "QST BA 810: Supervised Machine Learning", role: "Teaching Assistant", term: "Fall 2022", detail: "MSBA", color: C.teal, instructor: "Prof. Nachiketa Sahoo", desc: "Regression, classification, ensemble methods, and model evaluation for predictive analytics.", bullets: ["Graded supervised ML homework and midterm/final exams", "Mentored students on regression, classification, and ensemble methods"] },
  ];
  const profLinks = {
    "DK Lee": "https://www.bu.edu/questrom/profiles/dokyun-dk-lee/",
    "Andrei Hagiu": "https://andreihagiu.com",
    "Nachiketa Sahoo": "https://www.bu.edu/questrom/profiles/nachiketa-sahoo/",
    "Gordon Burtch": "https://www.bu.edu/questrom/profiles/gordon-burtch/",
    "Jawwad Noor": "https://www.bu.edu/econ/profile/jawwad-noor/",
    "Iv\u00e1n Fern\u00e1ndez-Val": "https://sites.bu.edu/ivanf/",
    "Hiroaki Kaido": "https://www.bu.edu/econ/profile/hiroaki-kaido/",
    "Shuba Srinivasan": "https://www.bu.edu/questrom/profiles/shuba-srinivasan/",
    "Daniella Kupor": "https://www.bu.edu/questrom/profiles/daniella-kupor/",
    "Rahul Bhui": "https://www.bu.edu/questrom/profiles/rahul-bhui/",
    "Iddo Drori": "https://www.cs.columbia.edu/~idrori/",
    "Derry Wijaya": "https://www.bu.edu/cs/profiles/derry-wijaya/",
    "Carey Morewedge": "https://www.bu.edu/questrom/profiles/carey-morewedge/",
    "Tim Simcoe": "https://www.bu.edu/questrom/profiles/timothy-simcoe/",
    "Michael Luca": "https://www.hbs.edu/faculty/Pages/profile.aspx?facId=602417",
    "Saiph Savage": "https://www.khoury.northeastern.edu/people/saiph-savage/",
    "Youjin Hahn": "https://yonsei.pure.elsevier.com/en/persons/youjin-hahn",
    "Avi Seidmann": "https://www.bu.edu/questrom/profiles/abraham-avi-seidmann/",
    "Gerdus Benad\u00e9": "https://www.bu.edu/questrom/profiles/gerdus-benade/",
  };
  const ProfLink = ({ name }) => {
    const url = profLinks[name];
    return url ? (
      <a href={url} target="_blank" rel="noreferrer" className="hover:underline transition-colors" style={{ color: C.slateLight }}>{name}</a>
    ) : <span className="text-gray-400">{name}</span>;
  };
  const coursework = [
    { category: "Economics & IS", color: C.indigo, courses: [
      { name: "Microeconomics Theory", prof: "Jawwad Noor" },
      { name: "Platform Strategy & Economics", prof: "Andrei Hagiu" },
      { name: "Quantitative Research in IS", prof: "Gordon Burtch" },
      { name: "Marketing Management", prof: "Shuba Srinivasan" },
      { name: "Consumer Behavior", prof: "Daniella Kupor" },
      { name: "Principles of Rationality & Irrationality", prof: "Rahul Bhui" },
    ]},
    { category: "Statistics & ML", color: C.teal, courses: [
      { name: "Advanced Statistics", prof: "Iv\u00e1n Fern\u00e1ndez-Val" },
      { name: "Advanced Econometrics I", prof: "Hiroaki Kaido" },
      { name: "Principles of Machine Learning", prof: "Iddo Drori" },
      { name: "Introduction to NLP", prof: "Derry Wijaya" },
    ]},
    { category: "Methodology", color: C.coral, courses: [
      { name: "LLM Agents & Multi-Agent Systems", prof: "DK Lee" },
      { name: "Generative AI & Causal Inference with Text", prof: "DK Lee" },
      { name: "ML Methods for Social Science", prof: "Nachiketa Sahoo" },
      { name: "Experimental Design", prof: "Carey Morewedge" },
      { name: "Causal Inference for Management Research", prof: "Tim Simcoe" },
      { name: "Field Experiments", prof: "Michael Luca" },
      { name: "Global AI in HCI", prof: "Saiph Savage" },
    ]},
  ];
  return (
    <section className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-5xl mx-auto">
        <SectionTitle sub="Professional & Academic" color={C.amber}>Experience</SectionTitle>

        <h3 className="text-sm tracking-widest uppercase font-medium mb-6 flex items-center gap-2" style={{ color: C.indigo }}>
          <Briefcase size={16} /> Professional
        </h3>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-100 hidden md:block" />
          <div className="space-y-6">
            {jobs.map((j, i) => (
              <div key={i} className="md:pl-14 relative">
                <div className="absolute left-3.5 top-7 w-3 h-3 rounded-full border-2 border-white hidden md:block" style={{ background: j.color, boxShadow: `0 0 0 3px ${j.color}30` }} />
                <Card accent={j.color}>
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                    <div>
                      <p className="font-bold" style={{ color: C.slate }}>{j.title}</p>
                      <p className="text-gray-500 text-sm">{j.org}</p>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: j.color + "15", color: j.color }}>{j.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {j.bullets.map((b, k) => (
                      <li key={k} className="text-gray-600 text-sm leading-relaxed flex gap-2">
                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: j.color }} />{b}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Honors */}
        <h3 className="text-sm tracking-widest uppercase font-medium mb-6 mt-16 flex items-center gap-2" style={{ color: C.violet }}>
          <Award size={16} /> Honors & Societies
        </h3>
        <Card className="mb-16" accent={GRAD.indigoViolet}>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: C.violet + "15" }}>
              <Award size={22} style={{ color: C.violet }} />
            </div>
            <div>
              <p className="font-bold" style={{ color: C.slate }}>Beta Gamma Sigma</p>
              <p className="text-gray-500 text-sm mb-2">National Honor Society for Business & Management &middot; Boston University Questrom</p>
              <p className="text-gray-600 text-sm leading-relaxed">Inducted in recognition of academic ranking in the <span className="font-semibold" style={{ color: C.violet }}>top 20%</span> of the graduate class. Beta Gamma Sigma is the highest recognition a business student can receive in a program accredited by AACSB International.</p>
            </div>
          </div>
        </Card>

        <h3 className="text-sm tracking-widest uppercase font-medium mb-6 mt-16 flex items-center gap-2" style={{ color: C.teal }}>
          <GraduationCap size={16} /> Teaching
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {teaching.map((t, i) => (
            <Card key={i} accent={t.color} className={i === 0 ? "md:col-span-2" : ""}>
              <p className="font-semibold text-sm" style={{ color: C.slate }}>{t.course}</p>
              <div className="flex items-center flex-wrap gap-2 mt-2">
                <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: t.color + "15", color: t.color }}>{t.role}</span>
                <span className="text-xs">{profLinks[t.instructor.replace("Prof. ", "")] ? <a href={profLinks[t.instructor.replace("Prof. ", "")]} target="_blank" rel="noreferrer" className="text-gray-500 hover:underline">{t.instructor}</a> : <span className="text-gray-500">{t.instructor}</span>}</span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-400 text-xs">{t.term}</span>
                {t.detail && <><span className="text-gray-300">|</span><span className="text-xs font-medium" style={{ color: t.color }}>{t.detail}</span></>}
              </div>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed mb-2">{t.desc}</p>
              {t.bullets && (
                <ul className="space-y-1">
                  {t.bullets.map((b, j) => (
                    <li key={j} className="text-xs text-gray-500 leading-relaxed flex gap-2">
                      <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full" style={{ background: t.color }} />{b}
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </div>

        <h3 className="text-sm tracking-widest uppercase font-medium mb-6 mt-16 flex items-center gap-2" style={{ color: C.coral }}>
          <BookOpen size={16} /> Selected PhD Coursework
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {coursework.map((cat, i) => (
            <Card key={i} accent={cat.color}>
              <p className="text-xs uppercase tracking-widest font-bold mb-3" style={{ color: cat.color }}>{cat.category}</p>
              <div className="space-y-2">
                {cat.courses.map((c, j) => (
                  <div key={j} className="pl-3" style={{ borderLeft: `2px solid ${cat.color}30` }}>
                    <p className="text-sm font-medium" style={{ color: C.slate }}>{c.name}</p>
                    <p className="text-xs"><ProfLink name={c.prof} /></p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-8" accent={GRAD.warm}>
          <div className="flex items-center gap-3 mb-3">
            <IconCircle Icon={Users} color={C.coral} />
            <div>
              <p className="font-bold text-sm" style={{ color: C.slate }}>Translation & Multimodal Media Lead</p>
              <p className="text-gray-500 text-sm">Providence Community &middot; 2020–Present</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">Designed bilingual Korean-English audio processing pipelines using ElevenLabs for speech synthesis and voice cloning. Managed cross-functional content production team.</p>
        </Card>
      </div>
    </section>
  );
}

/* ─── TEACHING ─── */
function TeachingEvalChart() {
  const data = [
    { metric: "Organization", score: 3.80, dept: 4.14, college: 4.24 },
    { metric: "Objectives", score: 3.80, dept: 4.34, college: 4.27 },
    { metric: "Fulfillment", score: 4.00, dept: 4.38, college: 4.25 },
    { metric: "Learning", score: 4.50, dept: 4.51, college: 4.35 },
    { metric: "Climate", score: 3.80, dept: 4.49, college: 4.40 },
  ];
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data} barCategoryGap="15%">
        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
        <XAxis dataKey="metric" tick={{ fontSize: 11, fill: "#64748B" }} />
        <YAxis domain={[3, 5]} tick={{ fontSize: 10, fill: "#94a3b8" }} />
        <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }} />
        <Legend wrapperStyle={{ fontSize: 11 }} />
        <Bar dataKey="score" name="My Course" fill={C.coral} radius={[4, 4, 0, 0]} />
        <Bar dataKey="dept" name="Dept Avg" fill={C.indigo} radius={[4, 4, 0, 0]} opacity={0.5} />
        <Bar dataKey="college" name="College Avg" fill={C.teal} radius={[4, 4, 0, 0]} opacity={0.5} />
      </BarChart>
    </ResponsiveContainer>
  );
}

function Teaching() {
  const testimonials = [
    { text: "Knew nothing about IS but she made it simple and easy to understand", color: C.coral },
    { text: "The materials and slides are very clear. We have many group discussion opportunities that can stimulate my thinking. I enjoyed the presentations and learned a lot from them.", color: C.indigo },
    { text: "I liked the fast paced classes, I was able to take in a lot of information and review anything I misunderstood independently with no problem", color: C.teal },
    { text: "The information system is a completely new area for me...With the help of classmates and professors, I finished all the assignments. The most valuable aspect is I am keeping challenging myself.", color: C.violet },
  ];
  const stats = [
    { value: "4.50", label: "Student Learning", sub: "out of 5.00", color: C.coral },
    { value: "60%", label: "Learned 'A Great Deal'", sub: "top rating", color: C.indigo },
    { value: "100%", label: "Class Attendance", sub: "80-100% rate", color: C.teal },
    { value: "7.3/10", label: "Would Recommend", sub: "NPS score", color: C.violet },
  ];
  const skills = [
    "Business process understanding and real-world application",
    "Microsoft Access and SQL proficiency",
    "Data organization, collection, and analysis capabilities",
    "Understanding of AI integration in modern business",
    "Critical thinking through group discussions and presentations",
  ];
  return (
    <section className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-5xl mx-auto">
        <SectionTitle sub="Evaluation, Testimonials & Philosophy" color={C.coral}>Teaching</SectionTitle>

        {/* IS 223 Evaluation Header */}
        <Card className="mb-8" accent={GRAD.warm}>
          <div className="flex items-center gap-3 mb-2">
            <IconCircle Icon={Star} color={C.coral} size={44} />
            <div>
              <p className="font-bold" style={{ color: C.slate }}>QST IS 223: Information Systems & Emerging Technologies</p>
              <p className="text-gray-500 text-sm">Lead Instructor, Summer 2025 &middot; 16 students &middot; 10/17 responded (58.8%)</p>
            </div>
          </div>
        </Card>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((s, i) => (
            <Card key={i} accent={s.color}>
              <p className="text-3xl font-bold" style={{ color: s.color }}>{s.value}</p>
              <p className="text-sm font-semibold mt-1" style={{ color: C.slate }}>{s.label}</p>
              <p className="text-xs text-gray-400">{s.sub}</p>
            </Card>
          ))}
        </div>

        {/* Evaluation Chart */}
        <Card className="mb-8" accent={C.coral}>
          <p className="text-xs uppercase tracking-widest font-medium mb-4" style={{ color: C.coral }}>Course Evaluation vs. Department & College Averages</p>
          <TeachingEvalChart />
        </Card>

        {/* Testimonials */}
        <h3 className="text-sm tracking-widest uppercase font-medium mb-6 flex items-center gap-2" style={{ color: C.indigo }}>
          <Quote size={16} /> Student Testimonials (Verbatim)
        </h3>
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {testimonials.map((t, i) => (
            <Card key={i} accent={t.color}>
              <div className="flex gap-3">
                <Quote size={20} style={{ color: t.color, flexShrink: 0, opacity: 0.4 }} />
                <p className="text-gray-600 text-sm leading-relaxed italic">{"\u201C"}{t.text}{"\u201D"}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Student Skills Impact */}
        <Card className="mb-10" accent={C.teal}>
          <div className="flex items-center gap-3 mb-4">
            <IconCircle Icon={ArrowUp} color={C.teal} />
            <p className="font-semibold" style={{ color: C.slate }}>Impact on Student Skills</p>
          </div>
          <div className="grid md:grid-cols-2 gap-2">
            {skills.map((s, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: C.teal }} />{s}
              </div>
            ))}
          </div>
        </Card>

        {/* Teaching Philosophy */}
        <h3 className="text-sm tracking-widest uppercase font-medium mb-6 flex items-center gap-2" style={{ color: C.violet }}>
          <Heart size={16} /> Teaching & Mentoring Philosophy
        </h3>
        <div className="space-y-4">
          <Card accent={C.violet}>
            <p className="text-xs uppercase tracking-widest font-bold mb-3" style={{ color: C.violet }}>Core Belief</p>
            <p className="text-gray-600 text-sm leading-relaxed">My mentoring philosophy centers on a fundamental belief: <span className="font-semibold" style={{ color: C.indigo }}>I am also learning as I teach.</span> This mindset of continuous learning and adaptation has shaped my approach to supporting students across diverse backgrounds, from high school debaters to graduate students navigating AI and data analytics.</p>
          </Card>
          <div className="grid md:grid-cols-2 gap-4">
            <Card accent={C.indigo}>
              <p className="text-xs uppercase tracking-widest font-bold mb-3" style={{ color: C.indigo }}>Personalized Approach</p>
              <p className="text-gray-600 text-sm leading-relaxed">I begin by asking each student about their career plans and personal interests, tailoring course content to individual goals while respecting diverse perspectives. When students prepared final startup pitch presentations, I created a realistic business environment with culturally responsive feedback acknowledging different communication styles.</p>
            </Card>
            <Card accent={C.teal}>
              <p className="text-xs uppercase tracking-widest font-bold mb-3" style={{ color: C.teal }}>Diagnostic & Adaptive</p>
              <p className="text-gray-600 text-sm leading-relaxed">When students struggle, I examine both systemic and individual factors: cultural or language barriers, socioeconomic challenges, first-generation college student challenges. I provide multiple entry points through tiered pathways and frequent low-stakes assessments, ensuring every student has opportunities to succeed.</p>
            </Card>
            <Card accent={C.coral}>
              <p className="text-xs uppercase tracking-widest font-bold mb-3" style={{ color: C.coral }}>AI & Ethics Guidance</p>
              <p className="text-gray-600 text-sm leading-relaxed">Given the explosive growth of AI, I conduct sessions addressing practical concerns: how to overcome barriers to technology access, how to use AI ethically across different cultural contexts, and how underrepresented groups can leverage these tools for advancement while serving diverse communities.</p>
            </Card>
            <Card accent={C.amber}>
              <p className="text-xs uppercase tracking-widest font-bold mb-3" style={{ color: C.amber }}>Equity-Centered Mission</p>
              <p className="text-gray-600 text-sm leading-relaxed">I aim to prepare diverse student bodies with practical skills in data analytics and information systems while cultivating critical judgment about technology's impact on different communities. Through hands-on, project-based learning, students experience both the capabilities and limitations of analytical tools.</p>
            </Card>
          </div>
          <Card accent={GRAD.hero}>
            <p className="text-xs uppercase tracking-widest font-bold mb-3" style={{ color: C.violet }}>Mentoring Beyond the Classroom</p>
            <p className="text-gray-600 text-sm leading-relaxed">My mentoring extends beyond academics. Having worked with populations ranging from privileged academy students to marginalized communities, including families dealing with broken homes and those struggling with mental illness whom I have accompanied to therapy sessions and hospitals, I understand how to meet students where they are. My involvement in multicultural church communities in New York and Los Angeles has further developed my ability to support individuals through both academic and personal challenges across cultural boundaries.</p>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 pb-20 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ background: C.coral }} />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: C.indigo }} />

      <div className="max-w-2xl w-full text-center relative z-10">
        <SectionTitle sub="Let's connect" color={C.coral}>Get in Touch</SectionTitle>
        <p className="text-gray-500 leading-relaxed mb-10 text-lg">
          I'm always open to conversations about UX research, AI/LLM applications, academic collaboration, or industry opportunities.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto mb-10">
          <a href="mailto:kanghazel1@gmail.com"
            className="flex items-center justify-center gap-3 text-white text-sm px-6 py-3.5 rounded-full font-medium hover:opacity-90 transition-opacity"
            style={{ background: GRAD.hero }}>
            <Mail size={16} /> Email Me
          </a>
          <a href="https://linkedin.com/in/hazel-hyeseung-kang" target="_blank" rel="noreferrer"
            className="flex items-center justify-center gap-3 text-sm px-6 py-3.5 rounded-full font-medium border-2 transition-colors hover:bg-indigo-50"
            style={{ borderColor: C.indigo, color: C.indigo }}>
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
        <div className="space-y-2 text-sm text-gray-400">
          <p className="flex items-center justify-center gap-2"><Phone size={14} /> 617-784-4136</p>
          <p className="flex items-center justify-center gap-2"><MapPin size={14} /> Boston, MA</p>
        </div>
      </div>
    </section>
  );
}

/* ─── MAIN APP ─── */
const pages = { Home, About, Research, Projects, Teaching, Experience, Contact };

export default function Portfolio() {
  const [active, setActive] = useState("Home");
  const Page = pages[active];
  return (
    <div className="min-h-screen font-sans antialiased" style={{ background: "#FAFBFF" }}>
      <Nav active={active} setActive={setActive} />
      <Page setActive={setActive} />
      <footer className="border-t border-gray-100 bg-white py-8 text-center">
        <p className="text-sm font-medium" style={{ background: GRAD.hero, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          &copy; 2026 Hazel Hyeseung Kang
        </p>
        <p className="text-gray-400 text-xs mt-1">All rights reserved.</p>
      </footer>
      {active !== "Home" && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
          style={{ background: GRAD.hero }}>
          <ArrowUp size={16} />
        </button>
      )}
    </div>
  );
}