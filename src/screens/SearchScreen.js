import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";
import { Context as NewsContext } from "../context/NewsContext";
import NewsItemComponent from "../components/NewsItemComponent";
import SearchBar from "../components/SearchBar";
import { ScrollView } from "react-native-gesture-handler";
import HeaderComponent from "../components/HeaderComponent";

const SearchScreen = () => {
  const { state, getSearchResult } = useContext(NewsContext);
  const [listOfArticles, setListOfArticles] = useState([]);
  const [query, setQuery] = useState("");
  const [reload, setReload] = useState(false);
 

  useEffect(() => {
    getApi();
  }, [reload, query]);

  const getApi = async () => {
    const articles = await getSearchResult(state.country, query);
    setListOfArticles(articles);
  };

   const reRender = () => {
     setReload(!reload);
   };

  const renderHeader = () => {
    return (
      <>
        <HeaderComponent title={"Search news"} reRender={reRender} />
        <SearchBar term={query} onTermChange={(text) => setQuery(text)} />
      </>
    );
  };

  return (
    <View>
      <FlatList
        data={listOfArticles}
        ListHeaderComponent={renderHeader()}
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
  );
};
export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonGroup: {
    margin: 5,
    width: "30%",
    alignSelf: "center",
  },
  selectedButton: {
    backgroundColor: "#101f39",
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
