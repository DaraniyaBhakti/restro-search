import React, {useState, useEffect} from 'react';
import {View,StyleSheet,Text, Image, FlatList} from 'react-native';
import yelp from '../api/yelp';


const ResultsShowScreen = ( {route, navigation}) => {
    const [result, setResult] = useState(null);
    const id = route.params.id;
    
    const getResult = async id =>{
        const response = await yelp.get(`/${id}`)
        setResult(response.data);
    }
    useEffect(()=>{
        getResult(id);
    },[])
    if(!result){
        return null
    }
    
    return(
        <View>
            <FlatList 
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={ ( {item} ) => {
                    return <Image source={{uri: item}} style={styles.image}/>
                }}
            />        
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        margin:10,
        width:250,
        height:200
    }
})

export default ResultsShowScreen;