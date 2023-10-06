import { FC } from "react";
import Image from "next/image";

interface MovieItemProps {
  movie: Movie;
  onClick: (id: number) => void;
}

export const MovieItem: FC<MovieItemProps> = ({
  movie,
  onClick,
}: {
  movie: Movie;
  onClick: (id: number) => void;
}) => (
  <div
    style={{
      padding: "1rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.5rem",
      cursor: "pointer",
      borderRadius: "1rem",
      position: "relative",
    }}
    onClick={() => onClick(movie.id)}
  >
    <div
      style={{
        height: "250px",
        width: "150px",
        position: "relative",
      }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt="poster image"
        layout="fill"
        objectFit="cover"
        style={{
          borderRadius: "1rem",
        }}
      />
    </div>
    <div
      style={{
        position: "absolute",
        background: `linear-gradient(transparent, black 30%)`,
        bottom: 10,
        textAlign: "center",
        width: "100%",
        paddingTop: "1rem",
      }}
    >
      <div>{movie.title}</div>
      <div
        style={{
          color: "gainsboro",
          fontSize: "12px",
          marginTop: "0.25rem",
        }}
      >
        {movie.release_date}
      </div>
    </div>
  </div>
);
