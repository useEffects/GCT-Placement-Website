import FirstImage from "../images/CompanyAmico.png"
import SecondImage from "../images/Cheer2.png"
import ThirdImage from "../images/MoneyIncomeAmico.png"


export const Carousel1 = () => {
    const datas = [
        {
            imgSrc: FirstImage.src,
            header: "Number Of Companies",
            content: "An extensive amount of trustworthy and booming companies that hire in our college.",
            stat: 100
        },
        {
            imgSrc: SecondImage.src,
            header: "Number Of Students Placed",
            content: "300 Bright and Astute minds who have managed to get placed successfully",
            stat: 300
        },
        {
            imgSrc: ThirdImage.src,
            header: "Highest Package",
            content: "A whopping amount for the deserving ones",
            stat: 14+'LPA'
        }

    ]
    return (<div className="w-full overflow-scroll bg-transparent h-[700px] mb-4 lg:overflow-hidden">
        <div className={`w-[1000px] py-12 flex h-full lg:w-[1154px]`}>
            {datas.map((data, i) => (<div key={i} className={`shadow-lg w-1/${datas.length} bg-white rounded-3xl flex flex-col justify-around items-center h-full mx-4 py-12 px-4`}>
                <img className="object-contain w-full bg-gray-100" src={data.imgSrc}/>
                <p className="font-bold text-lg text-center"> {data.header} </p>
                <p className="text-6xl z-[1] relative font-extrabold before:absolute before:top-6 before:-bottom-0 before:-left-2 before:-right-2 before:bg-[#ffe5b4] before:z-[-1] before:rounded-tl-[9999px] before:rounded-br-[9999px]"> {data.stat} </p>
                <p className="text-center"> {data.content} </p>
        </div>))} 
        </div>
    </div>)
}




















