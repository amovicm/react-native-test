import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";
import { Context as NewsContext } from "../context/NewsContext";
import NewsItemComponent from "../components/NewsItemComponent";
import Carousel from "react-native-snap-carousel";
import { ScrollView } from "react-native-gesture-handler";
import HeaderComponent from "../components/HeaderComponent";

const CategoryScreen = ({ route }) => {
  const { state, getNewsByCategories } = useContext(NewsContext);
  const [listOfArticles, setListOfArticles] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    getApi();
  }, [reload]);

  const getApi = async () => {
    const articles = await getNewsByCategories(
      state.country,
      route.params.category
    );
    setListOfArticles(articles);
  };

  const reRender = () => {
    setReload(!reload);
  };

  return (
    <ScrollView>
      <HeaderComponent
        title={"Category " + route.params.category}
        reRender={reRender}
      />
      <View>
        <Carousel style={{width:"80%",height:"100%"}}
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
          itemWidth={300}
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
