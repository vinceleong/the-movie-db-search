import { movieApi } from "@/services/the-movie-db/movie-api";
import { useEffect, useState } from "react";
import {
  INITIAL_GENRE,
  INITIAL_RATING,
  INITIAL_SORT_BY,
  MOVIE_PER_PAGE,
  MovieModal,
  ratingOptions,
  sortByOptions,
  MovieItem,
} from "./";
import { useIsFirstRender, useShowBackToTop } from "@/hooks";
import { BackToTopButton } from "@/components/ui";
import styles from "./home.module.css";

export const Home = ({
  initialPage,
  initialMovies,
  genres,
}: {
  initialPage: number;
  initialMovies: Movie[];
  genres: Genre[];
}) => {
  const [page, setPage] = useState(initialPage);
  const [movies, setMovies] = useState(initialMovies);
  const [isLoading, setIsLoading] = useState(false);
  const [genre, setGenre] = useState(INITIAL_GENRE);
  const [rating, setRating] = useState(INITIAL_RATING);
  const [sortBy, setSortBy] = useState(INITIAL_SORT_BY);
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);

  const { showBackToTop } = useShowBackToTop();
  const { isFirstRender } = useIsFirstRender();

  useEffect(() => {
    (async () => {
      if (isFirstRender) return;

      try {
        setIsLoading(true);

        const { page: resultPage, results } = await movieApi.get(
          page,
          sortBy,
          genre,
          rating
        );
        setPage(resultPage);
        setMovies(results);

        if (resultPage === page) {
          setPage(resultPage);
        }
      } catch (e) {
        console.error(e);
        alert("Error: Failed to fetch movie");
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page, sortBy, genre, rating, isFirstRender]);

  const filterBar = (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        margin: "1rem",
        justifyContent: "center",
      }}
    >
      <select
        name="genre"
        id="genre"
        value={genre}
        onChange={(e) => {
          setGenre(e.target.value);
          setPage(1);
        }}
      >
        <option value="all">All genres</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
      <select
        name="rating"
        id="rating"
        value={rating}
        onChange={(e) => {
          setRating(e.target.value);
          setPage(1);
        }}
      >
        <option value="all">All ratings</option>
        {ratingOptions.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
      <select
        name="sortBy"
        id="sortBy"
        value={sortBy}
        onChange={(e) => {
          setSortBy(e.target.value);
          setPage(1);
        }}
      >
        {sortByOptions.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );

  const movieList = (
    <div className={styles.movieList}>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} onClick={setSelectedMovieId} />
      ))}
    </div>
  );

  const pagination = (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        margin: "1rem",
      }}
    >
      <button
        style={{
          width: "4rem",
          paddingTop: "0.25rem",
          paddingBottom: "0.25rem",
        }}
        disabled={page === 1 || isLoading}
        onClick={() => setPage((page) => page - 1)}
      >
        Back
      </button>
      <button
        style={{
          width: "4rem",
          paddingTop: "0.25rem",
          paddingBottom: "0.25rem",
        }}
        disabled={isLoading || movies.length < MOVIE_PER_PAGE}
        onClick={() => setPage((page) => page + 1)}
      >
        Next
      </button>
    </div>
  );

  return (
    <div>
      {filterBar}
      {movieList}
      {selectedMovieId && (
        <MovieModal
          movieId={selectedMovieId}
          onClose={() => setSelectedMovieId(null)}
        />
      )}
      {pagination}
      {showBackToTop && <BackToTopButton />}
    </div>
  );
};
