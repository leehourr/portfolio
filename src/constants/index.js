const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "github",
        name: "Github", // was "Photos"
        icon: "github.png",
        link: "https://github.com/leehourr",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    // {
    //     id: "trash",
    //     name: "Archive", // was "Trash"
    //     icon: "trash.png",
    //     canOpen: false,
    // },
];

const techStack = [
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "TypeScript"],
    },
    {
        category: "Mobile",
        items: ["React Native", "Expo"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "Sass", "CSS"],
    },
    {
        category: "Backend",
        items: ["Laravel", "Node.js", "Express", "NestJS"],
    },
    {
        category: "Database",
        items: ["MySql", "Sql Server", "MongoDB", "Redis"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "Docker"],
    },
];

const socials = [
    {
        id: 1,
        text: "Telegram",
        icon: "/icons/telegram.svg",
        bg: "#23A0DC",
        link: "https://t.me/Lhourrr",
    },
    {
        id: 2,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#1A1E21",
        link: "https://github.com/leehourr",
    },
    {
        id: 3,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#0072B1",
        link: "https://www.linkedin.com/in/leang-lyhour-9930931a5/",
    },
    {
        id: 4,
        text: "Gmail",
        icon: "/icons/gmail.svg",
        bg: "white",
        link: "mailto:leehourdev@gmail.com",
    },

];


export {
    navLinks,
    navIcons,
    dockApps,
    techStack,
    socials,
};

const WORK_LOCATION = {
    id: 2,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "Apparel Ecommerce Web Application",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[5vh] left-120", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "Ecommerce Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "The eCommerce platform with sleek and modern solution designed for shopping the latest collections while providing unparalleled administrative control.",
                        "Instead of a simple online store, it delivers an immersive user experience complete with bold visuals, interactive product displays",
                        "Crucially, the platform fully integrates with a headless CMS, empowering clients to customize page layouts and manage all aspects of the business, including product updates, shipping rules, payment methods, and content.",
                        "This is secured with granular role-based authorization, ensuring team members only access the tools necessary for their roles.",
                    ],
                },
                {
                    id: 4,
                    name: "Ecommerce.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/Ecommerce.jpg",
                },
            ],
        },

        // ▶ Project 2
        {
            id: 6,
            name: "Internal Ministry’s Advanced Event Management System",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-40 right-80",
            windowPosition: "top-[20vh] left-100",
            children: [
                {
                    id: 1,
                    name: "Internal Ministry’s Advanced Event Management System.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "Internal Event and Scheduling Platform for centralized event and meeting management within a ministry.",
                        "The platform is engineered for robust security and features deep integration with both external calendar services and Telegram Bot messaging for automated notifications and reminders.",
                        "Key features include Single Sign On enforcement to prevent concurrent logins and a comprehensive Audit Log (Activity Log) that records every user interaction and system change, ensuring full accountability and compliance."
                    ],
                },
                {
                    id: 4,
                    name: "Internal Ministry’s Advanced Event Management System.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/Internal Ministry’s Advanced Event Management System.png",
                },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "Internal Water Utility Billing System",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[33vh] right-50",
            children: [
                {
                    id: 1,
                    name: "Water Utility Billing System.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "The Internal PWA-Enabled Water Utility Management Platform is a full-stack solution designed to streamline and manage all internal operational aspects for water suppliers. It enables real-time tracking of consumer water usage and simplifies complex billing and invoicing cycles."
                        , "Built as a Progressive Web App (PWA) for fast, cross-device access, the system offers integrated output capabilities, allowing internal teams to instantly print official invoices or deliver them digitally via Telegram messaging.",
                    ],
                },
                {
                    id: 4,
                    name: "Water Utility Billing System.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/water.jpg",
                },
            ],
        },

        // ▶ Project 4
        {
            id: 8,
            name: "Internal Cloud POS System",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-40 left-80",
            windowPosition: "top-[20vh] right-80",
            children: [
                {
                    id: 1,
                    name: "Internal Cloud POS System.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "A comprehensive Unified Cloud POS and Business Management Platform , full-stack solution integrating critical operational modules—including real-time Sales, Inventory, Finance, and HR—into a single cloud-based system.",
                        "It features a deeply integrated CMS, enabling clients to manage product details, content, and digital assets directly from the management console. This platform serves as the central operational hub for retail and inventory scaling, accessible from any location."],
                },

            ],
        },

        // ▶ Project 5
        {
            id: 9,
            name: "Client Data and Relationship Management",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-45",
            windowPosition: "top-[20vh] right-7",
            children: [
                {
                    id: 1,
                    name: "Client Data and Relationship Management.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "The Enterprise Client Data and Relationship Management Platform is a custom-built, full-stack solution designed for internal teams to manage the complete client lifecycle, including transactions, accounts, and personalized interactions.",
                        "It is engineered with robust security, featuring granular Role-Based Authorization (RBAC) to protect sensitive data and detailed, immutable Audit Logs for comprehensive compliance and system accountability.",
                    ],
                },
            ],
        },

        // ▶ Project 6
        {
            id: 10,
            name: "Tattoo Studio",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-70 left-55",
            windowPosition: "top-[10vh] right-40",
            children: [
                {
                    id: 1,
                    name: "Tattoo Studio.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "A practice website from when I first learned React."
                    ],
                },
                {
                    id: 4,
                    name: "Tattoo Studio.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/tattoo-studio.png",
                },
                {
                    id: 2,
                    name: "Tattoo Studio.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://thevoidtattxx.web.app/",
                    position: "top-30 left-50",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 1,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 2,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/more-me.jpg",
        },
        {
            id: 3,
            name: "more-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/more-me2.jpg",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-40 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/me.webp",
            description: [
                "Hey! I’m Lee Hour 👋, a developer who enjoys building sleek, interactive websites and web applications that actually work well.",
                "I’m strong in JavaScript, React, and Next.js for the front-end, and Laravel for the API back-end—and I love making things feel smooth, fast, and just a little bit delightful.",
                "I believe in code that's fast to load and easy to maintain, delivered with a polished, user-first experience.",
                "Outside of dev work, you'll find me tweaking layouts at 2 AM, sipping coffee, or jumping down a rabbit hole of new tech and concepts that I've convinced myself I absolutely need to learn (right now). 🧑‍💻",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Full Stack Developer Resume - Leang Lyhour.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

export const locations = {
    about: ABOUT_LOCATION,
    work: WORK_LOCATION,
    resume: RESUME_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };