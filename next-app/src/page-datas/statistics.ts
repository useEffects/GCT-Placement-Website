type statisticsType = {
  branch: string,
  companies: {
    imgName: string,
    companyName: string,
    students: number,
    package: string
  }[]
}

export const statisticsDatas: statisticsType[] = [

  //civil
  {
    branch: "B.E - Civil Engineering",
    companies:[
      {
        imgName: "onebill",
        companyName: "One bill Software Technologies",
        students: 2,
        package: "6.5 lpa"
      },
      {
        imgName: "zoho",
        companyName: "Zoho Corporation (Phase-2) - PROJECT Trainee (Intern) ",
        students: 2,
        package: "20000 PM"
      },
      {
        imgName: "musigma",
        companyName: "Mu Sigma",
        students: 2,
        package: "5 lpa"
      },
      {
        imgName: "tcs",
        companyName: "TCS (Ninja) ",
        students: 6,
        package: "3.36 Lpa"
      }, {
        imgName: "exterro",
        companyName: "Exterro",
        students: 5,
        package: "3.25 lpa"
      }, {
        imgName: "edgeverve",
        companyName: "Edgeverve ",
        students: 1,
        package: "8 Lpa"
      }, {
        imgName: "tcs",
        companyName: "TCS (NQT) ",
        students: 2,
        package: "3.36 lpa"
      }, {
        imgName: "sqaureshift",
        companyName: "Square Shift - Intern",
        students: 1,
        package: "7.5lpa"
      }, {
        imgName: "cts",
        companyName: "CTS",
        students: 7,
        package: "4lpa"
      }, {
        imgName: "t",
        companyName: "AQUAGREEN",
        students: 2,
        package: "4.25lpa"
      }, {
        imgName: "landt",
        companyName: "L&T Infotech",
        students: 2,
        package: "4.6lpa"
      }, {
        imgName: "sobha",
        companyName: "Sobha Constructions LLC (Dubai) ",
        students: 6,
        package: "13.53 lpa "
      }, {
        imgName: "inmovidu",
        companyName: "Inmovidu Technologies (INTERN) ",
        students: 3,
        package: "7lpa"
      }
    ]
  },

  // mech
  {
    branch: "B.E - Mechanical Engineering",
    companies: [
      {
        imgName: "zoho",
        companyName: "ZOHO Phase II",
        students: 2,
        package: "7 LPA - 8.4 LPA"
      },
      {
        imgName: "zoho",
        companyName: "ZOHO Phase II(PT)",
        students: 3,
        package: "20,000 PM"
      },
      {
        imgName: "aspire",
        companyName: "Aspire Systems",
        students: 10,
        package: "4.75 LPA"
      },
      {
        imgName: "tricon",
        companyName: "Tricon Infotech",
        students: 1,
        package: "6 LPA"
      }, {
        imgName: "musigma",
        companyName: "Mu Sigma",
        students: 1,
        package: "5 LPA"
      }, {
        imgName: "tcs",
        companyName: "TCS (Ninja)",
        students: 4,
        package: "3.36 LPA"
      }, {
        imgName: "detroit",
        companyName: "Detroit Engineered Products",
        students: 7,
        package: "3-4 LPA"
      }, {
        imgName: "exterro",
        companyName: "Exterro",
        students: 1,
        package: "nan"
      }, {
        imgName: "tafe",
        companyName: "Tafe",
        students: 2,
        package: "6 LPA"
      }, {
        imgName: "cognizant",
        companyName: "Cognizant",
        students: 5,
        package: "4 LPA"
      }, {
        imgName: "1",
        companyName: "Aqua Green",
        students: 2,
        package: "4.5 LPA"
      }, {
        imgName: "landt",
        companyName: "L&T infotech",
        students: 2,
        package: "4-6 LPA"
      }, {
        imgName: "titan",
        companyName: "Titan",
        students: 1,
        package: "5LPA"
      }, {
        imgName: "sobha",
        companyName: "Shoba Constructions",
        students: 1,
        package: "13.5 LPA"
      }
    ],
  },

  // eee

  {
    branch: "B.E - EEE",
    companies: [
      {
        imgName: "zoho",
        companyName: "Zoho Corporation ",
        students: 3,
        package: "1-7LPA,2-5.6LPA"
      },
      {
        imgName: "zoho",
        companyName: "Zoho Corporation (PT)",
        students: 1,
        package: "-"
      },
      {
        imgName: "boschglobal",
        companyName: "BGSW",
        students: 26,
        package: "24-7LPA,2-5LPA"
      },
      {
        imgName: "onebill",
        companyName: "One Bill Software Technologies ",
        students: 1,
        package: "6.5LPA"
      }, {
        imgName: "zoho",
        companyName: "Zoho Phase II",
        students: 3,
        package: "1-7LPA,2-5.6LPA"
      }, {
        imgName: "aspire",
        companyName: "Aspire Systems",
        students: 6,
        package: "4.7LPA"
      }, {
        imgName: "musigma",
        companyName: "Mu Sigma",
        students: 1,
        package: "5 LPA"
      }, {
        imgName: "tcs",
        companyName: "TCS(ninja) ",
        students: 4,
        package: "3.36 LPA"
      }, {
        imgName: "silicon",
        companyName: "Siliconch Systems(Intern)",
        students: 1,
        package: "5 LPA"
      }, {
        imgName: "cognizant",
        companyName: "Cognizant",
        students: 2,
        package: "4 LPA"
      }, {
        imgName: "t",
        companyName: "Aquagreen",
        students: 1,
        package: "4.3 LPA"
      }, {
        imgName: "versadrives",
        companyName: "versa drives",
        students: 1,
        package: "4.5LPA"
      }, {
        imgName: "incture",
        companyName: "Incture",
        students: 1,
        package: "6.25 LPA"
      },
    ],
  },

  //ece

  {
    branch: "B.E - ECE",
    companies: [
      {
        imgName: "mistral",
        companyName: "Mistral solutions ",
        students: 6,
        package: "5LPA"
       },
       {
        imgName: "boschglobal",
        companyName: "BGSW",
        students: 29,
        package: "24- 7 LPA & 5 - 5 LPA"
       },
       {
        imgName: "viasat",
        companyName: "Viasat",
        students: 3,
        package: "14.03 LPA"
       },
       {
        imgName: "astrazeneca",
        companyName: "AstraZeneca",
        students: 2,
        package: "5.75 LPA"
       },
       {
        imgName: "smartiops",
        companyName: "Smart IOPS",
        students: 2,
        package: "4.2 LPA"
       },
       {
        imgName: "zoho",
        companyName: "ZOHO ",
        students: 2,
        package: "1- 8.4 LPA &1- 5.6 LPA"
       },
       {
        imgName: "zoho",
        companyName: "Zoho intern",
        students: 1,
        package: "20000 PM"
       },
       {
        imgName: "ford",
        companyName: "Ford",
        students: 1,
        package: "6LPA"
       },
       {
        imgName: "exterro",
        companyName: "Exterro",
        students: 3,
        package: "3.6 LPA"
       },
       {
        imgName: "silicon",
        companyName: "Siliconch ",
        students: 3,
        package: "5 LPA"
       },
       {
        imgName: "versadrives",
        companyName: "versa drives",
        students: 1,
        package: "4.5LPA"
       },
       {
        imgName: "lti",
        companyName: "LTI",
        students: 1,
        package: "4LPA"
       },
       {
        imgName: "inmovidu",
        companyName: "Inmovidu Technologies (INTERN) ",
        students: 1,
        package: "7LPA"
       },
       {
        imgName: "renaultnissan",
        companyName: "Renault nissan",
        students: 1,
        package: "4.25LPA"
       }
    ],
  },

  // prod
  {
    branch: "B.E - Production Engineering",
    companies: [
      {
        imgName: "zoho",
        companyName: "Zoho Corporation ",
        students: 2,
        package: "5.6 LPA & 7LPA"
       },
       {
        imgName: "onebill",
        companyName: "One Bill Software Technologies ",
        students: 1,
        package: "6.5 LPA"
       },
       {
        imgName: "zoho",
        companyName: "Zoho Corporation (INTERN)",
        students: 2,
        package: "20000 PM"
       },
       {
        imgName: "ganit",
        companyName: "Ganitinc",
        students: 2,
        package: "6 LPA"
       },
       {
        imgName: "musigma",
        companyName: "MuSigma ",
        students: 5,
        package: "5 LPA"
       },
       {
        imgName: "tricon",
        companyName: "Tricon Infotech ",
        students: 1,
        package: "5.5 LPA"
       },
       {
        imgName: "tcs",
        companyName: "TCS",
        students: 10,
        package: "3.36LPA"
       },
       {
        imgName: "exterro",
        companyName: "Exterro ",
        students: 8,
        package: "4.2LPA"
       },
       {
        imgName: "qualitest",
        companyName: "Qualitest ",
        students: 1,
        package: "4LPA"
       },
       {
        imgName: "tafe",
        companyName: "Tafe",
        students: 1,
        package: "6 LPA"
       },
       {
        imgName: "cognizant",
        companyName: "Cognizant (CTS)",
        students: 5,
        package: "4LPA"
       },
       {
        imgName: "lti",
        companyName: "LTI ",
        students: 1,
        package: "4LPA"
       }

    ],
  },

  // eie
  {
    branch: "B.E - EIE",
    companies: [

      {
        imgName: "zoho",
        companyName: "Zoho Corporation I",
        students: 2,
        package: "nan"
       },
       {
        imgName: "mistral",
        companyName: "Mistral solutions ",
        students: 2,
        package: "5lpa"
       },
       {
        imgName: "onebill",
        companyName: "One Bill Software Technologies ",
        students: 2,
        package: "6.5lpa"
       },
       {
        imgName: "bosch",
        companyName: "Robert Bosch ",
        students: 14,
        package: "nan"
       },
       {
        imgName: "aspire",
        companyName: "Aspire systems",
        students: 8,
        package: "4.7lpa"
       },
       {
        imgName: "zoho",
        companyName: "Zoho Corporation II",
        students: 2,
        package: "20000 PM"
       },
       {
        imgName: "tcs",
        companyName: "TCS (NINJA)",
        students: 1,
        package: "3.36lpa"
       },
       {
        imgName: "cognizant",
        companyName: "Cognizant  (CTS)",
        students: 2,
        package: "4lpa"
       }

    ],
  },

  //cse
  {
    branch: "B.E - CSE",
    companies: [
      {
        imgName: "zoho",
        companyName: "Zoho Corporation ",
        students: 1,
        package: "5.6 LPA "
       },
       {
        imgName: "zoho",
        companyName: "Zoho Corporation ",
        students: 1,
        package: "8.4 LPA"
       },
       {
        imgName: "zoho",
        companyName: "Zoho Corporation ",
        students: 1,
        package: "20000 PM"
       },
       {
        imgName: "bosch",
        companyName: "Robert Bosch",
        students: 8,
        package: "7 LPA"
       },
       {
        imgName: "bosch",
        companyName: "Robert Bosch",
        students: 15,
        package: "5 LPA"
       },
       {
        imgName: "viasat",
        companyName: "Viasat",
        students: 1,
        package: "14 LPA"
       },
       {
        imgName: "onebill",
        companyName: "OneBill",
        students: 5,
        package: "6.5 LPA"
       },
       {
        imgName: "multicoreware",
        companyName: "Multicoreware ",
        students: 2,
        package: "7.2LPA"
       },
       {
        imgName: "ibm",
        companyName: "IBM",
        students: 1,
        package: "7.25 LPA"
       },
       {
        imgName: "astrazeneca",
        companyName: "AstraZeneca ",
        students: 6,
        package: "5.75LPA"
       },
       {
        imgName: "foodhub",
        companyName: "FoodHub",
        students: 2,
        package: "7.5LPA"
       },
       {
        imgName: "ganit",
        companyName: "Ganit",
        students: 1,
        package: "6LPA"
       },
       {
        imgName: "aspire",
        companyName: "Aspire Systems ",
        students: 3,
        package: "4.5LPA"
       },
       {
        imgName: "squareshift",
        companyName: "Square shift ",
        students: 1,
        package: "7.5LPA"
       },
       {
        imgName: "exterro",
        companyName: "Exterro",
        students: 1,
        package: "4LPA"
       },
       {
        imgName: "edgeverve",
        companyName: "Edgeverve ",
        students: 1,
        package: "8LPA"
       },
       {
        imgName: "t",
        companyName: "Tekizma",
        students: 1,
        package: "7.5LPA"
       },
       {
        imgName: "qualitest",
        companyName: "Qualitest ",
        students: 1,
        package: "4LPA"
       },
       {
        imgName: "incture",
        companyName: "Incture",
        students: 2,
        package: "6.25 LPA"
       }

    ],
  },

  //it
  {
    branch: "B.Tech - IT",
    companies: [
      {
        imgName: "zoho",
        companyName: "Zoho Corporation",
        students: 2,
        package: "8.4 LPA"
       },
       {
        imgName: "zoho",
        companyName: "Zoho Corporation",
        students: 6,
        package: "7 LPA"
       },
       {
        imgName: "zoho",
        companyName: "Zoho Corporation",
        students: 2,
        package: "5.6 LPA"
       },
       {
        imgName: "zoho",
        companyName: "Zoho Corporation",
        students: 3,
        package: "Intern"
       },
       {
        imgName: "bosch",
        companyName: "Robert Bosch",
        students: 5,
        package: "7 LPA"
       },
       {
        imgName: "bosch",
        companyName: "Robert Bosch",
        students: 13,
        package: "5 LPA"
       },
       {
        imgName: "viasat",
        companyName: "Viasat",
        students: 2,
        package: "14.03 LPA"
       },
       {
        imgName: "onebill",
        companyName: "OneBill",
        students: 7,
        package: "6.5 LPA"
       },
       {
        imgName: "astrazeneca",
        companyName: "AstraZeneca",
        students: 3,
        package: "5.75 LPA"
       },
       {
        imgName: "t",
        companyName: "Bounteous (Lister Technologies)",
        students: 1,
        package: "10 LPA"
       },
       {
        imgName: "tricon",
        companyName: "Tricon InfoTech",
        students: 2,
        package: "5.5 LPA"
       },
       {
        imgName: "aspire",
        companyName: "Aspire Systems",
        students: 1,
        package: "4.75 LPA"
       },
       {
        imgName: "squareshift",
        companyName: "Square Shift",
        students: 1,
        package: "7.5 LPA (Intern)"
       },
       {
        imgName: "caratlane",
        companyName: "CaratLane",
        students: 2,
        package: "7 LPA"
       },
       {
        imgName: "musigma",
        companyName: "MuSigma",
        students: 1,
        package: "5 LPA"
       },
       {
        imgName: "ford",
        companyName: "Ford",
        students: 2,
        package: "6 LPA"
       },
       {
        imgName: "exterro",
        companyName: "Exterro",
        students: 4,
        package: "6 LPA"
       },
       {
        imgName: "edgeverve",
        companyName: "Edgeverve",
        students: 2,
        package: "nan"
       },
       {
        imgName: "t",
        companyName: "Tekizma",
        students: 1,
        package: "nan"
       }
    ],
  },

  //ibt
  {
    branch: "B.Tech - IBT",
    companies: [
      {
        imgName: "t",
        companyName: "Zifo",
        students: 4,
        package: "4.76 LPA"
       },
       {
        imgName: "musigma",
        companyName: "MuSigma",
        students: 4,
        package: "5 LPA"
       },
       {
        imgName: "zoho",
        companyName: "Zoho (Intern)",
        students: 1,
        package: "20000 PM"
       },
       {
        imgName: "tcs",
        companyName: "TCS NINJA",
        students: 11,
        package: "3.36 LPA"
       },
       {
        imgName: "qualitest",
        companyName: "Qualitest ",
        students: 5,
        package: "4 LPA"
       },
       {
        imgName: "cognizant",
        companyName: "Cognizant ",
        students: 11,
        package: "4 LPA"
       },
       {
        imgName: "lti",
        companyName: "LTI",
        students: 2,
        package: "4 LPA"
       },
       {
        imgName: "inmovidu",
        companyName: "Inmovidu Technologies",
        students: 7,
        package: "7 LPA"
       }
    ],
  },


]

