import { Container } from '@mui/material'
import React from 'react'
import { alumniDatas } from '../page-datas/alumni'
import alumniImages from '../images/alumniimg/1.jpg'
function alumni() {
  return (
    <Container>
        <div className='my-5 p-5'>
            <div className="w-full ">
                <p className='uppercase text-2xl font-bold text-center'>Notable Alumni</p>
                <p className='text-sm mt-2'>In the past 75 years, the college has produced many stalwarts whose contribution at national and
    international level has been significant. The achievements of the illustrious Alumni are a testament to the
    quality of the institution and is amongst the best in the country. Here are the few past students who gets
    featured in this otherwise exhaustive list.</p>
            </div>
            <div className="w-full mt-3">
                {alumniDatas.map(alumniCate=>{
                    return(
                        <div className="w-full flex flex-wrap mt-3 flex-col md:flex-row">
                            <div className='w-full md:w-1/3 flex justify-center items-center p-3 mt-2'>
                                <p className='text-3xl text-gray-500 font-bold text-center'>{alumniCate.category}</p>
                            </div>
                            {alumniCate.people.map(people=>{
                                return(
                                    <div className='w-full md:w-1/3 p-3'>
                                        <div className='flex align-center p-3 bg-gray-200 rounded-3xl mt-2 justify-center'>
                                        <div className='w-full md:w-1/3 rounded'>
                                            <img src={require("../images/alumniimg/"+people.imgName).default.src} alt={people.Name} className='w-full rounded-2xl h-[100px] w-[100px]'/>
                                        </div>
                                        <div className='flex flex-col flex-wrap w-2/3 px-2'>
                                            <p className='text-md font-bold text-left mt-2'>{people.Name}</p>
                                            <p className='text-sm text-gray-700 text-left mt-2'>{people.position}</p>
                                            <p className='text-sm text-gray-700 text-left mt-2'>{people.company}</p>
                                        </div>
                                        
                                    </div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    </Container>
  )
}

export default alumni
