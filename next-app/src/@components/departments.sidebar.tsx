import { Button } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"
import {placementDatas} from "../page-datas/placements"

export default function Sidebar () {
  const lists = placementDatas.map(p => p.category)
  const router = useRouter()
  let {department} = router.query
  department = department && String(department).replace(/-/g, " ") 
  return <div className="w-full flex justify-evenly items-center rounded-lg bg-gray-200">
    <Button variant={department ? "text" : "outlined"} className={`text-center font-bold m-4 text-black ${!department && "border-black"}`}> 
      <Link href={"/departments"}> overview </Link>
    </Button>
    {lists.map((list, i) => <Button variant={list.toLowerCase() == department ? "outlined": "text"} className={`text-center font-bold m-4 text-black ${list.toLowerCase() == department && "border-black"}`} key={i}>
    <Link href={"/departments/"+list.toLowerCase().replace(/ /g, "-")}> {list} </Link>
    </Button>)}
  </div>
}
