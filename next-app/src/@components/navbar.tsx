import { AppBar, Button, Menu, MenuItem, Toolbar } from "@mui/material";
import gctLogo from "../images/logos/GCTlogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from "react";
import {placementDatas} from "../page-datas/placements"
import Link from "next/link";

export default function Navbar () {
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
        <AppBar elevation={6} className="fixed h-20">
            <Toolbar className="bg-white px-8 md:px-12 h-full flex justify-between items-center">
                <div className="flex items-center">
                  <img src={gctLogo.src} />  
                  <p className="md:text-lg ml-4 uppercase text-slate-900 font-bold"> government college of technology </p>
                </div>
                <div className="hidden md:flex [&>*]:mx-2 [&>*]:font-bold">
                    <Button className="text-black"> about </Button>
                    <div>
                    <Button className="text-black font-bold" onClick={handleClick}> 
                        department 
                        <FontAwesomeIcon className="text-inherit ml-2" icon={faChevronDown}/>
                    </Button>
                    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                        <MenuItem className="my-4">
                            <Link className="w-full h-full" href={"/departments"}> Overview </Link>
                        </MenuItem>
                        {lists.map((list, i) => <MenuItem className="my-4" key={i}> 
                            <Link className="w-full h-full" href={"/departments/"+ list.toLowerCase().replace(/ /g, "-")}> {list} </Link>
                        </MenuItem>)}
                    </Menu>
                    </div>
                    <Button className="text-black"> contact us </Button>
                    <Button className="text-black"> snapshots </Button>
                    <Button variant="contained" className="text-white bg-primary-main"> 
                    login  
                    <FontAwesomeIcon className="text-inherit ml-2" icon={faRightToBracket}/>
                  </Button>
                </div>
            </Toolbar>
        </AppBar>           
    </div>
)}
