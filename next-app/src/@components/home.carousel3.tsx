import ExcMark from "../images/Group105.png"
import Joel from "../images/JoelSam.png"
import Zohoimg from "../images/logos/ZohoLogo.png"
import TCSimg from "../images/logos/TCSLogo.png"
import LTIimg from "../images/logos/LTLogo.png"
// import Fordimg from "../images/logos/FordLogo.png"
// import Aspireimg from "../images/logos/AspireLogo.png"
export default function Carousel3 () {
    const datas = [
        {
            imgSrc: Joel.src,
            name: "Mr. Joel Samuel Raj A",
            dept: "B Tech Information Technology",
            batch: "2020 - 2024",
            cImgSrc: Zohoimg.src,
        },
        {
            imgSrc: Joel.src,
            name: "Mr. Rangaraj",
            dept:  "B Tech Production",
            batch: "2020 - 2024",
            cImgSrc: TCSimg.src,
        },
        {
            imgSrc: Joel.src,
            name: "Ramesh",
            dept: "B Tech Electronics",
            batch: "2020 - 2024",
            cImgSrc: LTIimg.src,
        },
    ]
   return (<div className="w-full h-[700px] my-4 overflow-auto lg:overflow-hidden">
    <div className={`w-[1000px]  h-full flex justify-evenly items-center py-4 lg:w-[1121px]`}>
        {datas.map((data, i) => <div key={i} className={`w-full h-full shadow-lg bg-white rounded-3xl mx-4 p-4 flex justify-between items-center flex-col`}>
            <img src={ExcMark.src} className="ml-4 mr-auto"/>
            <img src={data.imgSrc} className="w-[200px] h-[200px] rounded-full bg-gray-200"/>
            <p className="text-lg font-bold"> {data.name} </p>
            <p className=""> {data.dept} </p>
            <p> {data.batch} </p>
            <img src={data.cImgSrc} className="object-contain h-[100px] my-12"/>
        </div>)}
    </div>
   </div>) 
}











