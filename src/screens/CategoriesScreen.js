import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";
import { Context as NewsContext } from "../context/NewsContext";
import NewsItemComponent from "../components/NewsItemComponent";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { navigate } from "../navigationRef";
import HeaderComponent from "../components/HeaderComponent";
import LoadingDataComponent from "../components/LoadingDataComponent";

const CategoriesScreen = () => {
  const [listOfSportsArticles, setListOfSportsArticles] = useState([]);
  const [listOfHealthArticles, setListOfHealthArticles] = useState([]);
  const [listOfEntertainmentArticles, setListOfEntertainmentArticles] = useState([]);
  const [listOfScienceArticles, setListOfScienceArticles] = useState([]);
  const [listOfTechnologyArticles, setListOfTechnologyArticles] = useState([]);
  const [listOfGeneralArticles, setListOfGeneralArticles] = useState([]);
  const {state, getNewsByCategories} = useContext(NewsContext);
  const [reload, setReload] = useState(false);
 

  useEffect(() => {
    if(listOfTechnologyArticles)
     getApi();
  }, [reload]);

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

   const reRender = () => {
     setReload(!reload);
  };

  const renderEntertainment=()=>{
    return (
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
    );
  }

  const renderSports=()=>{
    return (
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
    );
  }

  const renderGeneral=()=>{
    return (
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
    );
  } 
  
  const renderHealth=()=>{
    return (
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
    );
  }

  const renderScience=()=>{
    return (
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
    );
  }

  const renderTechnology=()=>{
    return (
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
    );
  }
  console.log(listOfTechnologyArticles)
  return listOfTechnologyArticles.length > 0 &&
    listOfSportsArticles.length > 0 &&
    listOfEntertainmentArticles.length > 0 &&
    listOfScienceArticles.length > 0 &&
    listOfGeneralArticles.length > 0 &&
    listOfHealthArticles.length > 0 ? (
    <ScrollView>
      <HeaderComponent
        title="Top 5 news by categories from"
        reRender={reRender}
      />
      {renderEntertainment()}
      {renderSports()}
      {renderGeneral()}
      {renderHealth()}
      {renderScience()}
      {renderTechnology()}
    </ScrollView>
  ) : (
    <>
      <HeaderComponent
        title="Top 5 news by categories from"
        reRender={reRender}
      />
      <LoadingDataComponent />
    </>
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
  title: {
    fontSize: 20,
    marginVertical:10,
    width:"100%",
    textAlign:"center",
    color: "blue",
    fontWeight: "bold",
    alignSelf: "center",
  },
  categoryContainer: {
    padding: 1,
    backgroundColor: "#c9c6c5",
    borderWidth: 2,
    borderColor: "black",
  },
});
