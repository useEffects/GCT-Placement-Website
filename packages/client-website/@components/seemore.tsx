import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Seemore ({link, className = ""}: {link: string, className?: string}) {
  return <div className={className + "flex w-[150px] h-full mx-4"}>
    <Link className="w-full h-full flex items-center text-xl" href={link}>
    <p className="text-inherit"> See More </p>
     <FontAwesomeIcon className="text-inherit ml-4" icon={faArrowRight} /> 
    </Link>
  </div>
}
