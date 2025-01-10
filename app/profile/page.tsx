import { Link, useNavigation } from "expo-router";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { moveTofinRes } from "../tabs/page";

let carpoolers = [
  {
    id: "3",
    name: "Leon M.",
    gender: "Male",
    route: "Pepperdine > LAX",
    departureDate: "1/16",
    flight: "SW1898",
    image: require("../../assets/images/leon1.png"), // Replace with actual image URL
    backgroundColor: "#FFBB09",
    leavesAt: "6:00PM",
    proposedTime: "5:45PM",
    message: "Hey everyone, I’m open to all riders!",
  },
];

const App = () => {
  const carpooler = carpoolers[0];
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>

      <Text style={styles.title}>You've Found a Match!</Text>
      <View style={styles.card}>
        <Image source={carpooler.image} style={styles.avatar} />
        <Text style={styles.name}>{carpooler.name}</Text>
        <Text style={styles.gender}>{carpooler.gender}</Text>
        <View style={styles.bgBlue}>
        <Text style={styles.route}>{carpooler.route}</Text>
        <Text style={styles.flight}>Flight # {carpooler.flight}</Text>
        </View>
        <Text style={styles.time}>
          Leaves at {carpooler.leavesAt} on {carpooler.departureDate}
        </Text>
        <Text style={styles.proposedTime}>
          Proposed Time: {carpooler.proposedTime}
        </Text>
        <Text style={styles.message}>{carpooler.message}</Text>
      </View>
      <View
      style={{
        marginTop:50,
        flex: 1,
        flexDirection: "row",
        gap:40,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <TouchableOpacity
      onPress={()=>{moveTofinRes();navigation.goBack();}}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: "#4CAF50", // Green color
          justifyContent: "center",
          alignItems: "center",
          elevation: 3, // Shadow for Android
          shadowColor: "#000", // Shadow for iOS
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
          Accept
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: "#F44336", // Red color
          justifyContent: "center",
          alignItems: "center",
          elevation: 3, // Shadow for Android
          shadowColor: "#000", // Shadow for iOS
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
          Reject
        </Text>
      </TouchableOpacity>
    </View>
    </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  bgBlue:{
    backgroundColor:"#294167",
    color:"#ffffff",
    borderRadius:20, 
    width:"80%",
    height:57,
    textAlign: "center" ,
    marginBottom:10
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    alignItems: "center",
    borderRadius: 10,
    padding: 20,
    width: "100%",
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 4,
    // elevation: 3,
  },
  avatar: {
    width: 220,
    backgroundColor: "#FFBB09",
    height: 220,
    borderRadius: 120,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  gender: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  route: {
    color:"white",
    textAlign: "center" ,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  flight: {
    textAlign: "center" ,
    color:"white",
    fontSize: 14,
    marginBottom: 5,
  },
  time: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  proposedTime: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  message: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 55,
    height: 55,
    backgroundColor: "#294167",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
});

export default App;
