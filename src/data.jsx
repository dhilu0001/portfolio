// Everything on the page comes from this file. Keep it true: interviewers ask about all of it.

export const profile = {
  name: "Dhiluraj V",
  firstName: "Dhiluraj",
  role: "Senior AI Engineer",
  location: "Kerala, India (IST)",
  email: "dhilu0001@gmail.com",
  github: "https://github.com/dhilu0001/",
  linkedin: "https://www.linkedin.com/in/dhiluraj-v",
  resume: "", // paste the new résumé PDF link here; the link hides while empty
  photo: "/dhilu.jpg",
};

export const intro = {
  headline:
    "In 2015 I fixed Outlook on one laptop at a time. Now I build AI agents that investigate entire production systems on their own.",
  lede:
    "I'm Dhiluraj, a senior AI engineer. Eleven years of shipping software taught me what production really asks for. Today I put that into AI agents that engineers trust with their live systems.",
};

export const links = [
  { href: "#timeline", text: "Timeline" },
  { href: "#work", text: "Work" },
  { href: "#projects", text: "Projects" },
  { href: "#about", text: "About" },
  { href: "#contact", text: "Contact" },
];

// The career, oldest first. `scope` is how much of the system each era's work touched (0–100):
// it drives the bar under each entry.
export const eras = [
  {
    year: "2015",
    title: "Fixing machines one at a time",
    where: "Wipro",
    story:
      "My first job was getting people's laptops working again. Instead of fixing each one by hand, I wrote VBScript and C# tools that repaired Outlook profiles and full C: drives remotely. That was the first lesson I kept: automate the fix, don't repeat it.",
    stack: "VBScript, C#, Windows",
    scope: 6,
    scopeLabel: "one person's laptop",
  },
  {
    year: "2018",
    title: "Into the cloud",
    where: "Wipro",
    story:
      "I moved to AWS and JavaScript. My Lambda functions picked Amazon orders off SQS and synced them to SAP, so inventory updated in real time instead of in overnight batches.",
    stack: "AWS Lambda, Node.js, SQS, Apigee",
    scope: 20,
    scopeLabel: "an order pipeline",
  },
  {
    year: "2019",
    title: "Building products people use",
    where: "Wipro, then QBurst",
    story:
      "I passed the AWS Solutions Architect exam and started pairing Lambda with React. Over four years I shipped a pricing and bidding platform for freight brokers and carriers, and an order-tracking app used by more than 10,000 people.",
    stack: "React, Redux, AWS Lambda, GraphQL",
    scope: 38,
    scopeLabel: "apps used by 10,000+ people",
  },
  {
    year: "2023",
    title: "Owning the whole stack",
    where: "UST",
    story:
      "Python and FastAPI joined React, and I started owning features from database to UI. It's the stack behind the cloud resource portal I build today, and the investment tools 1,000+ users rely on.",
    stack: "Python, FastAPI, React, TypeScript, Docker, Kubernetes",
    scope: 55,
    scopeLabel: "3,000+ cloud assets",
  },
  {
    year: "2025",
    title: "Teaching software to read",
    where: "UST",
    story:
      "My first LLM system: RAG over Confluence and SharePoint. People ask questions or get a page summarised right inside Microsoft Teams, without digging through wikis.",
    stack: "RAG, ChromaDB, Azure OpenAI, Microsoft Teams",
    scope: 75,
    scopeLabel: "a company's documentation",
  },
  {
    year: "Now",
    title: "Agents that investigate production",
    where: "UST",
    story:
      "Since late 2025 I've been building the agent layer of an AI operations platform: an agent that works an incident the way a senior engineer would: across 140+ tools and 25+ systems, on its own. Alongside it I build the Backstage cloud resource portal. In 2026 I earned the Claude Certified Developer – Foundations credential with a full score.",
    stack: "Strands Agents, Azure OpenAI, FastAPI, Redis, React, Backstage",
    scope: 100,
    scopeLabel: "a whole production estate",
  },
];

