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
