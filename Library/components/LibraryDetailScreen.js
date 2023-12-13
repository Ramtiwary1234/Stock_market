import React,{useState} from 'react'
import { View,Text,Image,StyleSheet, Button } from 'react-native'

function LibraryDetailScreen({route}) {

    const [isfavorite,setisfavorite] = useState(false)
    const LocalLibrary = route.params.Library
  return (
    <View style={styles.container}>
        <Image source={{uri: Library.image}} style={styles.LibraryImage}/>
        <Text style={styles.LibraryName}>{Library.name}</Text>
        <Text style={styles.description}>Discription{Library.description}</Text>
        <Text style={styles.LibraryAddress}>Address: {Library.address}</Text>
        <Text style={styles.LibraryHours}>Hours :{Library.operatingHours}</Text>
        <Text style={styles.LibraryRating}>Rating :{Library.rating}</Text>
        <Button 
        
            title={isfavorite? 'Remove from Favorites': 'Add to Favorites'}

            onPress={()=>setisfavorite(!isfavorite)}
        
        />


    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'Green',
        padding:20
    },
    LibraryImage:{
        width:'100%',
        height:200,
        marginBottom:15,
        borderRadius:10
    },
    LibraryName:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:10
    },
    LibraryAddress:{
        fontSize:18,
        marginBottom:10
    },
    LibraryHours:{
        fontSize:16,
        marginBottom:10
    },

    LibraryRating:{
        fontSize:16,
        marginBottom:10
    }


})

export default LibraryDetailScreen