import { Container } from '@mui/material'
import React from 'react'
import { teamDatas } from '../page-datas/placement-team' 
function contact() {
    console.log(teamDatas)
    return (
    <Container className="flex flex-col justify-center align-center my-12">
        <p className='text-3xl text-black-700 text-center mt-8'>Placement Team</p>
        <div className="flex mt-4 w-full p-4">
            <div className='w-1/4 p-3'>
                <p className='text-2xl text-black-700 text-left mt-2'>Training and Placement Cell</p>
                <p className="text-lg text-black-500 text-left mt-2">{teamDatas.staffName}</p>
                <p className="text-md text-gray-500 text-left mt-1">Placement and Training Officer </p>
                <p className="text-md text-gray-500 text-left mt-1">{teamDatas.staffEmail}</p>
                <p className="text-md font-bold text-black-500 text-left mt-1">{teamDatas.staffPhone}</p>
            </div>
            <div className='bg-gray-500 h-100 w-[1px]'>

            </div>
            <div className='w-3/4 p-3 '>
                <div className="w-full">
                    <p className='text-2xl text-black-700 text-left mt-2 font-bold'>Student Team</p>
                    {teamDatas.studentsTeams.map(category=>{
                       return(
                        <div className='p-3 mt-3 w-full'>
                            <p className='text-lg uppercase font-bold text-black-200'>{category.category}</p>
                            <div className='flex flex-wrap w-full'>
                            {
                                category.branches.map(branch=>{
                                    return(
                                        <div className="w-5/12 p-2 rounded bg-gray-200 m-4 p-4">
                                            <p className='text-md text-bold font-bold uppercase'>{branch.branchName} Representatives</p>
                                            <div className={branch.students.length>1?'flex text-xs my-2':'flex text-sm my-2'}>
                                                {branch.students.map(student=>{
                                                    return(
                                                    <div className='w-1/2'>
                                                            <p>{student.studentName}</p>
                                                            <p>{student.studentEmail}</p>
                                                            <p>{student.studentPhone}</p>
                                                    </div> 
                                                    )
                                                })}
                                            </div>
                                        </div>

                                    )
                                })
                            }
                            </div>
                        <div className='h-[1px] bg-gray-500 m-auto my-4'>
                        </div>
                    </div>
                       )
                    })}
                </div>
            </div>
        </div>

    </Container>
  )
}

export default contact
