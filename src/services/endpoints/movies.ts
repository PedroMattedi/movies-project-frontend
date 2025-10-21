import api from "../api";

export interface Movie {
  id: string;
  title: string;
  originalTitle: string;
  releaseDate: string;
  description: string;
  budget: number;
  duration: number;
  genre: string;
  imageUrl?: string;
}

export interface MovieResponse {
  data: Movie[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export const getMovies = async (
  search: string,
  page: number,
  limit: number,
  filters?: Record<string, any>
) => {
  const params = new URLSearchParams();

  if (search) params.append("search", search);
  params.append("page", String(page));
  params.append("limit", String(limit));

  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== "" && value !== undefined && value !== null) {
        params.append(key, String(value));
      }
    });
  }

  const { data } = await api.get(`/movies?${params.toString()}`);
  return data;
};

export const getMovieById = async (id: string): Promise<Movie> => {
  const { data } = await api.get(`/movies/${id}`);
  return data;
};

export const createMovie = async (movieData: {
  title: string;
  originalTitle: string;
  releaseDate: string;
  description: string;
  budget?: number;
  duration: number;
  genre: string;
  imageUrl?: string;
}) => {
  const { data } = await api.post("/movies", movieData);
  return data;
};

export const deleteMovie = async (id: string) => {
  const token = localStorage.getItem("access_token");
  return api.delete(`/movies/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
