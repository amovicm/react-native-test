import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import TopNewsScreen from "./TopNewsScreen";
import CategoriesScreen from "./CategoriesScreen";
import SearchScreen from "./SearchScreen";
 

const topNewsScreen = () => (
  <TopNewsScreen/>
);

const categoriesScreen = () => (
  <CategoriesScreen/>
);
 
const searchScreen = () => (
  <SearchScreen/>
);
 
const initialLayout = { width: Dimensions.get('window').width };
 
const RootScreen =()=> {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "TopNews", title: "Top News" },
    { key: "Categories", title: "Categories" },
    { key: "Search", title: "Search" },
  ]);

  const renderScene = SceneMap({
    TopNews: topNewsScreen,
    Categories: categoriesScreen,
    Search: searchScreen,
  });

  return (
    <TabView
      style={{ backgroundColor: "grey" }}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          labelStyle={{
            fontWeight: "bold",
            color: "white",
            fontStyle: "normal",
          }}
          style={{ backgroundColor: "red", elevation: 0 }}
          indicatorStyle={{
            backgroundColor: "blue",
            height: 3,
            marginVertical: 5,
          }}
        />
      )}
    />
  );
}

export default RootScreen;
 
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  }});