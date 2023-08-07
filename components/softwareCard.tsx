import { softwareCardComponent } from "@/type"
import Link from "next/link"
import Image from "next/image"

const softwareCard = ({ title, link }: softwareCardComponent) => {

    return (
        <div className="softwarecard md:w-[23%] flex flex-col h-auto p-10 justify-between items-center bg-blue-50 hover:drop-shadow-md duration-200 rounded-sm ">
            <h1 className="text-[30px] font-bold hover:text-[#6e97fd]"><Link href={link}>#</Link></h1>
            <h1 className="text-center text-[20px]">{title}</h1>
            <button className="py-4 px-8 rounded hover:bg-[#6E97FD] text-white m-4 bg-[#00203c]"><Link href={link}>Download</Link></button>
        </div>
    )
}

export default softwareCard

