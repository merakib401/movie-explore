import { useState } from "react";
import DetailModal from "./DetailModal";

export default function Card({ name, image, rating, relesed,summary,genres }) {

  const [click ,setClick] = useState(false)
  return (
    <div>
      <div className="card bg-gray-200 w-60 shadow-sm m-8">
        <figure className=" ">
          <img src={image.medium} alt="Shoes" className=" rounded-3xl p-4" />
        </figure>


        <div className="card-body items-center text-center">
          <h2 className="card-title">{name} </h2>
          <div className="flex gap-5">
            <p className="text-xs">Rating :{rating}</p>
            <p className="text-xs">Relesed :{relesed}</p>
          </div>
          <div className="card-actions">
            <button type="button" onClick={() => setClick("clicked")} className="btn btn-primary"> See Details </button>
          </div>
        </div>
      </div>
      {click && <DetailModal onClose ={() =>setClick(false)}  image={image} name={name} summary= {summary} relesed ={relesed} rating={rating} genres ={genres} />}
    </div>
  );
}



