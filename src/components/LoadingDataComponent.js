import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LoadingDataComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Loading data!
      </Text>
    </View>
  );
};

export default LoadingDataComponent;

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  title:{
    fontWeight:"bold",
    fontSize:28
  }
});
