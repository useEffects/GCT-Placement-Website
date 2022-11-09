type studentType = {

    category: string,

    branches: {
        branchName: string,
        students:
        {
            studentName: string,
            studentEmail: string,
            studentPhone: string
        }[]
       
    }[]
}[]

type teamType = {
    staffName: string,
    staffEmail: string,
    staffPhone: string,
    studentsTeams: studentType[]
}

// PLEASE CHANGE IT TO CONST AFTER POPULATING
export let teamDatas: teamType =
    {
        staffName:"Dr.K.Ranjith Kumar",
        staffEmail:"gctplacements@gct.ac.in",
        staffPhone:"+91 94430 15058",
        studentsTeams:
        [
            {
            category:"Circuit Branches COHORT",
            branches:[
                {
                    branchName:"EEE",
                    students:[
                        {
                            studentName:"Kishore Taju K",
                            studentEmail:"kish,1813125@gct.ac.in",
                            studentPhone:"+91 85249 49891"
                        }
                    ]
                },
                {
                    branchName:"EEE",
                    students:[
                        {
                            studentName:"Kishore Taju K",
                            studentEmail:"kish,1813125@gct.ac.in",
                            studentPhone:"+91 85249 49891"
                        }
                    ]
                },
                {
                    branchName:"EEE",
                    students:[
                        {
                            studentName:"Kishore Taju K",
                            studentEmail:"kish,1813125@gct.ac.in",
                            studentPhone:"+91 85249 49891"
                        }
                    ]
                }
            ]
                
            }
        ]
    }

