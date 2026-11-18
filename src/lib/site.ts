export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const asset = (p: string) => `${basePath}${p}`;

export const company = {
  name: "Prime Living Estate Limited",
  short: "Prime Living Estate",
  rc: "RC 7079138",
  tagline: "Building Today | Securing Tomorrow",
  address: "Dantata Plaza, No. 13 Independence Way, Behind GT Bank, Murtala Square, Kaduna, Nigeria",
  addressLines: ["Dantata Plaza, No. 13 Independence Way,", "Behind GT Bank, Murtala Square,", "Kaduna, Nigeria"],
  email: "primelivingestate@gmail.com",
  phones: [
    { display: "0802 221 1912", tel: "+2348022211912" },
    { display: "0814 080 2333", tel: "+2348140802333" },
    { display: "0802 364 0122", tel: "+2348023640122" },
  ],
  incorporated: "2 August 2023",
  map: "https://www.google.com/maps/search/?api=1&query=Dantata+Plaza+Independence+Way+Murtala+Square+Kaduna",
};

export const stats = [
  { v: "80%+", l: "of our work comes from repeat clients" },
  { v: "5–8", l: "projects run at a time, so every one gets a director" },
  { v: "₦181M+", l: "in public contracts awarded since 2023" },
  { v: "7", l: "statutory registrations & clearances in good standing" },
];

export const pillars = [
  { n: "I", t: "The relentless pursuit of excellence", d: "Quality in every job regardless of size, budget or timeline — on a foundation of integrity, trust and mutual respect." },
  { n: "II", t: "People before bricks", d: "We hire leaders of esteemed character who are fair, kind and considerate, because buildings reflect the people who build them." },
  { n: "III", t: "Technology that keeps you informed", d: "Web-based project sites, jobsite tablets and Building Information Modelling keep stakeholders in the loop and projects on schedule." },
];

export const services = [
  { id: "residential", t: "Residential", tag: "Homes & estates",
    d: "Luxury condominiums, single-family housing communities, apartments and senior residences — planned around your budget and sales projections, and built to disturb as few lives as possible.",
    pts: ["Apartments & condominiums", "Single-family housing estates", "Independent & assisted living", "Low, mid and high-rise buildings"] },
  { id: "commercial", t: "Commercial", tag: "Places to work, shop & play",
    d: "From office towers and retail stores to hotels, restaurants and parking structures — commercial space built so that your business can thrive.",
    pts: ["Corporate headquarters", "Speculative office space", "Hotels & resort condominiums", "Restaurants, retail & conference centres"] },
  { id: "institutional", t: "Government & Institutional", tag: "Public sector delivery",
    d: "Construction for federal, state and municipal clients. We understand the strict safety, security and quality-control parameters of public contracts, and we deliver against the Bill of Quantities.",
    pts: ["Schools & classroom blocks", "VIP toilets & ancillary facilities", "Perimeter fences & gate houses", "Healthcare & cultural buildings"] },
  { id: "industrial", t: "Industrial", tag: "Warehousing & plant",
    d: "Facilities for manufacturing, warehouse distribution and heavy industry — a natural fit for businesses relocating or expanding their existing sites.",
    pts: ["Manufacturing facilities", "Warehouse & distribution", "Heavy industrial projects", "Site expansion works"] },
  { id: "cm", t: "Construction Management", tag: "At-risk & agency",
    d: "A partnership approach to protecting your investment. From cost analysis to scheduling and estimating, we manage the process so the project is delivered to your plan.",
    pts: ["At-risk & agency models", "Cost analysis & estimating", "Scheduling & programme control", "24-hour access to project documents"] },
  { id: "design", t: "Design-Build & General Contracting", tag: "One accountable team",
    d: "Rigorous design joined to construction-management experience: modern, logical, honest in materials, financially informed — and one contractor accountable from drawing to handover.",
    pts: ["Custom architecture & design", "Design-build delivery", "General contracting", "Virtual design & construction (BIM)"] },
];

