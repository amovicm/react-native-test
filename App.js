import { setNavigator } from "./src/navigationRef";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { Provider as NewsProvider } from "./src/context/NewsContext";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SingleArticleComponent from "./src/components/SingleArticleComponent";
import CategoryScreen from "./src/screens/CategoryScreen";
import TopNewsScreen from "./src/screens/TopNewsScreen";
import CategoriesScreen from "./src/screens/CategoriesScreen";
import SearchScreen from "./src/screens/SearchScreen";

const rootNavigator = createStackNavigator();
const bottomTabNavigator = createBottomTabNavigator();

const BottomTabNavigationComponent = () => {
  return (
    <bottomTabNavigator.Navigator
      tabBarOptions={{
        activeTintColor: "yellow",
        inactiveTintColor: "white",
        labelStyle: {
          fontSize: 18,
        },
        style: { backgroundColor: "#101f39" },
      }}
    >
      <bottomTabNavigator.Screen name="TopNews" component={TopNewsScreen} />
      <bottomTabNavigator.Screen
        name="Categories"
        component={CategoriesScreen}
      />
      <bottomTabNavigator.Screen name="Search" component={SearchScreen} />
    </bottomTabNavigator.Navigator>
  );
};

export default function App() {
  return (
    <NewsProvider>
      <NavigationContainer
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      >
        <rootNavigator.Navigator
          screenOptions={{
            headerTitle: "HTech Test",
            headerTitleAlign: "center",
            headerTintColor:"white",
            headerStyle: {
              backgroundColor: "#101f39",
              borderBottomColor: "red",
              borderBottomWidth: 3,
            },
          }}
        >
          <rootNavigator.Screen
            name="Home"
            component={BottomTabNavigationComponent}
          />

          <rootNavigator.Screen
            name="Article"
            component={SingleArticleComponent}
          />

          <rootNavigator.Screen
            name="Category"
            component={CategoryScreen}
          />
        </rootNavigator.Navigator>
      </NavigationContainer>
    </NewsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
