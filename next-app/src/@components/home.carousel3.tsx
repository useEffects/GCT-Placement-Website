export default function Carousel3 () {
    const datas = [
        {
            imgSrc: "",
            name: "Mr. Joel Samuel Raj A",
            dept: "B Tech Information Technology",
            batch: "2020 - 2024",
            cImgSrc: "",
        },
        {
            imgSrc: "",
            name: "",
            dept: "",
            batch: "",
            cImgSrc: "",
        },
        {
            imgSrc: "",
            name: "",
            dept: "",
            batch: "",
            cImgSrc: "",
        },
    ]
   return (<div className="w-full h-[700px] my-4 overflow-auto">
    <div className={`w-[1000px] h-full flex justify-between items-center py-4`}>
        {datas.map((data, i) => <div key={i} className={`w-full h-full shadow-lg bg-white rounded-3xl mx-4 p-4 flex justify-between items-center flex-col`}>
            <img className="ml-4 mb-24 mr-auto h-[100px] w-[100px] object-contain bg-gray-200"/>
            <img className="w-[200px] h-[200px] rounded-full bg-gray-200"/>
            <p className="text-lg font-bold"> {data.name} </p>
            <p className=""> {data.dept} </p>
            <p> {data.batch} </p>
            <img className="object-contain w-full h-[100px] bg-gray-200"/>
        </div>)}
    </div>
   </div>) 
}












