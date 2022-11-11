import { Button } from "@mui/material"
import Civil from "../images/CivilHat.png"
import Elec from "../images/Electronics.png"
import Rect from "../images/Rectangle.png"
export default function Carousel4 () {
    const datas = [
        {
            header: "Information Technology",
            imgSrc: Civil.src
        },
        {
            header: "Mechanincal Engineering",
            imgSrc: Elec.src
        },
        {
            header: "Computer Science and Engineering",
            imgSrc: Rect.src
        }
    ]
     return (<div className="my-12 pb-12 w-full overflow-scroll lg:overflow-hidden">
        <div className="w-[1000px] h-full flex px-4 lg:w-[1154px] items-center"> 
            {datas.map((data, i) => <div key={i} className="flex flex-col justify-evenly items-center h-full w-full mx-4 shadow-lg py-12">
                <img src={data.imgSrc} className="object-contain rw-2 mx-4 h-[300px] bg-gray-300"/>
                <p className="text-center text-lg mx-4 my-12 uppercase font-bold"> {data.header} </p>
                <Button variant="contained" className="bg-primary-main w-[150px]"> read more </Button>
            </div>)}
        </div>
    </div>)
}
