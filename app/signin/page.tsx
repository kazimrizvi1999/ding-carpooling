import { Link } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

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
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
        />
      </View>

      {/* Title and Tagline */}
      <Text style={styles.title}>DING</Text>
      <Text style={styles.tagline}>CARPOOL WITH EASE SAVE TIME SAVE MONEY</Text>
      {/* Sign In Section */}
      <View style={styles.signInContainer}>
        <Text style={styles.signInTitle}>Sign In</Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Image
            source={require("../../assets/images/email.png")}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#a9a9a9"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Image
            source={require("../../assets/images/lock.png")}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#a9a9a9"
            secureTextEntry
          />
        </View>

        {/* Sign In Button */}
        <Link href="/tabs/page" style={styles.signInButton}>
        <TouchableOpacity >
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
        </Link>

        {/* Create Account Link */}
        <Text style={styles.createAccountText}>
          Don't have an account?{" "}
           <Link
           style={styles.createAccountLink}
                       href="/register/page"
          >
            Create an account
          </Link>
        </Text>

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
    marginBottom: 30,
  },
  signInContainer: {
    backgroundColor: "#ffffff",
    width: "110%",
    borderRadius: 25,
    padding: 20,
    alignItems: "center",
    marginTop: 10,
  },
  signInTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "auto",
    height: 45,
    borderWidth: 1,
    borderColor: "#f9f9f9",
    borderRadius: 25,
    paddingHorizontal: 10,
    fontSize: 16,
    marginLeft: -20,
    backgroundColor: "#f9f9f9",
  },
  signInButton: {
    backgroundColor: "#39547f",
    paddingVertical: 10,
    textAlign:"center",
    paddingHorizontal: 20,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
    marginVertical: 10,
  },
  signInButtonText: {
    color: "#ffffff",
    fontSize: 16,
    textAlign:"center",
    fontWeight: "bold",
  },
  createAccountText: {
    color: "#000000",
    fontSize: 14,
    marginTop: 10,
  },
  createAccountLink: {
    color: "#39547f",
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    width: "110%",
    height: 50,
    borderWidth: 1,
    borderColor: "#d3d3d3",
    borderRadius: 25,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: "#a9a9a9", // Change color of the icon if needed
  },
});
