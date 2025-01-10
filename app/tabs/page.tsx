import { Link, router, useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import Icon from "react-native-vector-icons/Ionicons";
import { View, Text,ScrollView, FlatList, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useSearchParams } from 'expo-router/build/hooks';
let carpoolers=[
  {
    id: "1",
    name: "Eva P.",
    gender: "Male",
    route: "Pepperdine > LAX",
    departureDate: "1/12",
    flight: "SW3997",
    image: require("../../assets/images/paige.png"), // Replace with actual image URL
    backgroundColor: "#8AB4F8",
    leavesAt: "9:00AM",
  },
  {
    id: "2",
    name: "Paige C.",
    gender: "Female",
    route: "Pepperdine > SNA",
    departureDate: "1/13",
    flight: "UA2863",
    image: require("../../assets/images/eva.png"), // Replace with actual image URL
    backgroundColor: "#C0C0C0",
    leavesAt: "5:00AM",
  },
  {
    id: "3",
    name: "Leon M.",
    gender: "Male",
    route: "Pepperdine > LAX",
    departureDate: "1/16",
    flight: "SW1898",
    image: require("../../assets/images/leon.png"), // Replace with actual image URL
    backgroundColor: "#FFBB09",
    leavesAt: "5:45AM",
  },
];
let res: any = [];
let finRes: any = [];
export const moveToReservations = () => {
  if(carpoolers.length!=0){
    const selectedCarpooler = carpoolers[carpoolers.length-1];
    carpoolers.pop()
    res.push(selectedCarpooler)
    setTimeout(()=>{
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'New Matches!',
        textBody: 'Check your home page for compatible riders for your upcoming trips',
      })
    },800)
  }
  
};
export const moveTofinRes = () => {
  if(res.length!=0){
    const seleres = res[res.length-1];
    res.pop()
    finRes.push(seleres)
    setTimeout(()=>{
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'New Reservation!',
        textBody: 'A match has accepted you reservation. Visit the homepage to view it.',
      })
    },800)
  }
  
};
export const onCancel = () => {
  if(finRes.length!=0){
    const seleres = finRes[finRes.length-1];
    finRes.pop()
    carpoolers.push(seleres)
    setTimeout(()=>{
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'No Reservation!',
        textBody: 'Your reservation has been cancelled. You can Book a new one.',
      })
    },800)
  }
  
};
const App = () => {
const params=useSearchParams()
const toastMessage = params.get('a');
useEffect(() => {
  if (toastMessage=="21") {
  router.setParams({"a":89})

    Dialog.show({
      type: ALERT_TYPE.SUCCESS,
      title: 'Welcome To Ding!',
      textBody: "Create Posts so that you can match with other carpoolers",
    });
  }
}, [toastMessage]);
  const renderCarpooler = ({ item }:any) => (
    <View style={styles.carpoolerCard}>
      <Image
        source={item.image}
        style={[styles.avatar, { backgroundColor: item.backgroundColor }]}
      />
      <View style={styles.info}>
        <Text style={styles.name2}>{item.name}</Text>
        <Text style={styles.gender2}>{item.gender}</Text>
        <Text style={styles.route2}>{item.route}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.departure}>Leaves at {item.leavesAt}</Text>
        <Text style={styles.date}>{item.departureDate}</Text>
        <Text style={styles.flight}>Flight #{item.flight}</Text>
      </View>
    </View>
  );
  const renderRes = ({ item }: any) => (
    <View  style={styles.resCard}>
    <Link href={"/profile/page"} >
      <Image
        source={item.image}
        style={[styles.avatar, { backgroundColor: item.backgroundColor }]}
      />
    </Link>

      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.gender}>{item.gender}</Text>
        <Text style={styles.route}>{item.route}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.departure}>Leaves at {item.leavesAt}</Text>
        <Text style={styles.date}>{item.departureDate}</Text>
        <Text style={styles.flight}>Flight #{item.flight}</Text>
      </View>
      </View>
  );
  const renderFinalRes = ({ item }: any) => (
    <View  style={styles.resCard2}>
    <Link href={"/profile2/page"} >
      <Image
        source={item.image}
        style={[styles.avatar, { backgroundColor: item.backgroundColor }]}
      />
    </Link>

      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.gender}>{item.gender}</Text>
        <Text style={styles.route}>{item.route}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.departure}>Leaves at {item.leavesAt}</Text>
        <Text style={styles.date}>{item.departureDate}</Text>
        <Text style={styles.flight}>Flight #{item.flight}</Text>
      </View>
      </View>
  );
 
  return (
        <AlertNotificationRoot>

    <View style={styles.container}>
      <View style={styles.header2}>
        <ImageBackground
          source={require("../../assets/images/bg.jpeg")}
          style={styles.backgroundImage}
        >
          {/* Overlay for blue shade */}
          <View style={styles.overlay}></View>
        </ImageBackground>
      </View>

      <View style={styles.nearbySection}>
      <Text style={styles.title}>My Reservations</Text>
        {finRes.length > 0 ? (
          <>
          
          <FlatList
            data={finRes}
            renderItem={renderFinalRes}
            // @ts-ignore
            keyExtractor={(item) => item?.id || "8"}
            showsVerticalScrollIndicator={false}
            />
            </>
        ) : (
          <Text style={styles.subtitle}>You do not have any reservations</Text>
          
        )}
        {res.length > 0 ? (
          <>
        <Text style={styles.title}>My Matches</Text>
          <FlatList
            data={res}
            renderItem={renderRes}
            // @ts-ignore
            keyExtractor={(item) => item?.id || "8"}
            showsVerticalScrollIndicator={false}
          />
            </>

        ) : (
          <Text style={styles.subtitle}>You do not have any matches</Text>
        )}
        <Text style={styles.sectionTitle}>Nearby Carpoolers</Text>
        {carpoolers.length == 0 ? (
          <Text style={styles.subtitle}>You do not have any Crapoolers</Text>
        ) : (
          <FlatList
            data={carpoolers}
            renderItem={renderCarpooler}
            keyExtractor={(item) => item?.id || "8"}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
      <Link style={styles.floatingButton} href="/addMatches/page">
        {/* <TouchableOpacity
            // style={styles.floatingButton}
                  // onPress={() => {moveToReservations();router.push("../addMatches", { relativeToDirectory: true });}}
      
              > */}
        <Icon name="add" size={30} color="#fff" />
        {/* </TouchableOpacity> */}
      </Link>
    </View>
    </AlertNotificationRoot>

  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject, // Covers the entire ImageBackground
    backgroundColor: "rgba(41, 65, 103, 0.7)", // Blue shade with 50% opacity
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },
  header2: {
    flex: 0.6,
    backgroundColor: "#2f3640",
    alignItems: "center",
  },
  floatingButton: {
    position: "absolute",
    width: 55,
    display: "flex",
    margin: "auto",
    height: 55,
    backgroundColor: "#294167",
    borderRadius: 30,
    verticalAlign: "middle",
    paddingHorizontal: 10,
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
  header: {
    alignItems: "center",
    borderRadius: 30,
    padding: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    backgroundColor: "#FFFFFF",
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#888888",
    marginTop: 5,
    textAlign: "center",
  },
  nearbySection: {
    flex: 1,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF",
    // borderTopRightRadius: 20,
    paddingTop: 20,
    marginTop: -30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "400",
    marginBottom: 10,
  },
  resCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#294167",
    padding: 2,
    color: "white",
    paddingRight: 10,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  resCard2: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
    padding: 2,
    color: "white",
    paddingRight: 10,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  carpoolerCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 2,
    paddingRight: 10,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
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
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  name2: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  gender2: {
    fontSize: 12,
    color: "white",
  },
  route2: {
    fontSize: 14,
    marginTop: 5,
    color: "white",
  },
  gender: {
    fontSize: 12,
    color: "#888888",
  },
  route: {
    fontSize: 14,
    color: "#555555",
    marginTop: 5,
  },
  details: {
    alignItems: "flex-end",
  },
  departure: {
    fontSize: 12,
    color: "#888888",
  },
  date: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
  flight: {
    fontSize: 12,
    color: "#888888",
    marginTop: 5,
  },
});

export default App;
