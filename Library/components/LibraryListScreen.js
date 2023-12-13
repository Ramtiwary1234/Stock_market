import React,{useState,useEffect} from 'react'
import { View, Text, FlatList, TouchableOpacity,Image, StyleSheet,TextInput } from 'react-native'


const LibraryData = [
    {
      id: '1',
      name: 'Library One',
      description: 'Its a best place for students to study its like a school library which has all the student book.',
      rating: 4.5,
      distance: 1,
      image: 'https://i2-prod.mirror.co.uk/incoming/article13150515.ece/ALTERNATES/s1227b/0_PAY-Clock-over-door-to-Honby-library-Liverpool-central-library-Picton-reading-rooms.jpg',
      address: 'Igm, Library Building Univercity Of Hyderabd, Gachibowli, Hyderabad, Telangana 500046',
      operatingHours: 'Mon-Fri: 7am - 7pm, Sat-Sun: 8am - 6pm',
    },
    {
      id: '2',
      name: 'Library Two',
      description: 'Its a best place for everyone to study it also has newspapers.',
      rating: 3.9,
      distance: 5,
      image: 'https://i2-prod.mirror.co.uk/incoming/article13150515.ece/ALTERNATES/s1227b/0_PAY-Clock-over-door-to-Honby-library-Liverpool-central-library-Picton-reading-rooms.jpg',
      address: 'Chanda Naik Nagar, Madhapur, Telangana',
      operatingHours: 'Mon-Fri: 7am - 7pm',
    },

    // ... add more mock data here
    
  ];




function LibraryListScreen({ navigation }) {

    const [searchTerm,setsearchterm] = useState("")
    const [sortType,setsortType] = useState("rating")
    const [sortedLibraryData,setsortedLibraryData] = useState(LibraryData)



    useEffect(()=>{

        const filtered = LibraryData.filter(Library=> Library.name.toLowerCase().includes(searchTerm.toLowerCase()))

        const sorted = [...filtered].sort((a,b)=>{

            if (sortType === 'rating'){
                return b.rating - a.rating

            } else {
                return a.distance - b.distance
            }

        })
        setsortedLibraryData(sorted)


    },[searchTerm,sortType])



  return (
    <View style={styles.container}>

        <View style={styles.searchBar}>
            <TextInput
                onChangeText={setsearchterm}
                value={searchTerm}
                placeholder='Search Library...'
                style={styles.searchInput}
            />
        </View>

        <View  style={styles.sortOptions}>

            <TouchableOpacity onPress={()=>setsortType('rating')}>
                <Text  style={styles.sortText}>Sort by Rating</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setsortType('distance')}>
                <Text  style={styles.sortText}>Sort by Distance</Text>
            </TouchableOpacity>


        </View>


        <FlatList
        
        data={sortedLibraryData}
        renderItem={({item}) => (
            <TouchableOpacity 
            onPress={()=>navigation.navigate('Details',{Library:item})}
            style={styles.listItem}
            >

                <Image source={{uri: item.image}} style={styles.LibraryImage}/>
                <Text style={styles.LibraryName}>{item.name}</Text>
                <Text>{item.description}</Text>
                

            </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        
        
        />



    </View>
  )
}



const styles = StyleSheet.create({

    container: {
        flex:1,
        padding:10

    },
    listItem: {
        padding:10,
        borderBottomColor:'#ccc',
        borderBottomWidth:1

    },
    LibraryImage:{
        width:200,
        height:200,
        borderRadius:50,
        marginBottom:10
    },
    LibraryName:{
        fontSize:18,
        fontWeight:'bold'
    },

    searchBar: {
        margin:10
    },
    searchInput:{
        borderColor: '#ccc',
        padding: 10,
        borderWidth:1,
        borderRadius:5
    },

    sortOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:20
    },

    sortText: {
        fontSize:0,
        color: "none"
    },

})

export default LibraryListScreen