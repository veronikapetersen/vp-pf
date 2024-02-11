const ProjectsData = [
    {
        id: 0,
        slug: "spotify-stats",
        title: "Spotify Stats",
        image: "",
        url: "spotify-stats-ebon.vercel.app/",
        year: "2023",
        tools: ["HTML5", "JavaScript", "Sass", "React", "Next.js", "Spotify API"],
        sections: [
            {
                id: 0,
                heading: "Spotify Stats Overview",
                content: {
                    0: "Spotify Stats is a web app that allows users to view their Spotify listening history. The app displays the user's top artists and tracks, as well as their recently played tracks.",
                    1: "The app is built with React and Next.js, and is deployed on Vercel.",
                },
                images: [
                    {
                        url: "spotify-stats/spotify-stats.png",
                        img_description: "Spotify Stats interface",
                    },
                ],
            },
        ]
    },
    {
        id: 1,
        slug: "kwr",
        title: "KWR",
        image: "",
        url: "",
        github: "",
        year: "2023",
        tools: ["HTML5 (Twig)", "Sass", "JavaScript", "Python", "Google API", "x-spreadsheet", "tippy.js"],
        feedback: {
            name: "Emil Rømer Christensen",
            position: "Head of Technology @ DEPT Agency",
            quotes: [
                { quote: "Veronika was part of a team of 2 that built an incredibly complex tool for making the lives easier for our Digital Marketing Consultants. The tool takes mundane tasks that would require hours and hours of manual labour and automates in seconds." },
                { quote: "As part of the project Veronika had to fork and modify a poorly documented spreadsheet NPM package, and republish it in order to add missing functionality vital to the teams usage of the tool." },
                { quote: "Was it not for Veronika's dedication and ability to come up with outside-the-box solutions, the project would have been cancelled." }
            ]
        },
        summary: {
            heading: "KWR Tool Overview",
            content: {
                0: "The Keyword Research Tool is a powerful solution designed to streamline the process of keyword analysis. Developed in collaboration with a backend developer, this tool assists marketing specialists and SEO professionals in optimizing their content strategy by providing valuable keyword data.",
                1: "The Keyword Research Tool seamlessly collaborates with multiple Google APIs (such as Google Ads API, Google Drive API, and Google Sheets API), to retrieve and handle data, providing users with an array of practical features.",
            },
            images: [
                {
                    url: "kwr/opened_sheet.png",
                    img_description: "KWR Tool interface with an opened spreadsheet.",
                },
            ]
        },
        sections: [
            {
                id: 0,
                heading: "Functionality",
                content: {
                    0: "Google Drive Integration: Users can effortlessly access and open spreadsheets from Google Drive directly in the KWR tool. Similarly, users can save the final report to their Google Drive as a new version of the existing file, or by creating a new file.",
                    1: "Search Volume Retrieval: By utilizing the Google Ads API, users can fetch the keywords' search volume based on user-selected country and language.",
                }
            },
            {
                id: 1,
                heading: "",
                content: {
                    0: "Content Copy Analysis: Once the keyword research process is completed, a user can evaluate the keywords usage in their content piece. The analysis feature is available through a text input, an attached Google Doc file, or via a direct URL to a product page. The tool will then generate an overview of the keywords that are present in the content piece, and provide a list of the keywords that are missing from the content.",
                    1: "Multi-Tab Workflow: Each tab in the spreadsheet is dedicated to a specific stage of the keyword research process. As the user moves along the tabs, new extra keyword sorting features appear. The data in each tab is used to generate a comprehensive report in the following tab."
                }
            },
            {
                id: 2,
                heading: "UX & UI",
                content: {
                    0: "Clean and straightforward UI is designed to keep users focused on essential data. Despite the tool's rich functionality, the interface remains uncluttered, presenting only relevant buttons and settings for the current stage of the keyword research process.",
                    1: "Powered by tippy.js, the tooltips provide concise yet informative explanations, ensuring users can easily grasp the purpose and functionality of each feature within the KWR Tool, contributing to a more intuitive and user-friendly experience.",
                },
                images: [
                    {
                        url: "kwr/tooltip.png",
                        img_description: "Tooltips on hover"
                    },
                ]
            },
            {
                id: 3,
                heading: "External NPM Package Customization",
                content: {
                    0: "Strategic use of the x-spreadsheet npm package significantly saved development hours. This package provided a robust foundation in form of a spreadsheet object, which was used in the KWR tool to easily display data.",
                    1: "To meet the unique requirements of the KWR tool, we modified the package by adding our own custom methods. This allowed us to implement additional features, such as dynamically displayed buttons in the top menu bar.",
                },
                images: [
                    {
                        url: "kwr/topmenu_v01_highlighted.png",
                        img_description: "The top menu bar dynamically displays the buttons depending on the selected tab.",
                    },
                    {
                        url: "kwr/topmenu_v02_highlighted.png",
                    }
                ]
            },
            {
                id: 4,
                heading: "Code Structure",
                content: {
                    0: "Each component is designed to handle a specific task, emphasizing a modular architecture. A set of UI components has been developed by leveraging the JavaScript constructor method.",
                    1: "This choice ensures a well-organized and comprehensible codebase, striking a balance between clarity and adaptability for future developments.",
                },
                images: [
                    {
                        url: "kwr/code_structure.png",
                        img_description: "UI components written with JavaScript constructor method.",
                    }
                ]
            },
            {
                id: 5,
                heading: "Collaboration & Communication",
                content: {
                    0: "Collaboration with the backend developer was fundamental to the success of this project. Regular meetings and effective communication channels were established to synchronize efforts, ensuring a cohesive integration of frontend and backend functionalities.",
                },
            },
            {
                id: 6,
                heading: "Results & Impact",
                content: {
                    0: "The Keyword Research Tool simplifies the complex process of keyword analysis and enhances efficiency by seamlessly integrating with Google Drive and Google Ads.",
                    1: "Its user-friendly design and advanced functionalities have gained positive feedback, making it a valuable asset for content strategists and SEO professionals.",
                },
            }
        ],
    },
    {
        id: 2,
        slug: "erst",
        title: "ERST",
        image: "",
        url: "",
        github: "",
        year: "2022",
        tools: ["HTML5 (Twig)", "Sass", "JavaScript",],
        feedback: {
            name: "Emil Rømer Christensen",
            position: "Head of Technology @ DEPT Agency",
            quotes: [
                { quote: "Veronika developed the frontend for an Intranet solution for an entity in the Danish government. The tasks consisted of adapting existing modules to a new design and creating new modules. This has given her experience both working within and modifying other peoples code and creating new code from scratch." },
                { quote: "Veronika has proven to be a self-driven, strategic thinker, and result-oriented young professional who has the ability to master all the challenges that come along in a highly dynamic digital world." }
            ]
        },
        summary: {
            heading: "ERST Intranet",
            content: {
                0: "This project focused on developing the frontend for an Intranet solution for The Danish Business Authority (Erhvervsstyrelsen). The Danish Business Authority is part of the Ministry of Industry, Business and Financial Affairs of Denmark.",
                1: "The project included improving the design system by creating new components and strategically modifying existing ones, which contributed to an improved and streamlined user experience."
            },
            images: [
                {
                    url: "erst/erst0.png",
                    img_description: "Navigation & Hero components",
                },
            ]
        },
        sections: [
            {
                id: 0,
                heading: "Responsibilities",
                content: {
                    0: "New Component Development: Created new UI components tailored to the specific needs of the Intranet users, thus enhancing functionality and visual appeal.",
                    1: "Existing Component Refinement: Implemented changes to improve the performance and visual appeal of pre-existing components, aligning them with design specifications.",
                },
                images: [
                    {
                        url: "erst/erst1.png",
                        img_description: "Search component with filters is part of the Employee Search page and the News page.",
                    },
                    {
                        url: "erst/erst4.png",
                        img_description: "",
                    }
                ]
            },
            {
                id: 1,
                heading: "Key Contributions",
                content: {
                    0: "Enhanced User Interface: Introduced new components to enrich the intranet's user interface, focusing on an intuitive and seamless experience.",
                    1: "Responsive Design: Ensured components were responsive, catering to various devices and screen sizes for a consistent user experience.",
                },
                images: [
                    {
                        url: "erst/erst2.png",
                        img_description: "Calendar component with a filter by month and year. The user can create a new event.",
                    },
                ]
            },
            {
                id: 2,
                heading: "",
                content: {
                    0: "",
                    1: ""
                },
                images: [
                    {
                        url: "erst/erst3.png",
                        img_description: "Posts Feed component. The user can filter by location, and create a new post.",
                    },
                ]
            },
            {
                id: 3,
                heading: "",
                content: {
                    0: "",
                    1: ""
                },
                images: [
                    {
                        url: "erst/erst7.png",
                        img_description: "Comments component with pagination.",
                    },
                ]
            },
            {
                id: 4,
                heading: "",
                content: {
                    0: "",
                    1: ""
                },
                images: [
                    {
                        url: "erst/erst5.png",
                        img_description: "Create a New Post component.",
                    },
                ]
            },
            {
                id: 5,
                heading: "",
                content: {
                    0: "",
                    1: ""
                },
                images: [
                    {
                        url: "erst/erst6.png",
                        img_description: "Tools component. The user can add the tools to and remove from their Favourites. The bar at the bottom of the page shows the amount of tools added to Favourites.",
                    },
                ]
            },
            {
                id: 6,
                heading: "",
                content: {
                    0: "",
                    1: ""
                },
                images: [
                    {
                        url: "erst/erst8.png",
                        img_description: "IT Status component.",
                    },
                    {
                        url: "erst/erst9.png",
                        img_description: "",
                    },
                ]
            },
            {
                id: 7,
                heading: "Results & Impact",
                content: {
                    0: "The Intranet solution provided an enhanced user experience and improved functionality. The project has contributed to the Erhvervsstyrelsen's goal of streamlining internal processes and improving communication among employees.",
                    1: "The seamless integration of new components and improvements to existing ones has positively impacted the user experience, aligning the digital environment with the client's brand and design guidelines."
                },
            },
        ]
    },
    {
        id: 3,
        slug: "viking-bar",
        title: "Viking Bar",
        image: "",
        url: "dendansendeviking.dk",
        github: "",
        year: "2023",
        tools: ["HTML5", "JavaScript", "Bootstrap", "swiper.js"],
        summary: {
            heading: "Viking Bar Overview",
            content: {
                0: "As a freelance frontend developer for the Dancing Viking project, I played a key role in crafting a captivating presentational website for this intimate bar. The overarching theme, centered around a Viking aesthetics, creates a visually engaging online presence.",
                1: "Collaborating closely with a backend developer, my responsibilities extended to both frontend development and design aspects. Based on the clients requirements, I designed and developed elements that seamlessly integrated with the Viking theme."
            },
            images: [
                {
                    url: "viking/viking0.png",
                    img_description: "Viking Bar homepage: Navigation and Hero components",
                },
            ]
        },
        sections: [
            {
                id: 0,
                heading: "Design and Aesthetics",
                content: {
                    0: "The design and aesthetics of the website underscore a visual narrative that resonates with the bar's character. The thematic choice leans heavily on a Viking style, where dark, rich colours evoke the mysterious essence of Norse culture. A careful integration of wood and paper textures brings a tactile and authentic feel to the website, mirroring the warmth of a traditional Viking setting.",
                    1: "The use of a Norse font adds a layer of historical authenticity, capturing the spirit of ancient runes. This design approach not only pays homage to the bar's thematic identity but also creates a visually compelling online presence that invites guests into the unique world of the Dancing Viking.",
                },

                // content: {
                //     0: "Notable features include a detailed presentation of packages for private events, providing customers with a comprehensive overview of available options. Additionally, a carefully crafted image carousel, powered by swiper.js, adds a dynamic and visually appealing touch to the website.",
                //     1: "",
                // },
                // images: [
                //     {
                //         url: "viking/viking2.png",
                //         img_description: "",
                //     },
                // ]
            },
            {
                id: 1,
                heading: "",
                content: {
                    0: "An image carousel, powered by swiper.js, adds a dynamic and visually appealing touch to the website",
                    1: "",
                },
                images: [
                    {
                        url: "viking/viking3.png",
                        img_description: "",
                    },
                ]
            },
            {
                id: 2,
                // heading: "Design and Aesthetics",
                content: {
                    //     0: "The design and aesthetics of the website underscore a visual narrative that resonates with the bar's character. The thematic choice leans heavily on a Viking style, where dark, rich colours evoke the mysterious essence of Norse culture. A careful integration of wood and paper textures brings a tactile and authentic feel to the website, mirroring the warmth of a traditional Viking setting.",
                    //     1: "The use of a Norse font adds a layer of historical authenticity, capturing the spirit of ancient runes and contributing to an immersive user experience. This design approach not only pays homage to the bar's thematic identity but also creates a visually compelling online presence that invites guests into the unique world of the Dancing Viking.",
                },
            },
        ]
    },

    {
        id: 4,
        slug: "html5-banner-generator",
        title: "HTML5 Banner Generator",
        image: "project5.png",
        url: "https://www.google.com",
        github: "github.link",
        year: "2022",
        tools: ["HTML5", "JavaScript",],
        sections: [
            {
                id: 0,
                heading: "",
                content: {
                    0: "",
                    1: "",
                },
                images: [
                    {
                        url: "",
                        img_description: "",
                    },
                ]
            },
        ]
    },

    {
        id: 5,
        slug: "yogaland",
        title: "YogaLand",
        image: "project6.png",
        url: "https://www.google.com",
        github: "github.link",
        year: "2021",
        tools: ["HTML5", "JavaScript",],
        sections: [
            {
                id: 0,
                heading: "",
                content: {
                    0: "",
                    1: "",
                },
                images: [
                    {
                        url: "",
                        img_description: "",
                    },
                ]
            },
        ]
    }
]


export default ProjectsData;