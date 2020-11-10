import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ButtonGroup } from"react-native-elements";
import { Context as NewsContext } from "../context/NewsContext";

const HeaderComponent = ({ title,reRender }) => {
  
  const { state } = useContext(NewsContext);
  const [indexOfCountry, setCountryIndex] = useState(0);

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
     reRender();
   };

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
        {title}:{state.country === "US" ? " United States" : " Great Britain"}
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

