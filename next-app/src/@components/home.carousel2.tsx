import company1 from '../images/Companylogo/2.png'
import company2 from '../images/Companylogo/11.png'
import company3 from '../images/Companylogo/22.png'
import company4 from '../images/Companylogo/39.png'
import company5 from '../images/Companylogo/45.png'



export default function Carousel2 () {
    const datas = [
        {
            imgSrc: company1.src
        },
        {
            imgSrc: company2.src
        },
        {
            imgSrc: company3.src
        },
        {
            imgSrc: company4.src
        },
        {
            imgSrc: company5.src
        }
    ]
    return (<div className="h-[150px] my-4 w-full overflow-scroll lg:overflow-hidden">
        <div className={`w-[1000px] h-full py-4 flex justify-evenly lg:w-[1154px] w-full`}>
            {datas.map((data, i) => <div className={`w-1/${datas.length} h-full bg-white shadow-md rounded-3xl mx-2 flex justify-center items-center`} key={i}>
            <img className="bg-grey-600 object-contain h-full w-full" src={data.imgSrc} />
            </div>)}
        </div> 
    </div>)
}
