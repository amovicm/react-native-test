import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { navigate } from "../navigationRef";

const NewsItemComponent = ({ title, imgSrc, desc, content }) => {

  return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {imgSrc?<Image style={styles.imageStyle} source={{ uri: imgSrc }} />:<Text style={styles.noImageText}>No image</Text>}
        <Text style={styles.description}>{desc}</Text>
        <TouchableOpacity
          onPress={() =>
            navigate("Article", { title: title, img: imgSrc, content: content })
          }
        >
          <Text style={styles.details}>Read more...</Text>
        </TouchableOpacity>
      </View>
  );
};

export default NewsItemComponent;


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15
  },
  imageStyle: {
    height: 250,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 5,
  },
  description: {
    padding: 15,
  },
  details: { color: "blue", padding: 20, alignSelf:"flex-end" },
  noImageText:{
    fontSize:25,
    fontWeight:"bold",
    textAlign:"center"
  }
});