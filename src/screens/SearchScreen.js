import React,{useState , useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = ({navigation}) => {
    const [term,setTerm] = useState('');
    const [searchApi, result, errorMessage] = useResults();
    
    const filterResultsByPrice = (price) => {
        return result.filter(result =>{
            return result.price === price;
        });
    };


    return(

        <View style={styles.container}>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={()=>searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
           <ScrollView>
                <ResultsList results={filterResultsByPrice('$')}
                    navigation={navigation}
                    title="Cost Effective"/>
                <ResultsList results={filterResultsByPrice('$$')}
                    navigation={navigation}
                    title="Big Pricier"/>
                <ResultsList results={filterResultsByPrice('$$$')} 
                    navigation={navigation}
                    title ="Big Spender"/>
                
            </ScrollView>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        
    }
})
export default SearchScreen;