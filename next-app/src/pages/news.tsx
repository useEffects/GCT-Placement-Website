import {Container} from "@mui/material"
import {newsData as newsDatas} from "../page-datas/news"
import Space from "../@styled-components/space"
import Header from "../@styled-components/header"


export default function news () {
  return <>
    <Space />
    <Header text={"GCT on news"}/>
    <Space />
    <Container className="grid grid-cols-3 gap-2">
     {newsDatas.map((data, i) => <div className="w-full p-4 shadow flex flex-col justify-between h-[200px] bg-white" key={i}>
        <p className="text-gray-500 uppercase text-lg"> {data.date} </p>
        <p className="text-lg text-black"> {data.header} </p>
        <a target="_blank" className="text-blue-500 underline" href={data.link}> see more </a>
        <img src={require(`../images/newsimg/${data.newsLogoImgName}`).default.src} className="w-full h-[50px] bg-gray-100"/>
     </div>)} 
    </Container> 
    <Space />
  </>
}
