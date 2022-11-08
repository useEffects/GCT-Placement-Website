import Link from "next/link"
import Gctlogo from "../images/logos/GCTlogo.png"

export default function Footer () {
    const datas = [
        {
            header: "Menu",
            buttons: [
                {
                    label: "About",
                    link: ""
                }, {
                    label: "Departments",
                    link: ""
                }, {
                    label: "Snapshots",
                    link: ""
                }
            ]
        }, {
            header: "Contact",
            buttons: [
                {
                    label: "College",
                    link: ""
                }, {
                    label: "Fax",
                    link: ""
                }, {
                    label: "Principal",
                    link: ""
                }, {
                    label: "Email",
                    link: ""
                }
            ] 
        }, {
            header: "Placement Officer",
            buttons: [
                {
                    label: "Mobile",
                    link: ""
                }, {
                    label: "Fax",
                    link: ""
                }, {
                    label: "Email",
                    link: ""
                }
            ]
        }
    ]
    return <div className="px-12">
    <div className="w-full flex flex-col md:flex-row-reverse justify-around">
        <div className="flex items-center justify-center w-full pb-12 col-2 col-span-2 md:w-1/3">
            {datas.map((data, i) => <div key={i} className="flex flex-col justify-start items-center w-1/3 mx-4 h-full">
                <p className="text-lg md:text-xl font-bold text-center my-4"> {data.header} </p>
                <div className="flex flex-col items-start justify-start">
                    {data.buttons.map((button, j) => <Link className="text-blue-500 underline md:text-lg my-1 md:my-2" key={j} href={button.link}>
                        {button.label}
                    </Link>)}
                </div>
            </div>)}
        </div>
        <div className="hidden md:block border-t-2 flex justify-between items-center md:border-t-0 border-gray-400 w-full md:w-1/3 mt-12 p-4 flex justify-evenly items-center">
            <img src={Gctlogo.src} className="w-14 md:20 h:24 object-contain"/>
            <div className="">
                <p className="md:text-lg text-right font-bold uppercase"> 2022 GCT.<br></br>  All rights <br className="md:hidden"/> reserved. </p>
                <p className="my-4 text-gray-600 hidden md:inline"> Training & Placement Cell </p>
            </div>
        </div>
    </div>
        <div className="w-full my-4 flex items-center p-4 border-t-2 border-gray-400">
            <p className="text-gray-600"> @ GCT - 2022 </p>
        </div>
    </div> 
}














