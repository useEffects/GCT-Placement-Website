export default function Carousel2 () {
    const datas = [
        {
            imgSrc: ""
        },
        {
            imgSrc: ""
        },
        {
            imgSrc: ""
        }
    ]
    return (<div className="h-[150px] my-4 w-full overflow-scroll">
        <div className={`w-[1000px] h-full py-4 flex`}>
            {datas.map((data, i) => <div className={`w-1/${datas.length} h-full bg-white shadow-lg rounded-3xl mx-4 flex justify-center items-center`} key={i}>
            <img className="bg-grey-600 object-contain w-full" src={data.imgSrc} />
            </div>)}
        </div> 
    </div>)
}
