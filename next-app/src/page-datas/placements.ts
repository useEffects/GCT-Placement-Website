type blog = {
    header: string,
    contents: string[]
}
type keyValue = {
    header: string,
    content: string
}
type placement = {
    category: string,
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
        category: "Programming Branches",
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
    } ,
    {
        category: "Civil Engineering",
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
                name: "Civil Engineering",
                syllabus: "link"
            },
            {
                name: " ",
                syllabus: "link"
            }
        ],
        strength: 120,
        bullets: [
            {
                header: "Why US",
                contents: [
                    "Versatile Learners",
                    "Ethical Thinkers",
                    "Problem Solvers",
                    "Innovative Designers",
                    "Team Workers",
                    "Ambitious Leaders"
                ]
            },
            {
                header: "Tools Expertise",
                contents: [
                   " AutoCad | AutoDesk 3D Max",
                   " Revit",
                    "SketchUp",
                    "E Tabs"

                ]
            },
            {
                header: "Department & Government Projects",
                contents: [
                    "Structural Auditing of Government Projects",
                    "Structural Auditing of Water Tanks",
                    "Mix Design of Concrete for Various Projects",
                    "Structural Auditing for CRPF Projects",
                    "Quality Test for Building Materials",
                    "KoundanPalayam Flyover Project",
                    "GCT Open Auditorium",
                   " Extension of GCT Library Building"
                ]
            }
        ], 
        achievements: [
            {
                header: "Sustainable Design Challenge, IIT Madras",
                contents:[]
            },
            {
                header: "Chatra Vishwakarma Awards",
                contents: []
            },
            {
                header: "Smart India Hackathon",
                contents: []
            }
        ], 
        percents: [
            {
                header: "60%",
                content: "of students scoring above 7.5 grade"
            },
            {
                header: "55%",
                content: "of students enrolled in Online Courses"
            },
            {
                header: "60%",
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
                placed: 4,
                range: [3,4.5],
                meta: [14, 34, 121]
            },
            {
                year: "2020",
                placed: 38,
                range: [3,4],
                meta: [15,40,117]
            },
            {
                year: "2019",
                placed: 70,
                range: [3,5],
                meta: [57,82,127]
            },
            {
                year: "2018",
                placed: 65,
                range: [3,5.5],
                meta: [65,100,127]
            },
            {
                year: "2017",
                placed: 42,
                range: [3,5.5],
                meta: [48,114,127]
            }
        ]
    },
    {
        category: "Circuit Branches",
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
                name: "Electrical & Electronics Engineering",
                syllabus: "link"
            },
            {
                name: "Electronics & Communication Engineering",
                syllabus: "link"
            },
            {
                name: "Electronics & Instrumentation Engineering",
                syllabus: "link"
            }
        ],
        strength: 195,
        bullets: [
            {
                header: "Why US",
                contents: [
                        "Smart and Charged Up",
                        "Innovatives Erudites",
                        "Green tech Enthusiasts",
                        "Boundless in Spirits",
                        "Ready for New Normal"

                ]
            },
            {
                header: "Our Virtuosity",
                contents: [
                     "Deep Learning",
                      "Electrical Vehicle Development",
                       "Battery Management",
                       "MATLAB | LabView DIALux | PVsyst",
                     " Machine Learning",
                      "Robotics and Automation",
                      "SQL and Data Structures",
                     "Embedded Systems | Sensor Circuit Design"

                ]
            },
            {
                header: "Pre Final Year Projects",
                contents: [
                    "Automatic Plant Watering System",
                    " Arduino Radar System",
                   " Electrical Subsystem in ATV and Tractor Designing Competition, SAE",
                   " Bipedal Robot, E Yantra, IIT Bombay",
                    "Home Automation",
                   " Chat Bot using Dialog Flow",
                    "Automatic Gas Leakage Detection",
                   " IoT Smart Alarm and Monitoring",
                  "  hird eye for Visually Challenged"  
                ]
            }
        ], 
        achievements: [
            {
                header: "Inno Champ 2020, Synopsys Hyderabad",
                contents: []
            },
            {
                header: "Business Project Contest, Siemens",
                contents: []
            },
            {
                header: "Hackware, National Level Hackathon by Schneider Electric",
                contents: []
            },
            {
                header: "International Youth Convocation,Hawaii",
                contents: []
            },
            {
                header: "SAEISS Tractor Design",
                contents: []
            }
        ], 
        percents: [
            {
                header: "60%",
                content: "of students scoring above 7.5 grade"
            },
            {
                header: "55%",
                content: "of students enrolled in Online Courses"
            },
            {
                header: "30%",
                content: "percentage of students participated in various hackathon"
            },
            {
                header: "40+",
                content: "industry oriented mini projects"
            }
        ], 
        statistics: [
            {
                year: "2021",
                placed: 9,
                range: [3.6, 13],
                meta: [130, 138, 194]
            },
            {
                year: "2020",
                placed: 86,
                range: [4.75, 8.3],
                meta: [133,152,208]
            },
            {
                year: "2019",
                placed: 82,
                range: [3,6.5],
                meta: [125,152,208]
            },
            {
                year: "2018",
                placed: 82,
                range: [3,11],
                meta: [136,166,195]
            },
            {
                year: "2017",
                placed: 84,
                range: [3, 11.2],
                meta: [152,182,195]
            }
        ]
    },
    {
        category: "Mechanical and Production Engineering",
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
                name: "Mechanical Engineering",
                syllabus: "link"
            },
            {
                name: "Production Engineering",
                syllabus: "link"
            }
        ],
        strength: 189,
        bullets: [
            {
                header: "Why US",
                contents: [
               "    Industry 4.0 Ready",
               " Industry Conversant",
                "  Machine Learning Enthusiasts",
                  " Flexible and Collaborative",
                " Prepared for the new normal"     
                ]
            },
            {
                header: "Upskilling Spree",
                contents: [
                    "Machine Learning",
                    "Robotics and Automation",
                   "Lean Manufacturing",
                    "Data Science",
                   "Six Sigma",
                   "Electric Vehicles Development",
                   "Reliability Engineering"                 

                ]
            },
            {
                header: "Pre Final Year Projects",
                contents: [
                   " Arduino EMF Detector",
                    "Design and Manufacturing of Tractor for SAEISS 2020",
                    "Design and Manufacturing of ATV for SAE BAJA 2021 and SAE International 2021",
                    "Smart Helmet",
                    "Portable Scrap Collector",
                    "Gyroscope Based Camera",
                    "Driveshaft as Suspension Link for 4WD",
                    "Bioplastic Fabrication",
                    "Fire Fighting Robot",
                    "Automated Room Cleaner"
                ]
            }
        ], 
        achievements: [
            {
                header: "SAEISS Tractor Design Team Asphalters",
                contents: []
            },
            {
                header: "SAE BAJA Team Screwtenizers",
                contents: []
            },
            {
                header: "First Tech Challenge, Caterpillar INC Team Sqweekers",
                contents: []
            },
            {
                header: "Smart India Hackathon Team Panamera",
                contents: []
            }
        ], 
        percents: [
            {
                header: "70%",
                content: "of students scoring above 7.5 grade"
            },
            {
                header: "60%",
                content: "of students enrolled in Online Courses"
            },
            {
                header: "80%",
                content: "percentage of students well versed in Design Tools"
            },
            {
                header: "40+",
                content: "industry oriented mini projects"
            }
        ], 
        statistics: [
            {
                year: "2021",
                placed: 6,
                range: [3.6,8],
                meta: [53,85,195]
            },
            {
                year: "2020",
                placed: 78,
                range: [3.6,6],
                meta: [94,120,185]
            },
            {
                year: "2019",
                placed: 65,
                range: [3,6.5],
                meta: [97,164,198]
            },
            {
                year: "2018",
                placed: 70,
                range: [3,5.5],
                meta: [110,145,185]
            },
            {
                year: "2017",
                placed: 64,
                range: [3, 5.5],
                meta: [90,140,188]
            }
        ]
    },
    {
        category: "Industrial Biotechnology",
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
                name: "Industrial Biotechnology Engineering",
                syllabus: "link"
            },
            {
                name: " ",
                syllabus: "link"
            }
        ],
        strength: 105,
        bullets: [
            {
                header: "Why US",
                contents: [
                    	"Active Learners",
                    	"Quick Innovators",
                    	"Young Leaders",
                    	"Practical Skills"
                      
                ]
            },
            {
                header: "Upskilling Spree",
                contents: [
                       " Microbiological Techniques",
                       " Fermentation Techniques",
                        "PhytoChemical Extraction Techniques",
                        "Immunological Screening",
                        "Bioinformatics",
                       " C | C++ | Python",
                       " Matlab | MiniTab",
                        "Labview"
              

                ]
            },
            {
                header: "Pre Final Year Projects",
                contents: [
                        "BioPlastics by Blending Polypropylene and Polycasein",
                      "  Water Purification usingMoringa Oleifera",
                        "Enhancement of Mechanical Properties by Recycled PP and Human hair Composite",
                        "Cost Effective treatment of Wastewater",
                       " Cancer resistant Artificialuterus by pGLA"
                ]
            }
        ], 
        achievements: [
            {
                header: "Smart India Hackathon, 2020 Edition",
                contents: []
            },
            {
                header: "Floating Raft Technology for wastewater treatment",
                contents: []
            },
            {
                header: "Electrochemical Sensor to measure steroids in milk",
                contents: []
            },
            {
                header: "Glucometer based Sensor to measure",
                contents: []
            },
            {
                header: "Technique to detect food adulteration",
                contents: []
            }
            ,
            {
                header: "Biosensor to check and measure organophosphorus",
                contents: []
            }
        ], 
        percents: [
            {
                header: "60%",
                content: "of students scoring above 7.5 grade"
            },
            {
                header: "55%",
                content: "of students enrolled in Online Courses"
            },
            {
                header: "30%",
                content: "percentage of students participated in hackathons"
            },
            {
                header: "20+",
                content: "industry oriented mini projects"
            }
        ], 
        statistics: [
            {
                year: "2021",
                placed: 8,
                range: [3,4.5],
                meta: [40,50,67]
            },
            {
                year: "2020",
                placed: 65,
                range: [3,4.5],
                meta:[26,40,69]
            },
            {
                year: "2019",
                placed: 80,
                range: [3,5.5],
                meta: [48,60,82]
            },
            {
                year: "2018",
                placed: 60,
                range: [3,5],
                meta: [37,62,74]
            },
            {
                year: "2017",
                placed: 56,
                range: [3,3.6],
                meta: [75,61,34]
            }
        ]
    }
                    
]

















