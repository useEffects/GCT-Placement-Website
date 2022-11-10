import company2 from '../images/Companylogo/2.png'
import company3 from '../images/Companylogo/3.png'
import company4 from '../images/Companylogo/4.png'
// import Fordimg from "../images/logos/FordLogo.png"
// import Aspireimg from "../images/logos/AspireLogo.png"
export default function Carousel3 () {
    const datas = [
        {
            imgSrc: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80',
            name: "Mr. Joel Samuel Raj A",
            dept: "B Tech Information Technology",
            batch: "2020 - 2024",
            cImgSrc: company2.src,
        },
        {
            imgSrc: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
            name: "Mr. Rangaraj",
            dept:  "B Tech Production",
            batch: "2020 - 2024",
            cImgSrc: company3.src,
        },
        {
            imgSrc: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
            name: "Ramesh",
            dept: "B Tech Electronics",
            batch: "2020 - 2024",
            cImgSrc: company4.src,
        },
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












