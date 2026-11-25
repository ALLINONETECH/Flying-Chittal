// Blog metadata — add a new object to publish a new blog post.
//
// Fields:
//   id          – unique number (increment from last)
//   title       – article headline
//   excerpt     – short summary shown on the blog card
//   imageKey    – key in blogImageMap.js used as the cover image
//   link        – URL path (e.g. "/myNewBlog")
//   component   – JSX filename without extension in src/pages/Blog/ for hand-crafted pages.
//                 OMIT this field (or set null) to use the DynamicBlog template automatically.
//   category    – badge label on the card
//   date        – ISO date string "YYYY-MM-DD" — used for sorting (latest first)
//   theme       – DynamicBlog colour theme: indigo | teal | rose | amber | emerald | blue (default: indigo)
//   content     – array of sections rendered by DynamicBlog (only needed when component is absent)
//
// ── Section types for content[] ──────────────────────────────────────────────
//   { type:"intro",      heading?:"", text:"..." }
//   { type:"highlights", title?:"", items:[{ icon:"map|eye|currency|shield|chart-bar|users|clock|star|lightning|check|truck|leaf|globe|cpu|rocket|layers", title:"", description:"" }] }
//   { type:"narrative",  badge?:"", heading:"", paragraphs:[""], imageKey:"", imageAlt:"", imageRight?:true }
//   { type:"gallery",    title?:"", images:[{ imageKey:"", alt:"", fullWidth?:true }] }
//   { type:"bullets",    title?:"", items:["point 1", "point 2"] }
//   { type:"richText",   heading?:"", paragraphs:[""] }
//   { type:"keyStats",   title?:"", stats:[{ value:"800+", label:"Vehicles" }] }
//   { type:"cta",        heading:"", text?:"", buttonText:"", buttonLink:"" }
//   { type:"video",      title?:"", url:"https://youtu.be/..." }
//
// When migrating to an API, replace this export with a fetch call returning the same shape.

