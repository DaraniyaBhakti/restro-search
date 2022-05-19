import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetails from './ResultsDetail';
const ResultsList = ({navigation,results,title }) => {

    if(!results.length){
        return null;
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator = {false}
                data={results}
                keyExtractor={(results) => results.id}
                renderItem={( {item} ) => {
                    return (
                        <TouchableOpacity onPress={()=>navigation.navigate("Detail Screen", {id : item.id, name: item.name} )} >
                            <ResultsDetails result = {item}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom:20
    },
    title:{
        marginLeft:15,
        fontSize:18,
        fontWeight:'bold',
        marginBottom:5
    }
});

export default ResultsList;