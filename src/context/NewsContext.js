import createDataContext from "./createDataContext";
import NewsApi from "../api/NewsApi";

const newsReducer = (state, action) => {
  switch (action.type) {
    case "get_top_news":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const getTopNews = (dispatch) => async (country) => {
  console.log("TopNewsApi called");
  return await NewsApi.get(
    "top-headlines?apiKey=0f2d49f8fd5e456aa66a3cd89624d318&country=" + country
  )
    .then((result) => result.data.articles)
    .catch((e) => console.log(e));
};

const getNewsByCategories = (dispatch) => async (
  country,
  category,
  numberOfNews
) => {
  console.log("NewsByCategoriy Api called");
  return await NewsApi.get(
    "top-headlines?apiKey=0f2d49f8fd5e456aa66a3cd89624d318&country=" +
      country +
      "&category=" +
      category +
      "&pageSize=" +
      numberOfNews
  )
    .then((result) => result.data.articles)
    .catch((e) => console.log(e));
};

const getSearchResult = (dispatch) => async (
  country,
  query
) => {
  console.log("Search Api called");
  return await NewsApi.get(
    "top-headlines?apiKey=0f2d49f8fd5e456aa66a3cd89624d318&country=" +
      country +
      "&q=" +
      query
  )
    .then((result) => result.data.articles)
    .catch((e) => console.log(e));
};

export const { Provider, Context } = createDataContext(
  newsReducer,
  {
    getTopNews,
    getNewsByCategories,
    getSearchResult,
  },
  {
    country: "US",
  }
);
