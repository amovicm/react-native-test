import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";
import { Context as NewsContext } from "../context/NewsContext";
import NewsItemComponent from "../components/NewsItemComponent";
import HeaderComponent from "../components/HeaderComponent";
import LoadingDataComponent from "../components/LoadingDataComponent";

const TopNewsScreen = () => {
  const { state, getTopNews } = useContext(NewsContext);
  const [indexOfCountry, setCountryIndex] = useState(0);
  const [listOfArticles, setListOfArticles] = useState([]);
  useEffect(() => {
    getApi();
  }, [indexOfCountry]);

  const getApi = async () => {
    const articles = await getTopNews(state.country);
    setListOfArticles(articles);
  };

  const changeCountry = () => {
    if (indexOfCountry == 0) {
      state.country="GB";
      setCountryIndex(1);
      console.log(state.country);
    } else {
      state.country="US";
      setCountryIndex(0);
      console.log(state.country);
    }
  };

  return (
    listOfArticles!=undefined?
    <View>
      <FlatList
        ListHeaderComponent= { <HeaderComponent
          title={"Top News "}
          indexOfCountry={indexOfCountry}
          changeCountry={changeCountry}
          countryName={state.country}
        />}
        data={listOfArticles}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <NewsItemComponent
              imgSrc={item.urlToImage}
              title={item.title}
              desc={item.description}
              content={item.content}
            />
          );
        }}
      />
    </View>
    :
    <LoadingDataComponent/>

  );
};
export default TopNewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
