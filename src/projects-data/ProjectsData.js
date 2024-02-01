const ProjectsData = [
    {
        id: 0,
        slug: "spotify-stats",
        title: "Spotify Stats",
        description: "Project 1 description",
        image: "project1.png",
        url: "spotify-stats-ebon.vercel.app/",
        year: "2023"
    },
    {
        id: 1,
        slug: "kwr",
        title: "KWR",
        description: "Project 2 description",
        image: "project2.png",
        // url: "kwr.link.com",
        github: "github.link",
        year: "2023",
        tools: ["HTML5 (Twig)", "JavaScript", "Sass", "Python", "Google API", "x-spreadsheet", "tippy.js"],
        feedback: {
            name: "Emil Rømer Christensen",
            position: "Head of Technology @ DEPT Agency",
            quotes: [
                { quote: "Veronika was part of a team of 2 that built an incredibly complex tool for making the lives easier for our Digital Marketing Consultants. The tool takes mundane tasks that would require hours and hours of manual labour and automates in seconds." },
                { quote: "As part of the project Veronika had to fork and modify a poorly documented spreadsheet NPM package, and republish it in order to add missing functionality vital to the teams usage of the tool." },
                { quote: "Was it not for Veronika's dedication and ability to come up with outside-the-box solutions, the project would have been cancelled." }
            ]
        },
        sections: [
            {
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
            {
                heading: "Functionality",
                content: {
                    0: "Google Drive Integration: Users can effortlessly access and open spreadsheets from Google Drive directly in the KWR tool. Similarly, users can save the final report to their Google Drive as a new version of the existing file, or by creating a new file.",
                    1: "Search Volume Retrieval: By utilizing the Google Ads API, users can fetch the keywords' search volume based on user-selected country and language.",
                }
            },
            {
                // heading: "",
                content: {
                    0: "Content Copy Analysis: Once the keyword research process is completed, a user can evaluate the keywords usage in their content piece. The analysis feature is available through a text input, an attached Google Doc file, or via a direct URL to a product page. The tool will then generate an overview of the keywords that are present in the content piece, and provide a list of the keywords that are missing from the content.",
                    1: "Multi-Tab Workflow: Each tab in the spreadsheet is dedicated to a specific stage of the keyword research process. As the user moves along the tabs, new extra keyword sorting features appear. The data in each tab is used to generate a comprehensive report in the following tab."
                }
            },
            {
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
                heading: "Collaboration & Communication",
                content: {
                    0: "Collaboration with the backend developer was fundamental to the success of this project. Regular meetings and effective communication channels were established to synchronize efforts, ensuring a cohesive integration of frontend and backend functionalities.",
                },
            },
            {
                heading: "Results & Impact",
                content: {
                    0: "The Keyword Research Tool simplifies the complex process of keyword analysis and enhances efficiency by seamlessly integrating with Google Drive and Google Ads.",
                    1: "Its user-friendly design and advanced functionalities have gained positive feedback, making it a valuable asset for content strategists and SEO professionals.",
                },
            }
        ],
        // images: [
        //     {
        //         url: "kwr/opened_sheet.png",
        //         img_description: "KWR Tool interface with an opened spreadsheet.",
        //     },
        //     {
        //         url: "kwr/code_structure.png",
        //         img_description: "UI components written with JavaScript constructor method.",
        //     },
        //     {
        //         url: "kwr/topmenu_v01_highlighted.png",
        //         img_description: "The top menu bar dynamically displays the buttons depending on the selected tab.",
        //     },
        //     {
        //         url: "kwr/topmenu_v02_highlighted.png",
        //         img_description: "",
        //     },
        //     {
        //         url: "kwr/tooltip.png",
        //         img_description: "Tooltips on hover"
        //     }
        // ],

        // text: [
        //     {
        //         heading: "KWR Tool Overview",
        //         content: {
        //             0: "The Keyword Research Tool is a powerful solution designed to streamline the process of keyword analysis. Developed in collaboration with a backend developer, this tool assists marketing specialists and SEO professionals in optimizing their content strategy by providing valuable keyword data.",
        //             1: "The Keyword Research Tool seamlessly collaborates with multiple Google APIs (such as Google Ads API, Google Drive API, and Google Sheets API), to retrieve and handle data, providing users with an array of practical features.",
        //         },
        //     },
        //     {
        //         heading: "Functionality",
        //         content: {
        //             0: "Google Drive Integration: Users can effortlessly access and open spreadsheets from Google Drive directly in the KWR tool. Similarly, users can save the final report to their Google Drive as a new version of the existing file, or by creating a new file.",
        //             1: "Search Volume Retrieval: By utilizing the Google Ads API, users can fetch the keywords' search volume based on user-selected country and language.",
        //         },
        //     },
        //     {
        //         heading: "",
        //         content: {
        //             0: "Content Copy Analysis: Once the keyword research process is completed, a user can evaluate the keywords usage in their content piece. The analysis feature is available through a text input, an attached Google Doc file, or via a direct URL to a product page. The tool will then generate an overview of the keywords that are present in the content piece, and provide a list of the keywords that are missing from the content.",
        //             1: "Multi-Tab Workflow: Each tab in the spreadsheet is dedicated to a specific stage of the keyword research process. As the user moves along the tabs, new extra keyword sorting features appear. The data in each tab is used to generate a comprehensive report in the following tab."
        //         },
        //     },
        //     {
        //         heading: "UX & UI",
        //         content: {
        //             0: "Clean and straightforward UI is designed to keep users focused on essential data. Despite the tool's rich functionality, the interface remains uncluttered, presenting only relevant buttons and settings for the current stage of the keyword research process.",
        //             1: "Powered by tippy.js, the tooltips provide concise yet informative explanations, ensuring users can easily grasp the purpose and functionality of each feature within the KWR Tool, contributing to a more intuitive and user-friendly experience.",
        //         },
        //     },
        //     {
        //         heading: "External NPM Package Customization",
        //         content: {
        //             0: "Strategic use of the x-spreadsheet npm package significantly saved development hours. This package provided a robust foundation in form of a spreadsheet object, which was used in the KWR tool to easily display data.",
        //             1: "To meet the unique requirements of the KWR tool, we modified the package by adding our own custom methods. This allowed us to implement additional features, such as dynamically displayed buttons in the top menu bar.",
        //         },
        //     },
        //     {
        //         heading: "Code Structure",
        //         content: {
        //             0: "Each component is designed to handle a specific task, emphasizing a modular architecture. A set of UI components has been developed by leveraging the JavaScript constructor method.",
        //             1: "This choice ensures a well-organized and comprehensible codebase, striking a balance between clarity and adaptability for future developments.",
        //         },
        //     },
        //     {
        //         heading: "Collaboration & Communication",
        //         content: {
        //             0: "Collaboration with the backend developer was fundamental to the success of this project. Regular meetings and effective communication channels were established to synchronize efforts, ensuring a cohesive integration of frontend and backend functionalities.",
        //         },
        //     },
        //     {
        //         heading: "Results & Impact",
        //         content: {
        //             0: "The Keyword Research Tool simplifies the complex process of keyword analysis and enhances efficiency by seamlessly integrating with Google Drive and Google Ads.",
        //             1: "Its user-friendly design and advanced functionalities have gained positive feedback, making it a valuable asset for content strategists and SEO professionals.",
        //         },
        //     },
        // ]
    },
    {
        id: 2,
        slug: "erst",
        title: "ERST",
        description: "Project 3 description",
        image: "project3.png",
        url: "https://www.google.com",
        year: "2022"
    },

    {
        id: 3,
        slug: "viking-bar",
        title: "Viking Bar",
        description: "Project 4 description",
        image: "project4.png",
        url: "https://www.google.com",
        year: "2023"
    },

    {
        id: 4,
        slug: "html5-banner-generator",
        title: "HTML5 Banner Generator",
        description: "Project 5 description",
        image: "project5.png",
        url: "https://www.google.com",
        year: "2022"
    },

    {
        id: 5,
        slug: "yogaland",
        title: "YogaLand",
        description: "Project 6 description",
        image: "project6.png",
        url: "https://www.google.com",
        year: "2021"
    }
]


export default ProjectsData;