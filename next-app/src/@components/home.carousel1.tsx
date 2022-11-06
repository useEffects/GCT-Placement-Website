export const Carousel1 = () => {
    const datas = [
        {
            imgSrc: "",
            header: "Number Of Students Placed",
            content: "300 Bright and Astute minds who have managed to get placed successfully",
            stat: 300
        },
        {
            imgSrc: "",
            header: "Number Of Students Placed",
            content: "300 Bright and Astute minds who have managed to get placed successfully",
            stat: 300
        },
        {
            imgSrc: "",
            header: "Number Of Students Placed",
            content: "300 Bright and Astute minds who have managed to get placed successfully",
            stat: 300
        }

    ]
    return (<div className="w-full overflow-scroll bg-gray-100 h-[600px] my-4">
        <div className={`w-[1000px] py-12 flex h-full`}>
            {datas.map((data, i) => (<div key={i} className={`shadow-lg w-1/${datas.length} bg-white rounded-3xl flex flex-col justify-around items-center h-full mx-4 py-12 px-4`}>
                <img className="object-contain h-1/2 bg-gray-100" src={data.imgSrc} />
                <p className="font-bold text-lg text-center"> {data.header} </p>
                <p className="text-6xl z-[1] relative font-extrabold before:absolute before:top-6 before:-bottom-0 before:-left-2 before:-right-2 before:bg-primary-light before:z-[-1] before:rounded-tl-[9999px] before:rounded-br-[9999px]"> {data.stat} </p>
                <p className="text-center"> {data.content} </p>
        </div>))} 
        </div>
    </div>)
}




