const blogs = [
    {
        id: 1,
        title: "Revolutionizing Data Management for Enterprise Digital Transformation",
        excerpt:
            "MACH architecture — Microservices, API-first, Cloud-native, and Headless — allows businesses to deploy an ecosystem of pluggable, scalable, and replaceable third-party solutions to solve discrete business problems.",
        imageKey: "Revolution",
        link: "/edgeComputing",
        component: "EdgeComputing",
        category: "Technology",
        date: "2023-06-01",
    },
    {
        id: 2,
        title: "Empowering Businesses with MACH Architecture",
        excerpt:
            "The Digital Transformation initiative of enterprises is typically focused on the enablement of better products, services, experience, or business models. At the heart of such transformation is data.",
        imageKey: "Empowering1",
        link: "/mACHArchitecture",
        component: "MACHArchitecture",
        category: "Architecture",
        date: "2023-09-01",
    },
    {
        id: 3,
        title: "Streamlining Fertilizer Supply Chain",
        excerpt:
            "Managing Outbound Supply chain for Fertilizer sector is often cumbersome as the allocation and distribution is under the control of the Government of India, with 99% transportation managed by Indian Railways.",
        imageKey: "Streamline",
        link: "/fertilizer",
        component: "Fertilizer",
        category: "Supply Chain",
        date: "2023-12-01",
    },
    {
        id: 4,
        title: "Revolutionizing Mining and Ore Processing",
        excerpt:
            "Revolutionize logistics in the mining and ore processing industry by harnessing the power of IoT and Smart technologies, unlocking unprecedented efficiency and optimization.",
        imageKey: "Revolution2",
        link: "/logisticsIntelligence",
        component: "LogisticsIntelligence",
        category: "Mining",
        date: "2024-03-01",
    },
    {
        id: 5,
        title: "Optimizing Operations in Mining and Metal Industries",
        excerpt:
            "Some of the typical challenges faced by a Mining and Metal Industries whose business is diversified to Iron and Steel Plants and mines. Manual data collection from various entities causes major bottlenecks.",
        imageKey: "Optimize",
        link: "/miningMetal",
        component: "MiningMetal",
        category: "Industrial",
        date: "2024-06-01",
    },
    {
        id: 6,
        title: "Flying Chital's Impactful Presence at the 2nd Odisha Mining & Infrastructure International Expo 2024",
        excerpt:
            "Flying Chital showcased its groundbreaking logistics platform at the expo, redefining industry standards with cutting-edge innovation and excellence, driving efficiency and sustainability.",
        imageKey: "ExpoCovr",
        link: "/MiningExpo",
        component: "MiningExpo",
        category: "Events",
        date: "2024-10-01",
    },
    {
        id: 7,
        title: "Driving Smart Governance Forward: SVMS Launched in Bhubaneswar",
        excerpt:
            "Flying Chital proudly launches the Smart Vehicle Management System (SVMS) at BMC, enabling real-time tracking of 800+ vehicles for smarter, more transparent urban governance.",
        imageKey: "SVMSCover",
        link: "/svmsLaunch",
        component: "SVMSLaunch",
        category: "Launch",
        date: "2026-04-05",
    },
    {
        id: 8,
        title: "Industry 5.0 and Agentic AI: Building Human-Centric, Resilient Operations",
        excerpt:
            "Industry 5.0 is not about replacing people with AI. It is about combining human judgment with AI speed and agentic autonomy to build measurable, sustainable business outcomes.",
        imageKey: "Industry",
        link: "/industry5-agentic-ai",
        category: "Technology",
        date: "2026-04-20",
        theme: "blue",
        content: [
            {
                type: "intro",
                heading: "The Shift From Industry 4.0 to Industry 5.0",
                text: "Industry 4.0 focused on connectivity through IoT, data pipelines, and automation. Industry 5.0 builds on that base and advances a more complete goal: human-centric, sustainable, and resilient industrial ecosystems.",
            },
            {
                type: "highlights",
                title: "What Defines This Next Phase",
                items: [
                    {
                        icon: "users",
                        title: "Human judgment stays central",
                        description:
                            "People bring context, creativity, and accountability in high-impact decisions.",
                    },
                    {
                        icon: "cpu",
                        title: "AI augments execution",
                        description:
                            "AI delivers speed, pattern recognition, and predictive capability at scale.",
                    },
                    {
                        icon: "rocket",
                        title: "Agentic AI adds autonomy",
                        description:
                            "Systems can initiate actions, adapt workflows, and coordinate across operations.",
                    },
                    {
                        icon: "shield",
                        title: "Resilience becomes operational",
                        description:
                            "Enterprises can respond faster to disruption without losing governance control.",
                    },
                ],
            },
            {
                type: "richText",
                heading: "Enter Agentic AI: The Next Leap",
                paragraphs: [
                    "Traditional AI systems are mostly reactive: they analyze and recommend. Agentic AI goes further by taking initiative where policy permits.",
                    "In logistics, that means systems that do not just detect delays but reroute shipments automatically. In plants, anomalies are not only flagged but resolved in real time through coordinated actions.",
                    "This shift is already underway. The core question is no longer if autonomous assistance is possible, but where it creates real operational value.",
                ],
            },
            {
                type: "bullets",
                title: "Where AI and Agentic AI Become Ubiquitous",
                items: [
                    "Operations and Manufacturing: Predictive maintenance evolves into self-healing systems; production plans adapt to real-time constraints; quality control becomes increasingly autonomous.",
                    "Logistics and Supply Chain: Route optimization adjusts in motion; fraud risks are detected earlier; exception handling is increasingly end-to-end and automated.",
                    "Workforce Augmentation: AI copilots support operators and decision-makers; dependence on tribal knowledge decreases; onboarding and upskilling accelerate.",
                    "Enterprise Decision-Making: Dashboards mature into decision engines with scenario simulation, risk forecasting, and continuous optimization.",
                    "Everyday Business Processes: Compliance tracking, customer interactions, and cross-functional coordination become intelligent and low-friction.",
                ],
            },
            {
                type: "narrative",
                badge: "Avoiding the Hype Trap",
                heading: "Adopt AI with purpose, not pressure",
                paragraphs: [
                    "Every technology wave brings overenthusiasm. The risk is implementing AI because it is available, not because it is necessary.",
                    "Common pitfalls include solving low-impact problems with high-complexity systems, treating deployments as showcases, and underestimating integration, maintenance, and training costs.",
                    "The result is familiar: high investment, low utilization, and eventual disillusionment.",
                ],
                imageKey: "Optimize",
                imageAlt: "Industrial operations optimization dashboard",
                imageRight: true,
            },
            {
                type: "bullets",
                title: "The Right Lens: Objective Cost-Benefit Thinking",
                items: [
                    "What exact business problem are we solving?",
                    "What measurable impact can be delivered: cost, efficiency, risk, or service quality?",
                    "Is AI the simplest viable solution, or unnecessary complexity?",
                    "What is the expected payback period and adoption curve?",
                    "Can the solution deliver repeatable value, not one-time novelty?",
                ],
            },
            {
                type: "richText",
                heading: "Flying Chital's Perspective: Practical Intelligence Over Theoretical Innovation",
                paragraphs: [
                    "At Flying Chital, technology is a means to business outcomes. Real transformation depends not only on innovation but also on how quickly teams can absorb and use it.",
                    "That is why solutions are designed for ease of use, rapid adoption, operational relevance, and scalable growth. The focus remains on high-impact pain points with measurable gains from day one.",
                    "This moves enterprises from investment-heavy experimentation to value-driven deployment.",
                ],
            },
            {
                type: "highlights",
                title: "The Road Ahead: Human + AI Synergy",
                items: [
                    {
                        icon: "check",
                        title: "Agentic AI handles repetition",
                        description:
                            "High-frequency decisions, ongoing adjustments, and data-heavy coordination can run with policy-aware autonomy.",
                    },
                    {
                        icon: "star",
                        title: "Humans lead strategy",
                        description:
                            "People focus on oversight, innovation, and ethical governance where judgment is essential.",
                    },
                    {
                        icon: "globe",
                        title: "Balance determines winners",
                        description:
                            "Successful organizations leverage intelligence without losing control and adopt innovation without losing purpose.",
                    },
                ],
            },
            {
                type: "cta",
                heading: "AI is infrastructure, not the destination",
                text: "The true differentiator is not who adopts AI first, but who adopts it wisely. Before every deployment, ask: does this create real value or just visible complexity?",
                buttonText: "Talk to Flying Chital",
                buttonLink: "/contact",
            },
        ],
    },
    {
        id: 9,
        title: "From the Mine to the Manufacturing Plant: Predicting Quantity and Quality",
        excerpt:
            "How intelligent multimodal tracking, digital twins, blend modelling, and predictive analytics can reconcile quantity and quality across mines, conveyors, stockyards, rail, and manufacturing plants.",
        imageKey: "BlogMining",
        link: "/from-mine-to-manufacturing-plant",
        category: "Mining",
        date: "2026-11-25",
        theme: "amber",
        content: [
            {
                type: "intro",
                heading: "Predicting the Blend Before It Reaches the Plant",
                text: "In metals, mining, and manufacturing, finished-product quality is shaped well before production starts. Iron ore, coal, limestone, and other bulk materials come from different sources, and each delivery can vary in grade, moisture, and chemical composition. As these materials travel by road, rail, and conveyor, are stored in stockyards, and are blended for consumption, a practical question emerges: do we know what quantity and quality will actually reach the plant, early enough to respond?",
            },
            {
                type: "richText",
                heading: "One View of Material Across Every Route",
                paragraphs: [
                    "Flying Chital's Intelligent Multimodal Quantity & Quality Tracking and Blend Reconciliation platform connects material movement with stockyard inventory and plant requirements. It is designed to follow material from its origin through transport, unloading, storage, blending, reclaiming, and consumption.",
                    "Rather than treating each truck, rake, conveyor, or stockyard as a separate source of records, the platform builds a shared operational picture: what material moved, where it came from, how much is available, and how its quality changes as it combines with other material.",
                ],
            },
            {
                type: "richText",
                heading: "Following Blends Along Pipe Conveyors",
                paragraphs: [
                    "On a long conveyor with multiple loading and transfer points, each new addition can change the blend already in motion. The digital model accounts for the quantity added at each point, belt speed, travel time, material source, moisture, and available chemical analysis.",
                    "As the material advances, the system recalculates source contributions and the weighted blend. Teams can see how the mix is expected to change along the route and estimate the quality of the material before it arrives at the plant.",
                ],
            },
            {
                type: "richText",
                heading: "Building Material Genealogy in Road and Rail Stockyards",
                paragraphs: [
                    "A stockyard may receive material from many mines through hundreds of truck deliveries or through railway rakes containing material from multiple sources. Recording origin, quantity, time, unloading location, and quality information creates a traceable history for incoming material.",
                    "As deliveries are added and stock is reclaimed, the system updates inventory quantities, source-wise contribution, and estimated blended characteristics. Truck-wise, rake-wise, and wagon-wise records feed a consistent view of stockyard inventory, regardless of how the material arrived.",
                ],
            },
            {
                type: "richText",
                heading: "Knowing What Is Available for Production",
                paragraphs: [
                    "The most useful measure is not only what was loaded or received, but what is available to consume at a particular time. Combining movement, unloading, stockyard, reclaiming, and consumption information helps estimate available tonnes, source contribution, moisture, blended chemistry, and expected availability.",
                    "This gives production teams a better view of future plant feed and reduces the gap between a receipt record and the material that can actually be used in the process.",
                ],
            },
            {
                type: "richText",
                heading: "Connecting Daily Blend Plans to Operational Reality",
                paragraphs: [
                    "Plants work to defined blend and production plans. The platform can compare actual and predicted material characteristics with those requirements, highlighting emerging differences in parameters such as total iron, silica, alumina, moisture, material grade, and source contribution.",
                    "When a shortfall or mismatch becomes visible early, planners have more time to review supply and production choices instead of discovering the deviation only after the material has entered the process.",
                ],
            },
            {
                type: "richText",
                heading: "From Detecting Deviations to Evaluating Responses",
                paragraphs: [
                    "A warning is most valuable when it helps teams decide what to do next. Using available source quantities, material quality, transport constraints, operating capacity, and production needs, mathematical optimization and AI-assisted decision support can help evaluate alternative blend choices.",
                    "Options may include adjusting quantities from particular sources, changing loading rates at conveyor transfer points, selecting an alternate material combination, or modifying stockyard reclaiming sequences. The intent is to support decisions that bring the expected blend closer to plan while respecting operational constraints.",
                ],
            },
            {
                type: "richText",
                heading: "Forecasting Plant Feed Before It Arrives",
                paragraphs: [
                    "A Digital Twin of material movement can combine conveyor speed, loading rates, travel times, stockyard activity, and material genealogy to estimate what may reach the plant in the next 30 or 60 minutes, or further ahead where the available data supports it.",
                    "Planners can use these forecasts to assess expected quantity, arrival time, blend, and quality against the production plan. If a mismatch is projected, the team can consider corrective measures while there is still time to influence the outcome.",
                ],
            },
            {
                type: "highlights",
                title: "Technology Working as One Operational System",
                items: [
                    {
                        icon: "layers",
                        title: "Digital Twin and material genealogy",
                        description:
                            "Represent material movement, inventory, and blending as a connected operational model.",
                    },
                    {
                        icon: "cpu",
                        title: "Industrial IoT and integration",
                        description:
                            "Connect relevant weighbridges, belt weighers, PLCs, sensors, GPS, ERP, MES, and laboratory systems.",
                    },
                    {
                        icon: "chart-bar",
                        title: "Modelling and predictive analytics",
                        description:
                            "Apply mass balance, weighted blend calculations, and forecasts to estimate future material conditions.",
                    },
                    {
                        icon: "rocket",
                        title: "Optimization and decision support",
                        description:
                            "Evaluate practical material combinations and operational adjustments against production needs.",
                    },
                ],
            },
            {
                type: "richText",
                heading: "Why Quantity and Quality Intelligence Matters",
                paragraphs: [
                    "For steel plants, beneficiation operations, mining complexes, cement works, and other bulk-material-intensive industries, raw-material management affects more than logistics. It influences production efficiency, product consistency, energy use, inventory confidence, and operating cost.",
                    "Connecting quantity, quality, and movement can improve reconciliation, clarify stockyard conditions, support adherence to blend plans, surface deviations earlier, and reduce dependence on disconnected records and manual reporting. The result is a stronger basis for timely, informed operating decisions.",
                ],
            },
            {
                type: "richText",
                heading: "Every Tonne Accounted For. Every Blend Understood.",
                paragraphs: [
                    "The next step in industrial digital transformation is to connect transport, conveyors, stockyards, blending, inventory, and production planning rather than digitizing each activity in isolation.",
                    "Flying Chital's goal is to help create that connected view—from the mine to the stockyard, along the conveyor, and into the manufacturing plant—so teams can understand what is moving, how much is moving, what its quality is, what it may become after blending, and when it is expected to be available.",
                    "Knowing what is in inventory matters. Having a reliable view of what will be available next, and how it aligns with production, can make that knowledge operationally useful.",
                ],
            },
            {
                type: "video",
                title: "Watch the Solution Overview",
                url: "https://youtu.be/siAM5BLBI00",
            },
            {
                type: "cta",
                heading: "Read the Complete LinkedIn Article",
                text: "Explore the full Intelligent Multimodal Quantity & Quality Tracking and Blend Reconciliation article.",
                buttonText: "Open on LinkedIn",
                buttonLink:
                    "https://www.linkedin.com/pulse/from-mine-manufacturing-plant-what-you-could-predict-quality-mishra-mprgf/",
            },
        ],
    },
    // {
    //     id: 8,
    //     title: "Smart Fleet Visibility: A Dynamic Blog Example",
    //     excerpt:
    //         "This sample article demonstrates how to publish a complete themed blog using only data in blogs.js, without creating a separate JSX page.",
    //     imageKey: "Revolution2",
    //     link: "/smartFleetVisibility",
    //     category: "Demo",
    //     date: "2026-04-06",
    //     theme: "teal",
    //     content: [
    //         {
    //             type: "intro",
    //             heading: "One Data Entry, One Full Blog Page",
    //             text: "With the DynamicBlog renderer, you can define layout blocks in plain data. New posts become faster to ship, easier to review, and consistent in style.",
    //         },
    //         {
    //             type: "highlights",
    //             title: "What This Example Covers",
    //             items: [
    //                 {
    //                     icon: "layers",
    //                     title: "Section-driven layout",
    //                     description:
    //                         "Each section in content[] maps to a reusable UI block like intro, highlights, gallery, and CTA.",
    //                 },
    //                 {
    //                     icon: "rocket",
    //                     title: "No new JSX required",
    //                     description:
    //                         "By omitting component, the route automatically uses DynamicBlog for this entry.",
    //                 },
    //                 {
    //                     icon: "shield",
    //                     title: "Consistent storytelling",
    //                     description:
    //                         "Themes and section types keep visual quality consistent across all new posts.",
    //                 },
    //                 {
    //                     icon: "clock",
    //                     title: "Faster publishing flow",
    //                     description:
    //                         "Content teams can add new blogs by editing a single data object and image map.",
    //                 },
    //             ],
    //         },
    //         {
    //             type: "narrative",
    //             badge: "How It Works",
    //             heading: "Dynamic sections power the page structure",
    //             paragraphs: [
    //                 "The hero, cover image, and section blocks are all generated from this object. This means the same component can render many article styles safely.",
    //                 "As long as imageKey values exist in blogImageMap.js and section fields follow the schema, the page will render without additional route or component work.",
    //             ],
    //             imageKey: "SVMSCover",
    //             imageAlt: "Fleet tracking control center dashboard",
    //             imageRight: true,
    //         },
    //         {
    //             type: "gallery",
    //             title: "Sample Visual Blocks",
    //             images: [
    //                 {
    //                     imageKey: "ExpoCovr",
    //                     alt: "Expo platform showcase",
    //                     fullWidth: true,
    //                 },
    //                 {
    //                     imageKey: "Empowering1",
    //                     alt: "Connected enterprise operations",
    //                 },
    //                 {
    //                     imageKey: "Streamline",
    //                     alt: "Supply chain visibility example",
    //                 },
    //             ],
    //         },
    //         {
    //             type: "keyStats",
    //             title: "Example Outcome Metrics",
    //             stats: [
    //                 { value: "1", label: "Data entry to publish" },
    //                 { value: "0", label: "New JSX files required" },
    //                 { value: "8", label: "Section types supported" },
    //                 { value: "6", label: "Built-in visual themes" },
    //             ],
    //         },
    //         {
    //             type: "cta",
    //             heading: "Want this format for your next blog?",
    //             text: "Share your title, summary, and section content. We can publish it by updating data only.",
    //             buttonText: "Contact Us",
    //             buttonLink: "/contact",
    //         },
    //     ],
    // },
];

export default blogs;
