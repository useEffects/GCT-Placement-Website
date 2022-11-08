
import Zohoimg from "../images/logos/ZohoLogo.png"
import TCSimg from "../images/logos/TCSLogo.png"
import LTIimg from "../images/logos/LTLogo.png"
import Fordimg from "../images/logos/FordLogo.png"
import Aspireimg from "../images/logos/AspireLogo.png"
export default function Carousel2 () {
    const datas = [
        {
            imgSrc: Aspireimg.src
        },
        {
            imgSrc: Fordimg.src
        },
        {
            imgSrc: Zohoimg.src
        },
        {
            imgSrc: LTIimg.src
        },
        {
            imgSrc: TCSimg.src
        }
    ]
    return (<div className="h-[150px] my-4 w-full overflow-scroll lg:overflow-hidden">
        <div className={`w-[1000px] h-full py-4 flex justify-evenly lg:w-[1154px]`}>
            {datas.map((data, i) => <div className={`w-1/${datas.length} h-full bg-white shadow-lg rounded-3xl mx-4 flex justify-center items-center`} key={i}>
            <img className="bg-grey-600 object-contain h-full" src={data.imgSrc} />
            </div>)}
        </div> 
    </div>)
}
