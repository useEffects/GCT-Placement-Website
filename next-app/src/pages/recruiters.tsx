import {Container} from "@mui/material"
import Header from "../@styled-components/header"
import Space from "../@styled-components/space"
import {recruitersDatas} from "../page-datas/recruiters"


export default function recruiters () {
  return <> 
    <Space />
    <Header text={"Our Recruiters"}/>
    <Container className="w-full grid bg-white gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {recruitersDatas.map((rec, i) => 
      <div key={i} className="shadow-lg ">
        <img src={require(`../images/recruiters/${rec.name}`).default.src} className="w-[300px] h-[200px] object-contain lg:w-[300px] h-[300px]"/>
      </div>)}
    </Container>
    <Space />
  </>
}
