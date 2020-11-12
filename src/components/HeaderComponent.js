import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ButtonGroup } from"react-native-elements";
import { Context as NewsContext } from "../context/NewsContext";

const HeaderComponent = ({ title,reRender }) => {
  
  const { state, switchCountry } = useContext(NewsContext);
  const [indexOfCountry, setCountryIndex] = useState(0);

   const changeCountry = () => {
     indexOfCountry==0?setCountryIndex(1):setCountryIndex(0);
     switchCountry(state.country);
     reRender();
   };

  return (
    <View style={styles.container}>
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
    </View>);
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container:{
    borderColor:"black",
    borderRadius:10,
    borderWidth:1,
    margin:2
  },

  buttonGroup: {
    margin: 5,
    width: "30%",
    alignSelf: "center",
  },
  selectedButton: {
    backgroundColor: "#101f39",
  },
  title: {
    textAlign:"center",
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

