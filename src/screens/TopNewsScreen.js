import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";
import { ButtonGroup } from "react-native-elements";
import { Context as NewsContext } from "../context/NewsContext";
import NewsItemComponent from "../components/NewsItemComponent";

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
          Top News:{state.country == "US" ? "United States" : "Great Britain"}
        </Text>
      </>
    );
  };

  return (
    <View>
      <FlatList
        ListHeaderComponent={headerComponent}
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
