import { hotMovies } from "../schemas/movieSchemas/hotMovies";
import { movieInfos } from "../schemas/movieSchemas/movieInfos";
import { seasonDetails } from "../schemas/movieSchemas/seasonDetails";

// Action types
const SET_TRENDING_SHOWS = "SET_TRENDING_SHOWS";
const SET_TOP_SHOWS = "SET_TOP_SHOWS";
const SET_TRENDING_MOVIES = "SET_TRENDING_MOVIES";
const SET_TOP_MOVIES = "SET_TOP_MOVIES";
const SET_MOVIE_INFOS = "SET_MOVIE_INFOS";
const SET_SEASON_DETAILS = "SET_SEASON_DETAILS";
const SET_SHAHID4U_EPISODE = "SET_SHAHID4U_EPISODE";
const SET_SLUG = "SET_SLUG";

// Action creators
export const setTrendingShows = (shows) => ({
  type: SET_TRENDING_SHOWS,
  payload: shows,
});
export const setTopShows = (shows) => ({
  type: SET_TOP_SHOWS,
  payload: shows,
});
export const setTrendingMovies = (movies) => ({
  type: SET_TRENDING_MOVIES,
  payload: movies,
});
export const setTopMovies = (movies) => ({
  type: SET_TOP_MOVIES,
  payload: movies,
});
export const setMovieInfos = (infos) => ({
  type: SET_MOVIE_INFOS,
  payload: infos,
});
export const setSeasonDetails = (infos) => ({
  type: SET_SEASON_DETAILS,
  payload: infos,
});
export const setShahid4uEpisodes = (infos) => ({
  type: SET_SHAHID4U_EPISODE,
  payload: infos,
});
export const setSlug = (infos) => ({
  type: SET_SLUG,
  payload: infos,
});

export const initialState = {
  slug: {},
  shahid4uEpisodes: [],
  seasonDetails: seasonDetails,
  movieInfos: movieInfos,
  trendingShows: hotMovies.trendingWeek.shows,
  trendingMovies: hotMovies.trendingWeek.movies,
  topShows: hotMovies.topRated.shows,
  topMovies: hotMovies.topRated.movies,
};

// Reducer function
export const reducer = (state, action) => {
  switch (action.type) {
    case SET_MOVIE_INFOS:
      return {
        ...state,
        movieInfos: action.payload,
      };
    case SET_TRENDING_SHOWS:
      return {
        ...state,
        trendingShows: action.payload,
      };
    case SET_TOP_SHOWS:
      return {
        ...state,
        topShows: action.payload,
      };
    case SET_TRENDING_MOVIES:
      return {
        ...state,
        trendingMovies: action.payload,
      };
    case SET_TOP_MOVIES:
      return {
        ...state,
        topMovies: action.payload,
      };
    case SET_SEASON_DETAILS:
      return {
        ...state,
        seasonDetails: action.payload,
      };
    case SET_SHAHID4U_EPISODE:
      return {
        ...state,
        shahid4uEpisodes: action.payload,
      };
    case SET_SLUG:
      return {
        ...state,
        slug: action.payload,
      };
    default:
      return state;
  }
};
