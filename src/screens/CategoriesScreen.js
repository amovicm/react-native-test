import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";
import { ButtonGroup } from "react-native-elements";
import { Context as NewsContext } from "../context/NewsContext";
import NewsItemComponent from "../components/NewsItemComponent";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { navigate } from "../navigationRef";

const CategoriesScreen = () => {
  const [listOfSportsArticles, setListOfSportsArticles] = useState([]);
  const [listOfHealthArticles, setListOfHealthArticles] = useState([]);
  const [
    listOfEntertainmentArticles,
    setListOfEntertainmentArticles,
  ] = useState([]);
  const [listOfScienceArticles, setListOfScienceArticles] = useState([]);
  const [listOfTechnologyArticles, setListOfTechnologyArticles] = useState([]);
  const [listOfGeneralArticles, setListOfGeneralArticles] = useState([]);
  const { state, getNewsByCategories } = useContext(NewsContext);
  const [indexOfCountry, setCountryIndex] = useState(0);

  useEffect(() => {
    getApi();
  }, [indexOfCountry]);

  const getApi = async () => {
    const sportsResponse = await getNewsByCategories(
      state.country,
      "Sports",
      5
    );
    setListOfSportsArticles(sportsResponse);

    const healthResponse = await getNewsByCategories(
      state.country,
      "Health",
      5
    );
    setListOfHealthArticles(healthResponse);

    const entertainmentResponse = await getNewsByCategories(
      state.country,
      "Entertainment",
      5
    );
    setListOfEntertainmentArticles(entertainmentResponse);

    const scienceResponse = await getNewsByCategories(
      state.country,
      "Science",
      5
    );
    setListOfScienceArticles(scienceResponse);

    const technologyResponse = await getNewsByCategories(
      state.country,
      "Technology",
      5
    );
    setListOfTechnologyArticles(technologyResponse);

    const generalResponse = await getNewsByCategories(
      state.country,
      "General",
      5
    );
    setListOfGeneralArticles(generalResponse);
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
          Top 5 news by categories from:
          {state.country == "US" ? "United States" : "Great Britain"}
        </Text>
      </>
    );
  };

  return (
    <ScrollView>
      {headerComponent()}

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          onPress={() => navigate("Category", { category: "Entertainment" })}
        >
          <Text style={styles.title}>Entertainment</Text>
        </TouchableOpacity>
        <FlatList
          data={listOfEntertainmentArticles}
          scrollEnabled={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <>
                <Text></Text>
                <NewsItemComponent
                  imgSrc={item.urlToImage}
                  title={item.title}
                  desc={item.description}
                  content={item.content}
                />
              </>
            );
          }}
        />
      </View>

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          onPress={() => navigate("Category", { category: "Sports" })}
        >
          <Text style={styles.title}>Sports</Text>
        </TouchableOpacity>
        <FlatList
          data={listOfSportsArticles}
          scrollEnabled={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <>
                <Text></Text>
                <NewsItemComponent
                  imgSrc={item.urlToImage}
                  title={item.title}
                  desc={item.description}
                  content={item.content}
                />
              </>
            );
          }}
        />
      </View>

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          onPress={() => navigate("Category", { category: "General" })}
        >
          <Text style={styles.title}>General</Text>
        </TouchableOpacity>
        <FlatList
          data={listOfGeneralArticles}
          scrollEnabled={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <>
                <Text></Text>
                <NewsItemComponent
                  imgSrc={item.urlToImage}
                  title={item.title}
                  desc={item.description}
                  content={item.content}
                />
              </>
            );
          }}
        />
      </View>

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          onPress={() => navigate("Category", { category: "Health" })}
        >
          <Text style={styles.title}>Health</Text>
        </TouchableOpacity>
        <FlatList
          data={listOfHealthArticles}
          scrollEnabled={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <>
                <Text></Text>
                <NewsItemComponent
                  imgSrc={item.urlToImage}
                  title={item.title}
                  desc={item.description}
                  content={item.content}
                />
              </>
            );
          }}
        />
      </View>

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          onPress={() => navigate("Category", { category: "Science" })}
        >
          <Text style={styles.title}>Science</Text>
        </TouchableOpacity>
        <FlatList
          data={listOfScienceArticles}
          scrollEnabled={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <>
                <Text></Text>
                <NewsItemComponent
                  imgSrc={item.urlToImage}
                  title={item.title}
                  desc={item.description}
                  content={item.content}
                />
              </>
            );
          }}
        />
      </View>

      <View style={styles.categoryContainer}>
        <TouchableOpacity>
          <Text style={styles.title}>Technology</Text>
        </TouchableOpacity>
        <FlatList
          data={listOfTechnologyArticles}
          scrollEnabled={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <>
                <Text></Text>
                <NewsItemComponent
                  imgSrc={item.urlToImage}
                  title={item.title}
                  desc={item.description}
                  content={item.content}
                />
              </>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};
export default CategoriesScreen;

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
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
  },
  categoryContainer: {
    marginVertical: 1,
    marginHorizontal: 3,
    padding: 2,
    backgroundColor: "#c9c6c5",
    borderRadius: 6,
    borderWidth:2,
    borderColor:'black'
  },
});