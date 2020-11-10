import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AntDesign} from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler';

const SearchBar=(props)=>{
 return(   
    <View style={styles.backgroundSearchBar}>
         <AntDesign style={styles.iconStyle} name='search1' size={30} />
         <TextInput style={styles.inputStyle} 
                    placeholder='Search'
                    value={props.term} 
                    onChangeText={props.onTermChange} 
                    autoCapitalize="none" 
                    autoCorrect={false}/>
    </View>);
};


const styles = StyleSheet.create({
    backgroundSearchBar: {
        marginVertical:8,
        marginBottom:10,
        height:50,
        paddingStart:10,
        backgroundColor: '#F0EEEE',
        marginHorizontal:15,
        borderRadius:15,
        borderColor:'black',
        borderWidth:2,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    inputStyle:{
        marginStart:10,
        flex:1,
        fontSize:18
    },
    iconStyle:{
        fontSize:35,
        alignSelf:"center"
    }
  });


  export default SearchBar;