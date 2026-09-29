import { Link } from "react-router";

//  "url('/background.jpg')"
export default function Home() {
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('./src/assets/23456.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="min-h-screen bg-black/50 flex items-center justify-center px-5">
          {/* Content */}
          <div className="text-center text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-5">
              DISCOVER MOVIES
            </h1>

            <p className="text-lg md:text-xl mb-8 text-gray-200">
               Explore and discover your favorite            │
│                movies from around the world.
            </p>

            <button className="btn btn-primary   text-white text-2xl px-8"><Link to={"/movie-list"}>Explore Now</Link></button>
          </div>
        </div>
      </div>
    </>
  );
}
