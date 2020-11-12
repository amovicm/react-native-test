import createDataContext from "./createDataContext";
import NewsApi from "../api/NewsApi";

const newsReducer = (state, action) => {
  switch (action.type) {
    case "switch_to_us":
      return { ...state, country: action.payload };
    case "switch_to_gb":
      return { ...state, country: action.payload };
    default:
      return state;
  }
};

const getTopNews = (dispatch) => async (country) => {
  console.log("TopNewsApi called");
  return await NewsApi.get(
    "top-headlines?apiKey=d95b9e79494244a8b0d9d7ed777537ab&country=" + country
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
    "top-headlines?apiKey=d95b9e79494244a8b0d9d7ed777537ab&country=" +
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
    "top-headlines?apiKey=d95b9e79494244a8b0d9d7ed777537ab&country=" +
      country +
      "&q=" +
      query
  )
    .then((result) => result.data.articles)
    .catch((e) => console.log(e));
};

const switchCountry = (dispatch) => async (country) => {
  if(country==="US"){ 
  dispatch({
     type: "switch_to_us",
     payload: "GB",
   });
  }
  else{
     dispatch({
       type: "switch_to_gb",
       payload: "US",
     });
  }
};

export const { Provider, Context } = createDataContext(
  newsReducer,
  {
    getTopNews,
    getNewsByCategories,
    getSearchResult,
    switchCountry,
  },
  {
    country: "US",
  }
);
