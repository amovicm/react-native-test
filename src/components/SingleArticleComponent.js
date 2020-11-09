import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Context as NewsContext } from "../context/NewsContext";

const SingleArticleComponent = ({ route,navigation }) => {
  const {title, img, content}=route.params;
  return (
    <ScrollView style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Image style={styles.imageStyle} source={{ uri: img }} />
        <Text style={styles.content}>{content}</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.details}>Back to list</Text>
        </TouchableOpacity>
    </ScrollView>
  );
};

export default SingleArticleComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
  },
  imageStyle: {
    height: 150,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 15,
  },
  content: {
    padding: 15,
  },
  details: { color: "blue", padding: 20, alignSelf: "flex-start" },
});
