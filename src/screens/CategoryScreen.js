import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";
import { ButtonGroup } from "react-native-elements";
import { Context as NewsContext } from "../context/NewsContext";
import NewsItemComponent from "../components/NewsItemComponent";
import Carousel from "react-native-snap-carousel";
import { ScrollView } from "react-native-gesture-handler";

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

  const headerComponent = () => {
    return (
      <View>
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
          Category:{route.params.category} 
          {/* {state.country == "US" ? "United States" : "Great Britain"} */}
        </Text>
      </View>
    );
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      {headerComponent()}
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
    textAlign:"center",
    fontWeight: "bold",
    alignSelf: "center",
  },
});
