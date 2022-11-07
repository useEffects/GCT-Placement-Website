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
    return <div className="w-full h-[200px]">
        <div className="flex items-center w-full h-full">
            {datas.map((data, i) => <div key={i} className="flex flex-col justify-between items-start w-1/3 mx-4 h-full">
                <p className="text-lg font-bold text-center my-4"> {data.header} </p>
                <div className="flex flex-col items-start justify-start h-[100px]">
                    {data.buttons.map((button, j) => <Link className="text-blue-500 underline" key={j} href={button.link}>
                        {button.label}
                    </Link>)}
                </div>
            </div>)}
        </div>
        <div className="border-t-2 border-gray-400 w-full mt-12 p-4 flex justify-evenly items-center">
            <img src={Gctlogo.src} className="w-12 h-14 bg-gray-300"/>
            <p> 2022 GCT. All rights reserved. </p>
        </div>
    </div>
}














