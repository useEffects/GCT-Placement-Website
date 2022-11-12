import company2 from '../images/Companylogo/45.png'
import company3 from '../images/Companylogo/17.png'
import company4 from '../images/Companylogo/52.png'
import i1 from '../images/Nithish.jpeg'
import i2 from '../images/Rathina.jpeg'
import i3 from '../images/Vishal.jpeg'
// import Fordimg from "../images/logos/FordLogo.png"
// import Aspireimg from "../images/logos/AspireLogo.png"
export default function Carousel3 () {
    const datas = [
        {
            imgSrc: i3.src,
            name: "Vishal Pranav R B",
            dept: "B Tech IT",
            batch: "2019 - 2023",
            cImgSrc: company4.src,
        },
        {
            imgSrc:i1.src ,
            name: "Nithish Kumar R",
            dept: "Electronics and Instrumentation Engineering",
            batch: "2019-2023",
            cImgSrc: company2.src,//aspire
        },
        {
            imgSrc: i2.src,
            name: "Rathina Boopathi S",
            dept:  "Civil Engineering",
            batch: "2019 - 2023",
            cImgSrc: company3.src,//cts
        }
        
    ]
   return (<div className="w-full my-4 overflow-auto lg:overflow-hidden py-12">
    <div className={`w-[1000px] flex justify-center items-center lg:w-[1121px]`}>
        {datas.map((data, i) => <div key={i} className={`w-full shadow-lg bg-white rounded-3xl mx-4 p-4 flex justify-between items-center flex-col`}>
            <img src={data.imgSrc} className="w-[200px] h-[200px] rounded-full bg-gray-200"/>
            <p className="text-lg font-bold mt-1"> {data.name} </p>
            <p className="mt-1"> {data.dept} </p>
            <p> {data.batch} </p>
            <img src={data.cImgSrc} className="object-contain h-[100px] my-2"/>
        </div>)}
    </div>
   </div>) 
}












