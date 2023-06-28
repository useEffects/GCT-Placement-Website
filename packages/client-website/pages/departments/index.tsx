import { Container } from "@mui/material"
import Sidebar from "../../@components/departments.sidebar"
import {placementDatas} from "../../page-datas/placements"
import {statisticsDatas} from "../../page-datas/statistics"

export default function department() {
  const { intake, eligible, placed } = placementDatas.reduce((obj, {statistics}) => {
    return  {
      intake: obj.intake += statistics[0].meta[2],
      eligible: obj.eligible += statistics[0].meta[1],
      placed: obj.placed += statistics[0].meta[0]
    }
  }, {
    intake: 0,
    eligible: 0,
    placed: 0
  })
  console.log(intake, eligible, placed)
  return <Container className="my-12 p-4">
    <Sidebar />
    <div className="[&>*]:p-4 [&>*]:flex [&>*]:flex-col [&>*]:justify-between [&>*]:w-1/4 [&>*]:items-center [&>*]:rounded-3xl w-full flex justify-evenly items-center [&>*]:bg-gray-200 my-12 [&>*]:shadow-lg">
      <div> 
        <div>
          <p className="text-black text-xl font-bold my-8 text-center"> Total intake </p>
          <p className="text-black font-extrabold text-5xl text-center"> {intake} </p>
        </div>
      </div>
      <div> 
        <div>
          <p className="text-black text-xl font-bold my-8 text-center"> Total students eligible</p>
          <p className="text-black font-extrabold text-5xl text-center"> {eligible} </p>
        </div>
      </div>
      <div> 
        <div>
          <p className="text-black text-xl font-bold my-8 text-center"> Total students placed </p>
          <p className="text-black font-extrabold text-5xl text-center"> {placed} </p>
        </div>
      </div>
    </div>
    <div>
      {statisticsDatas.map((stat, i) => <div className="" key={i}>
          <p className="text-xl font-bold my-12"> {stat.branch} </p>
          <div className="grid grid-cols-3 gap-12 w-full">
          {stat.companies.map((company, j) => <div className="w-full bg-gray-100 p-4 rounded-3xl shadow-lg" key={j}>
            <p className="font-extrabold text-md my-4"> {company.companyName} </p>
            <div className="flex items-center my-4">
              <p> No of students placed </p>
              <p className="text-5xl ml-4"> {company.students} </p>
            </div>
            <p className="text-3xl my-4"> {company.package} </p>
            <img src={require(`../../images/companylogos/${company.imgName}`).default.src} className="w-1/2 h-[100px] object-contain my-4"/>
          </div>)}
          </div>
      </div>)}
    </div>
  </Container>
}
