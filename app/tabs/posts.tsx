import { Link } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const carpoolers:any = [
//    {
//       id: '1',
//       name: 'Eva P.',
//       gender: 'Male',
//       time: 'Leave at 9:00AM',
//       date: '1/12',
//       route: 'Pepperdine > LAX',
//       flight: 'SW3997',
//       image: 'https://via.placeholder.com/100x100.png', // Replace with actual image URL
//     },
   
  ];
  export const addCarpooler = () => {
    
    carpoolers.push({
        id: Date.now() + Math.floor(Math.random() * 1000).toString(),
        name: "Kevin D.",
        gender: "Male",
        time: "Leave at 10:00AM",
        date: "1/16",
        route: "Pepperdine > BUR",
        flight: "DL4821",
        image: require('../../assets/images/john.png'),
        backgroundColor:"#888888",
      });
  };
  const CarpoolCard = ({ item }:any) => (
    <View style={styles.card}>
           <Image source={item.image} style={[styles.avatar,{backgroundColor:item.backgroundColor}]} />
           <View style={styles.info}>
             <Text style={styles.name}>{item.name}</Text>
             <Text style={styles.gender}>{item.gender}</Text>
             <Text style={styles.route}>{item.route}</Text>
           </View>
           <View style={styles.details}>
             <Text style={styles.departure}>{item.time}</Text>
             <Text style={styles.date}>{item.date}</Text>
             <Text style={styles.flight}>Flight #{item.flight}</Text>
           </View>
    </View>
  );

  function PostScreen() {
    return (
      <View style={{ flex: 1 }}>
        {/* Header Section */}
        <View style={styles.header}>
          <ImageBackground
            source={require("../../assets/images/bg.jpeg")}
            style={styles.backgroundImage}
          ></ImageBackground>
          {/* Overlay for blue shade */}
              <View style={styles.overlay}></View>
        </View>
  
        {/* List Section */}
        <View
          style={{
            marginTop: -20,
            zIndex: 10,
            flex: 1, // Ensure this container stretches to fill space
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            overflow: "hidden", // Enables the border radius
            backgroundColor: "#fff",
          }}
        >
            <Text style={{fontSize:20,fontWeight:700,textAlign:"center",margin:8}}>
                My posts
            </Text>
            {carpoolers.length === 0 ? (
          <View style={styles.noDataContainer}>
            <Text style={styles.noDataText}>You dont have any post
                </Text>
            <Text style={styles.noDataText}>
                Create one</Text>
          </View>
        ) : (
          <FlatList
            data={carpoolers}
            
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CarpoolCard item={item} />}
            contentContainerStyle={styles.container}
          />)}
        </View>
  
        {/* Floating Button */}
        <View style={styles.floatingButton}>
          <Link href="/addPost/page" style={styles.iconWrapper}>
            <Icon name="add" size={30} color="#fff" />
          </Link>
        </View>
      </View>
    );
  }
  

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject, // Covers the entire ImageBackground
    backgroundColor: 'rgba(41, 65, 103, 0.7)', // Blue shade with 50% opacity
  },
  avatar: {
    width: 80,
    height: 90,
    borderRadius: 10,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  departure: {
    fontSize: 12,
    color: '#888888',
  },
    noDataContainer: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
      },
      noDataText: {
        fontSize: 18,
        color: "gray",
        textAlign: "center",
        marginTop: 20,
      },
    backgroundImage: {
        width: '100%', 
        height: '100%', 
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover',
      },
      
      header: {
        // flex: 1,
        height:200,
        backgroundColor: '#2f3640',
        alignItems: 'center',
      },
  floatingButton: {
    position: "absolute",
    width: 55,
    height: 55,
    backgroundColor: "#294167",
    borderRadius: 30,
    zIndex:200,
    justifyContent: "center",
    alignItems: "center",
    bottom: 10,
    right: 20,
    elevation: 5, // For Android shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5, // For iOS shadow
  },
  iconWrapper: {
    verticalAlign:"middle",
    paddingHorizontal:10,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },
  container: {
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 2,
    marginBottom: 16,
    elevation: 3, // For shadow on Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  details: {
    flex: 1,
    marginLeft:5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  gender: {
    color: 'gray',
    marginBottom: 8,
  },
  time: {
    fontSize: 14,
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    marginBottom: 8,
  },
  route: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  flight: {
    fontSize: 14,
    color: 'gray',
  },
});

export default PostScreen;
