import axios from "axios";
import { BASE_URL, API_KEY_PARAM, BACKDROP_BASE_URL } from "../config";

export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get(`${BASE_URL}movie/popular`, {
      headers: {
        Authorization:
        API_KEY_PARAM,
      },
    });
    return response.data.results;
  }

  static async fetchRecommendations(tvShowId) {
    const response = await axios.get(`${BASE_URL}movie/${tvShowId}/recommendations`, {
      headers: {
        Authorization:
        API_KEY_PARAM,
      },
    });
    return response.data.results;
  }

  static async fetchByTitle(title) {
    const response = await axios.get(`${BASE_URL}search/movie?query=${title}`, {
      headers: {
        Authorization:
        API_KEY_PARAM,
      },
    });
    return response.data.results;
  }
}
