import { movieApi } from "@/services/the-movie-db/movie-api";
import { genreApi } from "@/services/the-movie-db/genre-api";
import {
  INITIAL_GENRE,
  INITIAL_RATING,
  INITIAL_SORT_BY,
} from "@/components/pages/home";
import { Home } from "@/components/pages/home";

const HomePage = ({
  initialPage,
  initialMovies,
  genres,
}: {
  initialPage: number;
  initialMovies: Movie[];
  genres: Genre[];
}) => {
  return (
    <Home
      initialPage={initialPage}
      initialMovies={initialMovies}
      genres={genres}
    />
  );
};

export default HomePage;

export const getServerSideProps = async () => {
  const [{ page, results }, { genres }] = await Promise.all([
    movieApi.get(1, INITIAL_SORT_BY, INITIAL_GENRE, INITIAL_RATING),
    genreApi.get(),
  ]);

  return {
    props: {
      initialPage: page,
      initialMovies: results,
      genres,
    },
  };
};
