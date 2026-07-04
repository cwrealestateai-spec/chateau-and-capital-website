/*
  Central content layer. Every page reads from here, so migrating to a
  headless CMS later means swapping these exports for fetchers — no
  component changes required. Adding a portfolio company or insight is a
  single new entry.
*/

export const site = {
  name: "Chateau & Capital",
  tagline: "Building Enduring Businesses. Financing the Future.",
  description:
    "Chateau & Capital is an operating investment company and development finance platform committed to building exceptional businesses, financing transformative developments and creating lasting value across Africa.",
  location: "Lagos, Nigeria",
  email: "enquiries@chateauandcapital.com",
  careersEmail: "careers@chateauandcapital.com",
  pressEmail: "press@chateauandcapital.com",
  url: "https://www.chateauandcapital.com",
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "Our Philosophy", href: "/philosophy" },
  { label: "Operating Platform", href: "/platform" },
  { label: "Development Finance", href: "/development-finance" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights", href: "/insights" },
  { label: "Leadership", href: "/leadership" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export type Capability = {
  index: string;
  title: string;
  href: string;
  summary: string;
};

export const capabilities: Capability[] = [
  {
    index: "01",
    title: "Operating Companies",
    href: "/portfolio",
    summary:
      "We own and build businesses with long-term competitive advantages. Each company retains its own identity while drawing on shared leadership, capital, technology and institutional expertise.",
  },
  {
    index: "02",
    title: "Development Finance",
    href: "/development-finance",
    summary:
      "Structured financing for high-quality real estate developments — from construction and bridge finance to mezzanine capital, joint ventures and preferred equity.",
  },
  {
    index: "03",
    title: "Principal Investments",
    href: "/about",
    summary:
      "Long-term investments into businesses where we hold conviction, operational expertise and the ability to create sustainable value over decades.",
  },
  {
    index: "04",
    title: "Real Estate Development",
    href: "/development-finance",
    summary:
      "Through strategic partnerships and direct investment we develop residential, commercial and mixed-use projects designed to improve urban environments.",
  },
  {
    index: "05",
    title: "Operating Platform",
    href: "/platform",
    summary:
      "Every portfolio company benefits from shared institutional capabilities — governance, technology, artificial intelligence, brand, finance and execution frameworks.",
  },
];

export type PortfolioCompany = {
  slug: string;
  name: string;
  discipline: string;
  summary: string;
  description: string[];
  services: string[];
};

export const portfolio: PortfolioCompany[] = [
  {
    slug: "cw-real-estate",
    name: "CW Real Estate",
    discipline: "Real Estate Advisory & Investment",
    summary:
      "A premium real estate advisory and investment firm specialising in luxury residential, commercial real estate, development marketing and international real estate services.",
    description: [
      "CW Real Estate advises private clients, developers and institutions across the full arc of a property decision — acquisition, disposition, development marketing and long-term asset stewardship.",
      "The firm pairs deep local market knowledge with institutional process: rigorous valuation discipline, structured due diligence and marketing programmes built for premium assets.",
    ],
    services: [
      "Luxury Residential",
      "Commercial Real Estate",
      "Development Marketing",
      "Investment Advisory",
      "Property Management",
      "International Real Estate",
    ],
  },
  {
    slug: "hidd-advisory",
    name: "HIDD Advisory",
    discipline: "Property Intelligence",
    summary:
      "An independent property intelligence company focused on due diligence, valuations, inspections, risk advisory, research and market intelligence.",
    description: [
      "HIDD Advisory exists to reduce uncertainty before investment decisions are made. It provides independent, evidence-led answers to the questions that determine whether a property investment succeeds.",
      "Its work spans technical inspections, title and regulatory due diligence, valuation, feasibility research and ongoing market intelligence for investors and lenders.",
    ],
    services: [
      "Due Diligence",
      "Valuations",
      "Inspections",
      "Risk Advisory",
      "Research",
      "Market Intelligence",
    ],
  },
];

export const financeCapabilities = [
  {
    group: "Capital Solutions",
    items: [
      "Development Finance",
      "Construction Finance",
      "Bridge Finance",
      "Mezzanine Finance",
      "Acquisition Finance",
    ],
  },
  {
    group: "Equity & Structures",
    items: [
      "Joint Venture Structures",
      "Preferred Equity",
      "Project Equity",
      "Capital Raising",
    ],
  },
  {
    group: "Advisory & Analysis",
    items: [
      "Development Advisory",
      "Financial Modelling",
      "Investment Underwriting",
      "Feasibility Analysis",
    ],
  },
];

export const capitalStack = [
  {
    label: "Senior / Construction Debt",
    share: "Foundation",
    note: "Secured, disciplined leverage sized to the asset — never to ambition.",
  },
  {
    label: "Mezzanine & Bridge",
    share: "Structure",
    note: "Flexible capital that closes the gap between senior debt and equity.",
  },
  {
    label: "Preferred Equity",
    share: "Alignment",
    note: "Priority returns with governance rights and downside protection.",
  },
  {
    label: "JV & Project Equity",
    share: "Partnership",
    note: "True alignment — we invest beside the developers we back.",
  },
];

export const platformCapabilities = [
  {
    group: "Leadership & Governance",
    items: ["Leadership", "Corporate Governance", "Legal", "Finance"],
    note: "Institutional discipline installed at board level and practised daily.",
  },
  {
    group: "Technology & Intelligence",
    items: [
      "Technology",
      "Artificial Intelligence",
      "Data Infrastructure",
      "Research",
      "Market Intelligence",
    ],
    note: "Data before opinion — shared systems that compound across every company.",
  },
  {
    group: "Growth & Experience",
    items: [
      "Brand Strategy",
      "Marketing",
      "Sales Systems",
      "Customer Experience",
    ],
    note: "Premium brands built patiently, with sales systems that scale.",
  },
  {
    group: "People & Execution",
    items: ["Human Resources", "Operations", "Execution Frameworks"],
    note: "The operating cadence that turns strategy into compounding results.",
  },
];

export const principles = [
  {
    title: "Long-Term Thinking",
    body: "We optimise for decades, not quarters. Time is the most reliable partner an investor can choose.",
  },
  {
    title: "Integrity",
    body: "We do what we say. Reputation compounds faster than capital — and is lost faster still.",
  },
  {
    title: "Operational Excellence",
    body: "We are operators first. Value is created inside businesses, not on spreadsheets.",
  },
  {
    title: "Institutional Discipline",
    body: "Systems, governance and process outlast any individual — including us.",
  },
  {
    title: "Continuous Improvement",
    body: "Every company should be measurably stronger every year it is in our care.",
  },
  {
    title: "Compounding",
    body: "Every decision should compound. Small, disciplined advantages become insurmountable ones.",
  },
  {
    title: "Data Before Opinion",
    body: "We measure before we argue. Evidence settles what eloquence cannot.",
  },
  {
    title: "Customer Obsession",
    body: "Enduring businesses are built by serving customers better every year, without exception.",
  },
  {
    title: "Execution Excellence",
    body: "Strategy is common. Execution is rare. We hire, train and organise for the rare.",
  },
  {
    title: "Craftsmanship",
    body: "The details are not details. Quality in the small things predicts quality in the large.",
  },
  {
    title: "Ownership Mentality",
    body: "We think and act as permanent owners, because we intend to be.",
  },
  {
    title: "Capital Preservation",
    body: "Rule one is not losing money. Rule two is remembering rule one.",
  },
  {
    title: "Disciplined Risk Management",
    body: "We take risks we understand, price them honestly and size them survivably.",
  },
];

export type Insight = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  body: string[];
};

export const insightCategories = [
  "Research",
  "Leadership",
  "Real Estate",
  "Capital Markets",
  "Urban Development",
  "Artificial Intelligence",
  "Execution",
];

export const insights: Insight[] = [
  {
    slug: "the-case-for-permanent-capital-in-africa",
    category: "Capital Markets",
    title: "The Case for Permanent Capital in Africa",
    excerpt:
      "Why patient, operating-led capital — not fund cycles — is the structure best suited to building enduring African businesses.",
    date: "2026-05-12",
    readTime: "8 min read",
    body: [
      "Most investment capital deployed across Africa arrives with a clock attached. Fund structures demand exits within a window that rarely matches the time it takes to build an institution. The result is predictable: businesses optimised for sale rather than for endurance.",
      "Permanent capital changes the incentive entirely. When there is no forced exit, every decision can be weighed against a single question — does this make the business stronger ten years from now? Governance improves because governance pays. Systems are built because systems compound. Talent stays because the horizon is credible.",
      "We believe the next generation of great African companies will be built by owners who never intend to leave. That conviction is the foundation of how Chateau & Capital is structured, and of every investment we make.",
    ],
  },
  {
    slug: "underwriting-lagos-real-estate",
    category: "Real Estate",
    title: "Underwriting Discipline in Lagos Real Estate",
    excerpt:
      "The developments that fail rarely fail on vision. They fail on feasibility, sequencing and capital structure. A framework for getting all three right.",
    date: "2026-04-02",
    readTime: "10 min read",
    body: [
      "Lagos rewards ambition and punishes optimism. The difference between the two is underwriting: an honest feasibility analysis, a capital stack sized to reality, and a construction programme sequenced against verified demand.",
      "Our underwriting begins with the exit and works backwards. Who is the end buyer or tenant, at what price point, verified by what evidence? Only then do we examine land, title, construction cost and the financing structure that carries the project between those two points.",
      "Most projects we review do not proceed. That is the system working. The developments we do finance carry conviction precisely because so many alternatives did not survive the analysis.",
    ],
  },
  {
    slug: "systems-over-heroics",
    category: "Execution",
    title: "Systems Over Heroics",
    excerpt:
      "Heroic effort is a symptom, not a strategy. How we install operating systems that make excellence the default inside portfolio companies.",
    date: "2026-03-09",
    readTime: "6 min read",
    body: [
      "Every young company runs on heroics — founders working weekends, problems solved by force of will. It works, until it doesn't. The transition from heroics to systems is the single most important operational passage a business ever makes.",
      "Inside our portfolio, that transition is deliberate. Weekly operating cadences. Metrics that are owned, not merely reported. Playbooks written the second time a problem is solved, so there is never a third improvisation.",
      "The goal is not bureaucracy. It is freedom: leaders liberated from firefighting to work on the business rather than in it.",
    ],
  },
  {
    slug: "ai-as-institutional-capability",
    category: "Artificial Intelligence",
    title: "AI as an Institutional Capability",
    excerpt:
      "Artificial intelligence is not a project. It is an operating capability — and the firms that treat it that way will compound an advantage others cannot buy later.",
    date: "2026-02-17",
    readTime: "7 min read",
    body: [
      "Every decade produces a technology that separates institutions from imitators. Artificial intelligence is this decade's dividing line — but only for organisations that treat it as infrastructure rather than experiment.",
      "Across our platform, AI is embedded where it changes economics: research and market intelligence, underwriting analysis, customer response, document review. The measure is never novelty. It is hours returned, errors avoided and decisions made faster with better evidence.",
      "The compounding effect is quiet but relentless. A firm whose analysts are amplified by intelligent systems does not look dramatically different this quarter. It looks unrecognisably stronger in five years.",
    ],
  },
  {
    slug: "cities-are-portfolios",
    category: "Urban Development",
    title: "Cities Are Portfolios",
    excerpt:
      "Great cities are compounding assets. What disciplined urban development owes to the places it shapes — and why quality is the highest-returning decision.",
    date: "2026-01-20",
    readTime: "9 min read",
    body: [
      "A city is the longest-duration asset most of us will ever touch. Buildings raised this decade will shape commerce, community and daily life for a century. Development at that timescale is stewardship, whether the developer acknowledges it or not.",
      "We finance and develop with that duration in mind. Quality of construction, generosity of public realm and honesty of materials are not sentimental preferences — they are the variables that determine whether an asset appreciates for generations or decays within one.",
      "Africa will add more urban residents this century than any other continent. The question is not whether its cities will grow, but whether they will be built well. We intend to be part of the answer.",
    ],
  },
  {
    slug: "what-we-look-for-in-management",
    category: "Leadership",
    title: "What We Look For in Management",
    excerpt:
      "Capital is abundant. Judgment is scarce. The five traits we underwrite in the leaders we back — and the flags that end a conversation.",
    date: "2025-12-08",
    readTime: "6 min read",
    body: [
      "We partner with management teams for years, often decades. That makes the assessment of people the highest-stakes underwriting we do.",
      "We look for evidence, not charisma: a record of doing what was said; candour about failures; command of the numbers without a finance team in the room; obsession with customers rather than competitors; and the security to hire people better than themselves.",
      "The disqualifiers are equally consistent — blame that always travels outward, growth stories that outrun unit economics, and any comfort with cutting corners when no one is watching. Character revealed in small decisions predicts conduct in large ones.",
    ],
  },
  {
    slug: "the-discipline-of-saying-no",
    category: "Research",
    title: "The Discipline of Saying No",
    excerpt:
      "Our research process exists to kill ideas cheaply. Inside the filters that stop capital before conviction is earned.",
    date: "2025-11-03",
    readTime: "5 min read",
    body: [
      "The most valuable output of an investment process is the deal that never happens. Every filter we operate — market research, feasibility analysis, reference work, unit-economics reconstruction — exists to make rejection cheap and early.",
      "Saying no is not conservatism. It is the mechanism that protects the capital and attention required to say yes with full conviction when the rare opportunity survives every test.",
      "We track our declined opportunities as carefully as our investments. The record of what we avoided, and why, is among the most instructive documents the firm produces.",
    ],
  },
];

export type Leader = {
  name: string;
  role: string;
  quote: string;
  bio: string[];
};

export const leadership: Leader[] = [
  {
    name: "Delani Adewuyi",
    role: "Founder & Chief Executive",
    quote:
      "We are not building for the next quarter. We are building an institution the next generation will recognise.",
    bio: [
      "Delani Adewuyi founded Chateau & Capital on a conviction: that Africa's next great businesses will be built by permanent owners — operators who invest for decades, install systems that outlast them, and treat reputation as the asset that compounds fastest.",
      "As Chief Executive, he leads the firm's principal investment activity, its development finance platform and the operating companies in its portfolio — spanning real estate advisory, property intelligence and the shared institutional capabilities every company draws on.",
      "He holds the firm to the same standard it asks of the management teams it backs: candour about the numbers, discipline in what it declines, and a record that speaks for itself.",
    ],
  },
];

export const closingStatement =
  "The institutions that shape tomorrow are built through disciplined thinking today.";

export const careersDisciplines = [
  {
    title: "Investment & Underwriting",
    body: "Analysts and associates who reconstruct unit economics from first principles and write with clarity.",
  },
  {
    title: "Development Finance",
    body: "Structuring professionals fluent in feasibility, capital stacks and construction-phase risk.",
  },
  {
    title: "Operations & Execution",
    body: "Operators who install systems inside portfolio companies and stay until the cadence holds.",
  },
  {
    title: "Technology & AI",
    body: "Engineers and data professionals who build the infrastructure our platform compounds on.",
  },
  {
    title: "Finance & Governance",
    body: "Controllers, counsel and governance professionals who make discipline institutional.",
  },
];
