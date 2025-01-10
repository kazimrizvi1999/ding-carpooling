import { useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { onCancel } from "../tabs/page";
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';

const carpooler = {
  id: "3",
  name: "Leon M.",
  gender: "Male",
  route: "Pepperdine > LAX",
  departureDate: "1/16",
  flight: "SW1898",
  image: require("../../assets/images/leon1.png"), // Replace with the actual image path
  message: "Hey everyone, I’m open to all riders!",
  phoneNumber: "(702) 666-3113",
};

const App = () => {
  useEffect(() => {
      Dialog.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Next Steps',
        textBody: `• Contact your carpool buddy
        • Confirm your pickup time and location
        • Arrange payment between the two of you
        • Arrange a ride (Uber, Lyft, etc.)
        
        Your safety is NOT our responsibility. You are responsible for determining whether or not your carpool buddy is compatible with you.`,
      });
  }, []);
  const navigation = useNavigation();
  return(
    
    <View style={styles.container}>
    <AlertNotificationRoot>
    <Text style={styles.title}>Reservation</Text>
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={carpooler.image} style={styles.avatar} />
      </View>
      <Text style={styles.name}>{carpooler.name}</Text>
      <Text style={styles.gender}>{carpooler.gender}</Text>
      <Text style={styles.route}>{carpooler.route}</Text>
      <Text style={styles.time}>
        Leave at 5:45PM on {carpooler.departureDate}
      </Text>
      <Text style={styles.flight}>Flight # {carpooler.flight}</Text>
      <Text style={styles.message}>{carpooler.message}</Text>
    </View>
    <TouchableOpacity style={styles.textButton}>
      <Text style={styles.textButtonLabel}>Text {carpooler.phoneNumber}</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={()=>{
      onCancel();navigation.goBack();
    }}
    
    style={[styles.textButton,{backgroundColor:"red",marginTop:22,width:"80%"}]}>
      <Text style={[styles.textButtonLabel,{fontSize:22}]}>Cancel Reservation</Text>
    </TouchableOpacity>
   
    </AlertNotificationRoot>
  </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    alignItems: "center",
    marginBottom: 30,
  },
  imageContainer: {
    backgroundColor: "#FFBB09",
    borderRadius: 120,
    padding: 10,
    marginBottom: 15,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
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
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  time: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  flight: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  message: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
  },
  textButton: {
    padding: 15,
    borderRadius: 30,
    backgroundColor: "#294167",
    alignItems: "center",
  },
  textButtonLabel: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default App;