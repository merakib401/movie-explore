import { X } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function DetailModal({ onClose, image ,name, summary,relesed,rating, genres}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return createPortal(
    <div className="fixed inset-0 bg-black/50 p-5 flex justify-center items-center">
      <div className="w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-gray-300 shadow-xl rounded-3xl ">
        <div className="flex justify-end  p-4">
          <button
            onClick={onClose}
            className="bg-gray-200 rounded-full p-2 hover:scale-105  cursor-pointer "
          >
            <X />{" "}
          </button>
        </div>
        <figure className=" ">
          <img src={image.original} alt="Shoes" className=" rounded-3xl p-2 mx-auto w-full max-h-90 object-cover" />
        </figure>

        <div className="">
            <div className="flex justify-between p-4">
              <h2 className="text-2xl font-bold"> Name : {name}</h2>
               <p> Genres : {genres.join(", ")}</p>
            </div>
         
          <div className="flex justify-between px-4">
                <p className="text-sm font-semibold">Released: {relesed}</p>
                <p className="text-sm font-semibold">Rating: {rating}</p>
          </div>
          
        </div> 
          {summary && (
            <div
              className="text-sm  p-3"
              dangerouslySetInnerHTML={{ __html: summary }}
            />
          )}
      </div>
    </div>,
    document.body,
  );
}