export const steps = [
  { t: "Preconstruction", d: "Programme analysis for the best use of funds, a project budget that regulates scope, scheduling analysis and a document review across trades." },
  { t: "Design & Planning", d: "Constructability reviews and value analysis, with BIM used to resolve issues in a digital environment before ground is broken." },
  { t: "Construction", d: "Supervised site delivery with project management, job-cost accounting and quality control — a main-board director on every project." },
  { t: "Handover", d: "Inspection against the Bill of Quantities, a certificate of practical completion, and a client we hope will ask us back." },
];

export const projects = [
  { ref: "KD/SUBEB/UBE/21/A01", date: "Nov 2023", status: "Completed", client: "Kaduna State Universal Basic Education Board",
    title: "2-Classroom Block and Three 8-Cubicle VIP Toilets",
    where: "Research Kawo, Jafaru Estate & BES Dantsoho · Kaduna North LGA", value: "₦57.8M",
    note: "Twelve-week contract. Certificate of Practical Completion issued 18 March 2024 — executed to the Bill of Quantities with satisfactory workmanship." },
  { ref: "KD/SUBEB/UBE/PRY/NC/15/LOT.25", date: "Apr 2024", status: "Completed", client: "Kaduna State Universal Basic Education Board",
    title: "Block of 4 Classrooms",
    where: "LEA Primary School, Ung. Kero · Kajuru LGA, Kaduna State", value: "₦13.9M",
    note: "Won by National Competitive Bidding on a twelve-week programme. Certificate of Practical Completion issued 12 August 2024." },
  { ref: "SUBEB/SCH/PRO/FIN/1444/1", date: "Apr 2026", status: "Awarded", client: "Benue State Universal Basic Education Board",
    title: "UBE Standard Block of 3 Classrooms, Office, Store & 6 VIP Toilets",
    where: "LGEA Primary School, Wailomayo · Makurdi LGA, Benue State", value: "₦109.4M",
    note: "Six-month completion period, with a 30% mobilisation payment. The largest contract in this record." },
];

export const gallery = [
  { src: "/images/hero-house.jpg", alt: "Contemporary two-storey residence with glass balustrade and stone feature wall", cap: "Contemporary residential", cls: "md:col-span-2 md:row-span-2" },
  { src: "/images/site-frame.jpg", alt: "Multi-storey building under construction behind scaffolding", cap: "Structure & finishing in progress", cls: "" },
  { src: "/images/pool-house.jpg", alt: "White modern house with swimming pool", cap: "Completed villa with pool", cls: "" },
  { src: "/images/carcass.jpg", alt: "Terrace of townhouses at concrete carcass stage", cap: "Carcass stage · terrace housing", cls: "md:col-span-2" },
  { src: "/images/site-finishing.jpg", alt: "Two-storey building with scaffolding during finishing works", cap: "Finishing works", cls: "" },
  { src: "/images/gate.jpg", alt: "Gated estate entrance with paved driveway", cap: "Estate entrance & gatehouse", cls: "md:col-span-2" },
  { src: "/images/land.jpg", alt: "Cleared and plotted land at sunset ready for development", cap: "Plotted land for development", cls: "" },
];

export const safety = [
  { t: "Leadership", d: "Set a clear example by applying good leadership attributes every day." },
  { t: "Participation", d: "Actively contribute to company and client HSE programmes." },
  { t: "Compliance", d: "Lead by example and always follow defined systems of work." },
  { t: "Stop work", d: "Every person has the right to stop work when people, the environment or assets are at risk." },
  { t: "Reporting", d: "Report all concerns immediately to prevent incidents and drive improvement." },
];

export const credentials = [
  { k: "CAC", t: "Incorporated", d: "Corporate Affairs Commission" },
  { k: "NRS", t: "Tax clearance", d: "Nigeria Revenue Service" },
  { k: "BPP", t: "Registered contractor", d: "Bureau of Public Procurement" },
  { k: "PENCOM", t: "Pension compliant", d: "National Pension Commission" },
  { k: "NSITF", t: "ECS cleared", d: "Employees' Compensation" },
  { k: "ITF", t: "Training fund", d: "Industrial Training Fund" },
  { k: "SCUML", t: "Registered", d: "Anti-money laundering unit" },
];
