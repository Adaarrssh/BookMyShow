import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieCards = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = "16a4259";
  const searchTerm = "comedy";

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${"16a4259"}&s=${searchTerm}`
      );
      if (response.data.Response === "True") {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
        console.error(response.data.Error);
      }
    } catch (error) {
      console.error("Error fetching data from OMDb API:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="movie-container"
      style={{
        width: "100%",
        maxWidth: "100",
        margin: "20px auto",
        textAlign: "center",
      }}
    >
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div
          className="movie-cards"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
            justifyContent: "center",
          }}
        >
          {movies.map((movie) => (
            <div
              key={movie.imdbID}
              className="movie-card"
              style={{
                width: "150px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "10px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/150"
                }
                alt={movie.Title}
                className="movie-poster"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "4px",
                }}
              />
              <h3
                className="movie-title"
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  margin: "10px 0 5px",
                }}
              >
                {movie.Title}
              </h3>
              <p
                className="movie-year"
                style={{
                  color: "#777",
                  fontSize: "14px",
                }}
              >
                Released: {movie.Year}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieCards;
