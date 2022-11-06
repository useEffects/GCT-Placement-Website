import { Button } from "@mui/material"

export default function Carousel4 () {
    const datas = [
        {
            header: "Information Technology",
            imgSrc: ""
        },
        {
            header: "Mechanincal Engineering",
            imgSrc: ""
        },
        {
            header: "Computer Science and Engineering",
            imgSrc: ""
        }
    ]
     return (<div className="my-12 pb-12 w-full overflow-scroll">
        <div className="w-[1000px] h-full flex px-4"> 
            {datas.map((data, i) => <div key={i} className="flex flex-col justify-evenly items-center h-full w-full mx-4 shadow-lg py-12">
                <img className="object-contain rw-2 mx-4 h-[300px] bg-gray-300"/>
                <p className="text-center text-lg mx-4 my-12 uppercase font-bold"> {data.header} </p>
                <Button variant="contained" className="bg-primary-main w-[150px]"> read more </Button>
            </div>)}
        </div>
    </div>)
}
