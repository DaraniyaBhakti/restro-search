import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons'

const SearchBar = (props) => {
    return(
        <View style = {styles.background}>
            <Feather name='search' style={styles.icon}/>
            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                value={props.term}
                onChangeText={props.onTermChange}
                onEndEditing={props.onTermSubmit}
                placeholder='Search' 
                 style={styles.input}/>
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        marginTop:10,
        backgroundColor:'#F0EEEE',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row',
        marginBottom:10
    },
    icon:{
        fontSize:20,
        marginHorizontal:15,
        alignSelf:'center'
    },
    input:{
        flex:1,
        fontSize:15
    }
})

export default SearchBar;