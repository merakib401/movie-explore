import Card from "../Components/Card";
import { GetMovie } from "../Actions/GetMovie";
import { useEffect, useState } from "react";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Search Bar

  const filterMovies = movies.filter((movie) => {
    const matchName = movie.name.toLowerCase().includes(search.toLowerCase());
    return matchName;
  });

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await GetMovie();
        setMovies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, []);

  if (loading) {
    return <p className="text-center text-3xl p-8">Loading...</p>;
  }
  if (error) {
    return <p className="p-4 text-red-500">Error: {error}</p>;
  }

  return (
    <>
      <div className="flex  items-center gap-2 px-4 pt-4">
        <input
          className=" border-2 border-blue-500 p-2  rounded-2xl"
          type="search"
          placeholder="search by title"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-primary">Search</button>
      </div>

      <div className=" p-2 grid  md:grid-cols-5 gap-4">
        {filterMovies.length === 0 ? (
          <p className=" text-4xl col-span-full font-bold text-center">No movie match your search</p>
        ) : (
          filterMovies.map((movie) => (
            <Card
              key={movie.id}
              name={movie.name}
              image={movie.image}
              rating={movie.rating.average}
              relesed={movie.premiered}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))
        )}
      </div>
    </>
  );
}
