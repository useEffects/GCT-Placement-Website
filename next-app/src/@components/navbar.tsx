import { AppBar, Button, Menu, MenuItem, Toolbar } from "@mui/material";
import gctLogo from "../images/logos/GCTlogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from "react";
import {placementDatas} from "../page-datas/placements"
import Link from "next/link";

export default function Navbar () {

    const datas = [
        {
            label: "about",
            link: "/about"
        }, {
            label: "contact",
            link: "contact"
        }, {
            label: "recruiters",
            link: "recruiters"
        }, {
            label: "news",
            link: "news"
        }, {
            label: "alumni",
            link: "alumni"
        }
    ]

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const lists = placementDatas.map((p) => p.category)
    return (
    <div className="h-20">
        <AppBar elevation={0} className="fixed h-20">
            <Toolbar className="bg-white px-8 md:px-12 h-full flex justify-between items-center">
                <div className="h-full">
                    <Link className="cursor-pointer w-full h-full flex items-center" href="/">
                  <img src={gctLogo.src} />  
                  <p className="md:text-lg ml-4 uppercase text-slate-900 font-bold"> government college of technology </p>
                    </Link>
                </div>
                <div className="hidden md:flex [&>*]:mx-2 [&>*]:font-bold">
                    { datas.map((data, i) => <Button className="text-black mx-2" key={i}> <Link href={data.link}> {data.label} </Link> </Button>) }
                    <div>
                    <Button className="text-black font-bold" onClick={handleClick}> 
                        department 
                        <FontAwesomeIcon className="text-inherit ml-2" icon={faChevronDown}/>
                    </Button>
                    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                        <MenuItem className="my-4">
                            <Link className="w-full h-full" href={"/departments"} onClick={() => setAnchorEl(null)}> Overview </Link>
                        </MenuItem>
                        {lists.map((list, i) => <MenuItem className="my-4" key={i}> 
                            <Link className="w-full h-full" href={"/departments/"+ list.toLowerCase().replace(/ /g, "-")} onClick={() => setAnchorEl(null)}> {list} </Link>
                        </MenuItem>)}
                    </Menu>
                    </div>
                    <Button variant="contained" className="text-white bg-primary-main"> 
                    login  
                    <FontAwesomeIcon className="text-inherit ml-2" icon={faRightToBracket}/>
                  </Button>
                </div>
            </Toolbar>
        </AppBar>           
    </div>
)}
