import axios from "axios";

// TODO : move to env
const baseUrl = "https://api.themoviedb.org/3";

const resourceName = "genre";

const apiKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM2UwZGQ5ODc5YTE1NTFlNzc4MTJkZWJhNTEzMTJhMSIsInN1YiI6IjY1MWJjNGEwZWE4NGM3MDE0ZWZkMmVkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nPavCmuQ_XfpPxmzFvLmXiyWujXOjWCTMJmqDLs6KW4";

const headers = {
  Authorization: `Bearer ${apiKey}`,
  accept: "application/json",
};

export const genreApi = {
  get: async () => {
    const response = await axios.get<{
      genres: Genre[];
    }>(`${baseUrl}/${resourceName}/movie/list`, {
      headers,
    });

    return response.data;
  },
};