// Deep dives. No client or internal product names: describe the system and the result.
export const work = [
  {
    title: "Production incident agent",
    summary: "Turns a 45-minute incident hunt into a 2-minute answer",
    problem:
      "When production broke, engineers spent 30–60 minutes hopping between the ticketing system, Kubernetes, Grafana, cloud consoles and log stores, piecing the story together by hand.",
    built: [
      "The agent layer of a multi-tenant AI operations platform. Ask one question in plain English, and the agent loads the right runbooks, chooses from 140+ tools across 25+ connectors and runs 5–10 investigations in parallel.",
      "Strands Agents and Azure OpenAI, FastAPI, a Redis job queue with async workers, and a React UI that streams every step of the agent's reasoning live.",
      "Built to be trusted in production: read-only on Kubernetes and tickets, writes sandboxed behind human approval, and an audit trail of every call.",
    ],
    result:
      "A root cause with the evidence attached in about 2 minutes. Built in roughly 100 days, now used by 6 teams, and presented at UST's Best of US Kochi 2026.",
  },
  {
    title: "Cloud resource portal",
    summary: "3,000+ cloud assets, one self-service portal, 40% off the Azure bill",
    problem:
      "Teams managed thousands of VMs, apps and platform services through tickets and one-off scripts. Onboarding was slow, and idle resources quietly kept costing money.",
    built: [
      "An internal developer portal on Backstage, with custom React and TypeScript plugins and the backend plugins and APIs behind them.",
      "Self-service onboarding, backups, database refreshes and scheduling, plus LLM search across the portal.",
    ],
    result: "One place to run 3,000+ cloud assets, and an Azure bill 40% lower.",
  },
];

export const projects = [
  {
    title: "Market-signal agent",
    text: "A personal agent for Indian stocks and IPOs. It reads tips from Telegram, pulls price history, news, IPO grey-market data and Reddit sentiment, and has Claude reason over all of it into an advisory signal.",
    url: "https://stock-predictor-dashboard.vercel.app/",
    linkText: "Open the live dashboard",
  },
  {
    title: "FoodVision",
    text: "An EfficientNet-B2 image classifier trained with transfer learning on Food-101 in PyTorch, deployed as a live app on Hugging Face Spaces.",
    url: "https://huggingface.co/spaces/Dhiluraj/foodvision_101",
    linkText: "Try it on Hugging Face",
  },
];

// Grouped by how recently he has used each tool, instead of star ratings. Keep in step with the résumé.
export const toolkit = [
  {
    label: "Daily, in production",
    items: [
      "Strands Agents", "Azure OpenAI", "RAG", "ChromaDB", "Python", "FastAPI", "Redis", "React",
      "TypeScript", "Backstage", "AKS / Kubernetes", "Grafana", "Prometheus", "Azure Monitor", "ServiceNow",
    ],
  },
  {
    label: "Shipped before",
    items: ["AWS Lambda", "SQS", "Node.js", "GraphQL", "Redux", "Next.js", "DynamoDB"],
  },
  {
    label: "Training and learning",
    items: ["PyTorch (transfer learning, fine-tuning)", "Claude API", "Docker"],
  },
];

// The personal part, in his words.
export const values = [
  {
    title: "How I work best",
    text: [
      "I do my best work in long, focused stretches: a clear problem, room to think and time to finish properly. Teams that write things down, save meetings for what really needs a conversation and protect deep work get the most out of me.",
      "Async, remote-first teams suit me well, and I'm used to collaborating across time zones.",
    ],
  },
  {
    title: "Why I do this",
    text: [
      "The world still has plenty of hard problems, and I think technology is one of the best tools we have to solve them. I want to spend my time on the ones that matter and leave the earth a better place to live.",
      "I've seen it in small ways already: the incident agent gives engineers back the hour they used to lose chasing an incident across ten tools. I want to do that at a bigger scale.",
    ],
  },
  {
    title: "When I'm not working",
    text: [
      "Learning is my hobby. Right now I'm working through Aurélien Géron's Hands-On Machine Learning with Scikit-Learn and PyTorch, one chapter and one notebook at a time.",
      "And we travel. With a little one at home, I want my wife and daughter to see as many different corners of the world as we can.",
    ],
  },
];
