import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";
import { ButtonGroup } from "react-native-elements";
import { Context as NewsContext } from "../context/NewsContext";
import NewsItemComponent from "../components/NewsItemComponent";
import SearchBar from "../components/SearchBar";
import { ScrollView } from "react-native-gesture-handler";

const SearchScreen = () => {
  const { state, getSearchResult } = useContext(NewsContext);
  const [indexOfCountry, setCountryIndex] = useState(0);
  const [listOfArticles, setListOfArticles] = useState([]);
  const [query,setQuery] = useState("");
  
  useEffect(() => {
    getApi();
  }, [indexOfCountry,query]);

  const getApi = async () => {
    const articles = await getSearchResult(state.country,query);
    setListOfArticles(articles);
  };

  const changeCountry = () => {
    if (indexOfCountry == 0) {
      state.country = "GB";
      setCountryIndex(1);
      console.log(state.country);
    } else {
      state.country = "US";
      setCountryIndex(0);
      console.log(state.country);
    }
  };

  const headerComponent = () => {
    return (
      <>
        <View>
          <ButtonGroup
            buttons={["US", "GB"]}
            containerStyle={styles.buttonGroup}
            selectedIndex={indexOfCountry}
            selectedButtonStyle={styles.selectedButton}
            onPress={() => changeCountry()}
          />
        </View>
        <Text style={styles.title}>
          Search news:{state.country == "US" ? "United States" : "Great Britain"}
        </Text>
      </>
    );
  };

  return (
    <ScrollView>
      {headerComponent()}
      <SearchBar term={query} onTermChange={(text) => setQuery(text)} />
      <FlatList
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
    </ScrollView>
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
    backgroundColor: "blue",
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    alignSelf: "center",
  },
});