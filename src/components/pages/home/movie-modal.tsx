import { movieApi } from "@/services/the-movie-db/movie-api";
import { useEffect, useState } from "react";
import { Modal } from "@/components/ui";

export const MovieModal = ({
  movieId,
  onClose,
}: {
  movieId: number;
  onClose: () => void;
}) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await movieApi.getById(movieId);
        setMovie(data);
      } catch (e) {
        console.error(e);
        alert("Error: Failed to fetch movie");
      }
    })();
  }, [movieId]);

  return (
    <Modal open onClose={onClose}>
      <div
        style={{
          padding: "1rem",
          color: "white",
        }}
      >
        {!movie && <div>Loading...</div>}
        {movie && (
          <div>
            <div>Synopsis:</div>
            <p style={{ marginTop: "0.5rem" }}>{movie.overview}</p>
            <div style={{ marginTop: "2rem" }}>Release date:</div>
            <div style={{ marginTop: "0.5rem" }}>{movie.release_date}</div>
          </div>
        )}
      </div>
    </Modal>
  );
};
