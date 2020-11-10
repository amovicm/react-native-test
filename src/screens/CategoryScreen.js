import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";
import { Context as NewsContext } from "../context/NewsContext";
import NewsItemComponent from "../components/NewsItemComponent";
import Carousel from "react-native-snap-carousel";
import { ScrollView } from "react-native-gesture-handler";
import HeaderComponent from "../components/HeaderComponent";

const CategoryScreen = ({route}) => {
  const { state, getNewsByCategories } = useContext(NewsContext);
  const [indexOfCountry, setCountryIndex] = useState(0);
  const [listOfArticles, setListOfArticles] = useState([]);

  useEffect(() => {
    getApi();
  }, [indexOfCountry]);

  const getApi = async () => {
    const articles = await getNewsByCategories(
      state.country,
      route.params.category
    );
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

  return (
    <ScrollView style={{ flex: 1 }}>
      <HeaderComponent
        title={"Category "+route.params.category}
        indexOfCountry={indexOfCountry}
        changeCountry={changeCountry}
        countryName={state.country}
      />
      <View>
        <Carousel
          data={listOfArticles}
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
          sliderWidth={400}
          itemWidth={350}
        />
      </View>
    </ScrollView>
  );
};
export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 27,
    textAlign: "center",
    fontWeight: "bold",
    alignSelf: "center",
  },
});
