import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ButtonGroup } from"react-native-elements";

const HeaderComponent = ({ title, indexOfCountry, changeCountry, countryName }) => {
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
        {title}:{countryName == " US" ? "United States" : " Great Britain"}
      </Text>
    </>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  buttonGroup: {
    margin: 5,
    width: "30%",
    alignSelf: "center",
  },
  selectedButton: {
    backgroundColor: "#101f39",
  },
  title: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

