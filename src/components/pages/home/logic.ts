export const ratingOptions = [
  {
    id: "5",
    label: "★★★★★",
  },
  {
    id: "4",
    label: "★★★★☆",
  },
  {
    id: "3",
    label: "★★★☆☆",
  },
  {
    id: "2",
    label: "★★☆☆☆",
  },
  {
    id: "1",
    label: "★☆☆☆☆",
  },
];

export const sortByOptions = [
  {
    id: "primary_release_date.desc",
    label: "Release date",
  },
  {
    id: "popularity.desc",
    label: "Popularity",
  },
  {
    id: "vote_average.desc",
    label: "Rating",
  },
];

export const MOVIE_PER_PAGE = 20;
export const INITIAL_GENRE = "all";
export const INITIAL_RATING = "all";
export const INITIAL_SORT_BY = "popularity.desc";
