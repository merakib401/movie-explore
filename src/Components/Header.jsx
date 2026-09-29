import { Link } from "react-router"

export default function Header() {
  return (
    <div className="shadow-md flex justify-between  px-8 py-2 ">
        <div>
            <h3 className="text-2xl   font-semibold text-blue-800"> <Link to={"/"} >Movie<span className="text-blue-400">Explorer</span></Link> </h3>
        </div>
        <ul className=" flex gap-5">
            <li className="text-xl   font-semibold text-blue-400"> <Link to={"/movie-list"}>Movies</Link> </li>
           
        </ul>
        
       
        
    </div>
  )
}
