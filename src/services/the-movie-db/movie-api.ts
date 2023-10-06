import axios from "axios";

// TODO : move to env
const baseUrl = process.env.THE_MOVIE_DB_HOST;

const headers = {
  Authorization: `Bearer ${process.env.THE_MOVIE_DB_API_KEY}`,
  accept: "application/json",
};

const getRating = (rating: string) => {
  let lte = "";
  let gte = "";

  switch (rating) {
    case "5":
      gte = "8";
      lte = "10";
      break;
    case "4":
      gte = "6";
      lte = "7.99";
      break;
    case "3":
      gte = "4";
      lte = "5.99";
      break;
    case "2":
      gte = "2";
      lte = "3.99";
      break;
    case "1":
      gte = "0";
      lte = "1.99";
      break;
  }

  return {
    "vote_average.gte": gte,
    "vote_average.lte": lte,
  };
};

const constructExploreMovieQuery = (
  page: number,
  sortBy: string,
  genre: string,
  rating: string
) => {
  let queryObject: Record<string, string> = {
    "vote_count.gte": "200",
  };

  if (page) queryObject.page = page.toString();
  if (sortBy) queryObject.sort_by = sortBy;
  if (genre !== "all") {
    queryObject.with_genres = genre;
  }
  if (rating !== "all") {
    queryObject = {
      ...queryObject,
      ...getRating(rating),
    };
  }

  return new URLSearchParams(queryObject).toString();
};

export const movieApi = {
  get: async (page: number, sortBy: string, genre: string, rating: string) => {
    const queryString = constructExploreMovieQuery(page, sortBy, genre, rating);

    const response = await axios.get<{
      page: number;
      results: Movie[];
    }>(`${baseUrl}/discover/movie?${queryString}`, {
      headers,
    });

    return response.data;
  },
  getById: async (movieId: number) => {
    const response = await axios.get<Movie>(`${baseUrl}/movie/${movieId}`, {
      headers,
    });

    return response.data;
  },
};
