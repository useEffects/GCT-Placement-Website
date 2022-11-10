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
}

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
                    branchName:"ECE",
                    students:[
                        {
                            studentName:"NIVAS M.",
                            studentEmail:"niva.1814135@gct.ac.in",
                            studentPhone:"+91 63827 64354"
                        }
                    ]
                },
                {
                    branchName:"EIE",
                    students:[
                        {
                            studentName:"ABIRAMI G",
                            studentEmail:"abir.1816102@gct.ac.in",
                            studentPhone:"+91 73395 56227"
                        },
                        {
                            studentName:"GOKUL P.",
                            studentEmail:"goku.1816117@gct.ac.in",
                            studentPhone:"+91 94429 67761"
                        }
                    ]
                }
            ]
                
            },
            {
                category:"PROGRAMMING BRANCHES COHORT",
                branches:[
                    {
                        branchName:"IT",
                        students:[
                            {
                                studentName:"ABIRAMI R.",
                                studentEmail:"abir.1818101@gct.ac.in",
                                studentPhone:"+91 95669 30553"
                            } ,
                            {
                                studentName:"HARISH V",
                                studentEmail:"hari.1818126@gct.ac.in",
                                studentPhone:"+91 63830 70399"
                            } 

                        ]
                    },
                    {
                        branchName:"CSE",
                        students:[
                            {
                                studentName:"SIVARAMAKRISHNAN K",
                                studentEmail:"siva.1817147@gct.ac.in",
                                studentPhone:"+91 97888 30829"
                            },
                            {
                                studentName:"SWATHI S.",
                                studentEmail:"swat.1817150@gct.ac.in",
                                studentPhone:"+91 95666 41296"
                            }
                        ]
                    }
                ]
                    
                },
                {
                    category:"MECHANICAL AND PRODUCTION ENGINEERING COHORT",
                    branches:[
                        {
                            branchName:"Mechanical",
                            students:[
                                {
                                    studentName:"MATHEW ROJAR A.",
                                    studentEmail:"math.1812156@gct.ac.in",
                                    studentPhone:"+91 73976 35977"
                                } ,
                                {
                                    studentName:"SUDHARSHANA NARAYANI",
                                    studentEmail:"sudh.1812197@gct.ac.in",
                                    studentPhone:"+91 70923 55835"
                                } 
    
                            ]
                        },
                        {
                            branchName:"Production",
                            students:[
                                {
                                    studentName:"VISHNU T.",
                                    studentEmail:"vish.1815153@gct.ac.in",
                                    studentPhone:"91 80860 42466"
                                },
                                {
                                    studentName:"AHMED S.",
                                    studentEmail:"ahme.1815102@gct.ac.in",
                                    studentPhone:"+91 95666 19849"
                                }
                            ]
                        }
                    ]
                        
                    },
                    {
                        category:"CIVIL ENGINEERING COHORT",
                        branches:[
                            {
                                branchName:"Civil",
                                students:[
                                    {
                                        studentName:"JEEVITHA R.",
                                        studentEmail:"jeev.1811134@gct.ac.in",
                                        studentPhone:"91 94423 80798"
                                    } ,
                                    {
                                        studentName:"SRI VIGNESH",
                                        studentEmail:"sriv.1811l21@gct.ac.in",
                                        studentPhone:"+91 73583 16352"
                                    } 
        
                                ]
                            }
                        ]
                            
                        },
                        {
                            category:"INDUSTRIAL BIOTECHNOLOGY COHORT",
                            branches:[
                                {
                                    branchName:"IBT",
                                    students:[
                                        {
                                            studentName:"GOWTHAMRAJ R.",
                                            studentEmail:"gowt.1819127@gct.ac.in",
                                            studentPhone:"+91 88831 18714"
                                        } ,
                                        {
                                            studentName:"PREETHI S. H.",
                                            studentEmail:"pree.1819174@gct.ac.in",
                                            studentPhone:"+91 77080 27826"
                                        } 
            
                                    ]
                                }
                            ]
                                
                            }
        ]
    }

