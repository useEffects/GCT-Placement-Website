type blog = {
    header: string,
    contents: string[]
}
type keyValue = {
    header: string,
    content: string
}
type placement = {
    layoutMeta: {
        backgroundImagesName: string[],
        colors: {
            main: string,
            dark: string,
            light: string
        }
    },
    departmentMeta: {
        name: string,
        syllabus: string
    }[],
    strength: number,
    percents: [
        keyValue, keyValue, keyValue, keyValue
    ],
    bullets: blog[],
    achievements: blog[],
    statistics: {
        year: string,
        range: [number, number]
        placed: number,
        meta: [number, number, number]
    }[],
    patents?: blog & {
        link: string
    }[]
}

export const placementDatas: placement[] = [
    {
        layoutMeta: {
            backgroundImagesName: ["image1.jpg", "image2.jpg"],
            colors: {
                main: "#e4e4e4",
                dark: "#000",
                light: "#fff"
            },
        },
        departmentMeta: [
            {
                name: "Computer Science and Engineering",
                syllabus: "link"
            },
            {
                name: "Information Technology",
                syllabus: "link"
            }
        ],
        strength: 130,
        bullets: [
            {
                header: "Why US",
                contents: [
                    "Problem Solving",
                    "Data Structure Enthusiasts",
                    "Fast Learners",
                    "Inquisitive, Adaptive to Tech"
                ]
            },
            {
                header: "Our Virtuosity",
                contents: [
                    "C | C++ | Python | JAVA",
                    "Data Structures | Algorithms | PHP",
                    "MySQL | NOSQL | Android App Dev",
                    "MERN Stack Dev | Spring Boot",
                    "Django | Flutter | Machine Learning ",
                    "Deep Learning | Data Science | IOT"
                ]
            },
            {
                header: "Pre Final Year Projects",
                contents: [
                    "Home price with linear regression",
                    "Speech recognized todo app",
                    "Web messaging App",
                    "Contact management in C",
                    "Prediction using supervised MI",
                    "Restaurant and Movie ticket booking site",
                    "Smart irrigation system using IoT",
                    "Inventory management",
                    "Ambulance service provider",
                    "Employee and student attendance using facial recognition",
                    "Placement training and College Alumni thrust website",
                    "Chatbot"
                ]
            }
        ], 
        achievements: [
            {
                header: "Hip Hop - A short video app deployed in play store",
                contents: []
            },
            {
                header: "Project presentation in INFITT International Conference",
                contents: []
            },
            {
                header: "The Indian Cyber Crime Coordination Centre (I4C) Blogathon",
                contents: []
            },
            {
                header: "Project presentation in INFITT International Conference",
                contents: []
            },
            {
                header: "IBM Hackathon",
                contents: []
            },
            {
                header: "Vishwakarma Award by AICTE",
                contents: []
            }
        ], 
        percents: [
            {
                header: "65%",
                content: "of students scoring above 7.5 grade"
            },
            {
                header: "70%",
                content: "of students enrolled in Online Courses"
            },
            {
                header: "90%",
                content: "percentage of students well versed in Programming Languages"
            },
            {
                header: "40+",
                content: "industry oriented mini projects"
            }
        ], 
        statistics: [
            {
                year: "2021",
                placed: 100,
                range: [3.6, 10],
                meta: [100, 100, 127]
            },
            {
                year: "2020",
                placed: 100,
                range: [4.25, 20],
                meta: [111, 111, 121]
            },
            {
                year: "2019",
                placed: 96,
                range: [3.6, 11.5],
                meta: [101, 105, 129]
            },
            {
                year: "2018",
                placed: 96,
                range: [3.6, 11.5],
                meta: [124, 129, 140]
            },
            {
                year: "2017",
                placed: 80,
                range: [3, 10],
                meta: [109, 136, 140]
            }
        ]
    }                
]

















