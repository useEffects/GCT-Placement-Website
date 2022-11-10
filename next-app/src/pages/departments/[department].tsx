import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import {placementDatas} from "../../page-datas/placements"
import {Container} from "@mui/material"
import Sidebar from "../../@components/departments.sidebar";
import flyImg from "../../images/Happy student-pana.svg"

const Legend = ({color, text}: {color: string, text: string}) => {
  return <div className="flex w-full h-[3rem]">
    <div className={`bg-[${color}] mr-4 w-8 h-8 rounded`}></div>
    <p className="uppercase"> {text} </p>
  </div>
}

export default function department () {
  const router = useRouter()
  let {department} = router.query
  department = String(department).replace(/-/g, " ") 
  const data = placementDatas.find((p) => p.category.toLowerCase() == department)
  console.log(data)
  return <>
    <Container className="my-12 bg-gray-100 rounded-lg p-4">
      <Sidebar />    
      <div className="w-full my-12 py-4 flex">
        <div className="w-[33%] px-4 flex flex-col">
          <div className="m-4 mt-0 bg-gray-200 rounded-lg p-4 w-[calc(100%-2rem)] mb-12">
            <div className="flex items-center w-full h-[3rem]">
              <p className="text-lg mr-4"> Students ready to fly </p>
              <p className="text-5xl font-extrabold"> {data?.strength} </p>
            </div>
            <img src={flyImg.src} className="w-full object-contain"/>
          </div>
          <div className="grid grid-rows-2 grid-cols-2 gap-4 px-8 my-12">
            {data?.percents.map((percent, k) => <div key={k}>
                <div className="w-full h-[3rem] flex items-end">
                  <p className="text-6xl">{percent.header.substring(0, 2)}</p>
                  <p className="text-lg"> {percent.header.substring(2)} </p>
                </div>
                <p> {percent.content} </p>
              </div>)}
          </div>
        </div>
        <div className="w-[66%] p-4 h-[800px] bg-blue-200 flex flex-col flex-wrap pt-20 px-12">
          {data?.bullets.map((bullet, i) => <div className={`w-1/2 min-h-[50%] flex ${i == 2 ? "h-full" : ""}`} key={i}>
            <div className="flex flex-col">
              <p className="text-xl font-extrabold my-4"> {bullet.header} </p>
              <div>
                {bullet.contents.map((content, j) => <p className="my-2" key={j}>
                  <FontAwesomeIcon icon={faChevronRight}/> {content}
                </p>)}
              </div>
            </div>
          </div>)}
        </div>
      </div>
      <div className="w-full flex">
        <div className="rw-1 mx-4 bg-blue-200 px-8 py-12">
          <p className="text-xl font-extrabold my-4"> Achievements </p>
          { data?.achievements.map((ach, l) => <div className="" key={l}>
            <p className="text-lg my-2"> <FontAwesomeIcon icon={faChevronRight}/> {ach.header} </p>
            {ach.contents.length > 0 && ach.contents.map((content, m) => <div className="ml-4" key={m}>
              <p> {content} </p>
            </div>)}
          </div>) } 
        </div>
        <div className="rw-1 mx-4 grid grid-rows-2 grid-cols-2 gap-4">
          {data?.statistics.map((stat, n) => <div className="flex shadow-sm shadow-gray-300 p-4 rounded flex-col h-[450px] justify-around items-center w-full" key={n}>
            <div className="relative w-full h-[200px]">
             {stat.meta.length > 0 && stat.meta.map((met, o) => <div className={`w-[100px] absolute text-white ${o === 0 ? "bg-[#eb6440] z-[3]" : o == 1 ? "bg-[#d6e4e5] z-[2] text-black" : "bg-[#497174] z-[1]"} h-[100px] rounded-full origin-bottom left-1/2 bottom-0 ${o == 0 ? "circle1" : o == 1 ? "circle2" : "circle3"}`} key={o}>
              <p className="text-center mt-1"> {met} </p> 
             </div>)} 
            </div>
              <div className="w-full h-[200px] mx-4 bg-gray-200 p-4 rounded">
                <div className="flex h-[100px] w-full justify-between items-center">
                  <div className="h-full rw-1">
                    <p className="text-lg font-extrabold mb-4"> Batch </p>
                    <div className="h-[3rem] flex items-end">
                      <p className="text-4xl font-extrabold"> {stat.year} </p>
                    </div>
                  </div>
                  <div className="w-1 h-full bg-black"></div>
                  <div className="h-full rw-1 flex flex-col items-end">
                    <p className="text-lg font-extrabold mb-4"> Placed </p>
                    <div className="flex items-end h-[3rem]">
                       <p className="text-4xl font-bold"> {stat.placed} </p> 
                       <p className="text-lg font-extrabold"> % </p>
                    </div>
                  </div>
                </div>
                    <p className="text-center m-4 text-xl"> {stat.range[0] } LPA - {stat.range[1]} LPA </p>
                </div>
          </div>)}  
                <div className="w-full h-full flex justify-center items-center">
                    <div className="w-1/2 h-[200px]">
                      <Legend color={"#eb6440"} text={"intake"} />
                      <Legend color={"#d6e4e5"} text={"eligible"} />
                      <Legend color={"#497174"} text={"placed"} />
                    </div>
                </div>  
        </div>
      </div>
    </Container>
  </>
}
