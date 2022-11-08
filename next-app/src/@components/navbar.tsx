import { AppBar, Button, Toolbar } from "@mui/material";
import gctLogo from "../images/logos/GCTlogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faChevronDown } from '@fortawesome/free-solid-svg-icons'
export default function Navbar () {
    return (
    <div className="h-20">
        <AppBar elevation={0} className="fixed h-20">
            <Toolbar className="bg-white px-8 md:px-12 h-full flex justify-between items-center">
                <div className="flex items-center">
                  <img src={gctLogo.src} />  
                  <p className="md:text-lg ml-4 uppercase text-slate-900 font-bold"> government college of technology </p>
                </div>
                <div className="hidden md:block [&>*]:mx-2 [&>*]:font-bold">
                    <Button className="text-black"> about </Button>
                    <Button className="text-black"> 
                        department 
                        <FontAwesomeIcon className="text-inherit ml-2" icon={faChevronDown}/>
                    </Button>
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
