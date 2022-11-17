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
        },
        {
            header: "Social Media",
            buttons: [
                {
                    label: "Instagram",
                    link: "https://www.instagram.com/gct_coimbatore/#"
                }, {
                    label: "LinkedIn",
                    link: "https://www.linkedin.com/school/gctcoimbatore/"
                }, {
                    label: "Youtube",
                    link: "https://youtube.com/c/GCTAlumni"
                }
            ]
        }
    ]
    return <div className="px-12 bg-gray-100 h-auto pt-12">
    <div className="w-full flex flex-col-reverse md:flex-row-reverse justify-around h-50">
        <div className="flex flex-col sm:flex-row items-center justify-center w-full pb-12 col-2 col-span-2 md:w-2/3 p-4">
            {datas.map((data, i) => <div key={i} className="flex flex-col justify-start items-center w-1/3 mt-4 h-full  ">
                <p className="text-md md:text-md font-bold text-center text-black-700 uppercase"> {data.header} </p>
                <div className="flex flex-col items-start justify-start text-center mt-3 ">
                    {data.buttons.map((button, j) => <div key={j} className="w-full my-2 p-2 hover:bg-gray-200">
                        <Link className="text-black-500  my-2 hover:underline  p-2 w-100 " href={button.link}>
                            {button.label}
                        </Link>
                    </div>
                    )}
                </div>
            </div>)}
        </div>
        <div className="md:block border-t-2 flex md:border-t-0 border-gray-400 w-full md:w-1/3 p-4 justify-evenly align-center flex-col">
            <img src={Gctlogo.src} className="w-12 md:20 h:24 object-contain"/>
            <div className="mt-2 m-auto">
                <p className="my-4 md:text-lg text-left font-bold uppercase"> Training & Placement Cell </p>
                <p className="my-4 text-gray-600">A place to hone all the necessary skills needed to get placed.</p>
                <p className="my-4 text-gray-600 text-left font-bold uppercase"> 2022 GCT.<br></br>  All rights <br className="md:hidden"/> reserved. </p>
            </div>
        </div>
    </div>
        <div className="w-full my-4 flex items-center p-4 border-t-2 border-gray-400">
            <p className="text-gray-600"> @ GCT - 2022 </p>
        </div>
    </div> 
}














