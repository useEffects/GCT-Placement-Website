type studentType = {
    category: string,
    branches: {
        branchName: string,
        studentName: string,
        studentEmail: string,
        studentPhone: string
    }[]
}[]

type teamType = {
    staffName: string,
    staffEmail: string,
    staffPhone: string,
    studentsTeams: studentType[]
}

// PLEASE CHANGE IT TO CONST AFTER POPULATING
export let teamDatas: teamType
