import { Link } from "react-router";
import bg from "../assets/23456.jpg"; 

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Gradient Overlay */}
      <div className="min-h-screen bg-gradient-to-b from-black/70 via-black/50 to-black/80 flex items-center justify-center px-5">
      
      
        {/* Content */}

        <div className="text-center text-white max-w-2xl animate-fade-in">
          <span className="inline-block mb-4 px-4 py-1 text-sm tracking-widest uppercase border border-white/30 rounded-full bg-white/10 backdrop-blur-sm">
            Your Movie Guide
          </span>

          <h1 className="text-4xl md:text-7xl font-extrabold mb-5 tracking-wide drop-shadow-lg">
            DISCOVER{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
              MOVIES
            </span>
          </h1>

          <p className="text-lg md:text-xl mb-10 text-gray-200 leading-relaxed">
            Explore and discover your favorite movies from around the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/movie-list"
              className="btn btn-primary btn-lg rounded-full px-10 text-white text-xl shadow-lg shadow-primary/40 hover:scale-105 transition-transform duration-300" >
              Explore Now
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}






