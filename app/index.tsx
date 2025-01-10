import { Link } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function IndexPage() {
  return (
    <View style={styles.container}>
      {/* Question Icon */}
      <TouchableOpacity
        style={styles.questionIcon}
        onPress={() => alert("Help")}
      >
        <Text style={styles.questionText}>?</Text>
      </TouchableOpacity>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
      </View>

      {/* Title and Tagline */}
      <Text style={styles.title}>DING</Text>
      <Text style={styles.tagline}>CARPOOL WITH EASE SAVE TIME SAVE MONEY</Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        {/* Button for Create an account */}
        {/* <Link href="/register/page"> */}
          <Link href="/register/page" style={styles.button}>
            <Text style={styles.buttonText}>Create an account</Text>
          </Link>
        {/* </Link> */}

        <Text style={styles.orText}>or</Text>

        {/* Button for Login */}
        {/* <Link href="/signin/page"> */}
          <Link href="/signin/page" style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </Link>
        {/* </Link> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#294167", // Deep blue background
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  questionIcon: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  questionText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  logoContainer: {
    marginBottom: 20,
    height: 90,
    backgroundColor: "#ffffff",
  },
  logo: {
    marginTop: 3,
    width: 80,
    height: 80,
    resizeMode: "contain", // Ensures the image scales properly
  },
  title: {
    fontSize: 40,
    color: "#b0c4de",
    fontWeight: "bold",
    marginVertical: 10,
  },
  tagline: {
    color: "#d3d3d3",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 200,
  },
  buttonContainer: {
    backgroundColor: "white",
    width: "110%",
    marginBottom: 0,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    position: "absolute",
    bottom: 0,
  },
  button: {
    backgroundColor: "#39547f",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 10,
    width: "99%",
    maxWidth: 300,
    height:50,
    alignItems: "center",
    textAlign:"center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    color: "black",
    marginVertical: 10,
    fontSize: 16,
  },
  pagination: {
    flexDirection: "row",
    marginTop: 40,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#888",
    marginHorizontal: 5,
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    marginHorizontal: 5,
  },
});
