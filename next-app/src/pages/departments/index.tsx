import { Container } from "@mui/material"
import Sidebar from "../../@components/departments.sidebar"
import {placementDatas} from "../../page-datas/placements"

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
    <div className="[&>*]:p-4 [&>*]:flex [&>*]:flex-col [&>*]:justify-between [&>*]:w-1/4 [&>*]:items-center [&>*]:rounded w-full flex justify-evenly items-center [&>*]:bg-gray-200 my-12">
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
  </Container>
}
