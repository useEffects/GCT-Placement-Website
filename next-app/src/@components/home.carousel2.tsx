import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {recruitersDatas} from "../page-datas/recruiters"
import Seemore from "./seemore"

export default function Carousel2 () {
    
    const keyWords = Array.from(["yahoo", "microsoft", "tcs", "cisco"]).map(data => data.toLowerCase())
    const datas = recruitersDatas.filter(data => keyWords.indexOf(data.imgName.toLowerCase()) > -1)

    return (<div className="h-[150px] my-4 w-full overflow-scroll lg:overflow-hidden">
        <div className={`w-[1000px] h-full py-4 flex justify-evenly lg:w-[1154px] w-full`}>
            {datas.map((data, i) => <div className={`w-1/${datas.length} h-full bg-white shadow-md rounded-3xl mx-2 flex justify-center items-center`} key={i}>
            <img className="bg-grey-600 object-contain h-full w-full" src={require(`../images/recruiters/${data.name}`).default.src} />
            </div>)}
            <Seemore link={"recruiters"} />
        </div> 
    </div>)
}
