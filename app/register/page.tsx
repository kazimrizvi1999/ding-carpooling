import { Link } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

export default function IndexPage() {
  const [showGenderSelection, setShowGenderSelection] = useState(false);
  const [showUploadPhoto, setShowUploadPhoto] = useState(false);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

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

      {showUploadPhoto ? (
        <View style={styles.genderSelectionContainer}>
          <Text style={styles.genderTitle}>Choose Your Photo</Text>
          <View style={styles.roundedPerson}>
            <Image
              source={require("../../assets/images/person.png")}
              style={styles.personLogo}
            />
          </View>
          <TouchableOpacity
            style={styles.chooseButton}
            onPress={() => alert("Photo Uploaded!")}
          >
            <Text style={styles.chooseFileButtonText}>Choose File</Text>
          </TouchableOpacity>

          <Text style={styles.continueText}>
            Don't worry, you'll be able to change this later
          </Text>

          <Link
          href={{
            pathname: '/tabs/page',
            params: { a:"21" },
          }}
            style={styles.continueButton}
          >
            <Text style={styles.continueButtonText}>Upload</Text>
          </Link>

          <Text style={styles.createAccountText}>
            Already have an account?{" "}
            <Link
            href="/signin/page"
              style={styles.createAccountLink}
            >
              Sign in
            </Link>
          </Text>
        </View>
      ) : showGenderSelection ? (
        <View style={styles.genderSelectionContainer}>
          <Text style={styles.genderTitle}>Choose Your Gender</Text>
          {["Male", "Female", "Other"].map((gender) => (
            <TouchableOpacity
              key={gender}
              style={[
                styles.genderButton,
                selectedGender === gender && styles.genderButtonActive,
              ]}
              onPress={() => setSelectedGender(gender)}
            >
              <Text
                style={[
                  styles.genderButtonText,
                  selectedGender === gender && styles.genderButtonTextActive,
                ]}
              >
                {gender}
              </Text>
            </TouchableOpacity>
          ))}

          <Text style={styles.continueText}>
            Don't worry, you'll be able to change this later
          </Text>

          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => setShowUploadPhoto(true)}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>

          <Text style={styles.createAccountText}>
            Already have an account?{" "}
            <Link
            href="/signin/page"
              style={styles.createAccountLink}
            >
              Sign in
            </Link>
          </Text>
        </View>
      ) : (
        <View style={styles.signInContainer}>
          <Text style={styles.signInTitle}>Register</Text>

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <Image
              source={require("../../assets/images/email.png")}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="kevin_ding@pepperdine.edu"
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

          {/* Confirm Password Input */}
          <View style={styles.inputContainer}>
            <Image
              source={require("../../assets/images/lock.png")}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#a9a9a9"
              secureTextEntry
            />
          </View>

          <Text style={styles.createAccountText}>
            I accept the{" "}
            <Text style={styles.boldText}>Terms and Conditions</Text>
          </Text>

          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => setShowGenderSelection(true)}
          >
            <Text style={styles.signInButtonText}>Register</Text>
          </TouchableOpacity>

          <Text style={styles.createAccountText}>
            Already have an account?{" "}
            <Link
            href="/signin/page"
              style={styles.createAccountLink}
            >
              Sign in
            </Link>
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#294167",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  signInContainer: {
    backgroundColor: "#ffffff",
    width: "110%",
    borderRadius: 25,
    padding: 20,
    alignItems: "center",
    position: "absolute",
    bottom: -5,
  },
  signInTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#d3d3d3",
    borderRadius: 25,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: "#a9a9a9",
  },
  signInButton: {
    backgroundColor: "#39547f",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
    marginVertical: 10,
  },
  signInButtonText: {
    color: "#ffffff",
    fontSize: 16,
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
  genderSelectionContainer: {
    backgroundColor: "#ffffff",
    width: "110%",
    borderRadius: 25,
    padding: 20,
    alignItems: "center",
    position: "absolute",
    bottom: -5,
  },
  genderTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  genderButton: {
    backgroundColor: "#f9f9f9",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 10,
  },
  genderButtonActive: {
    backgroundColor: "#39547f",
  },
  genderButtonText: {
    fontSize: 16,
    color: "#000000",
  },
  genderButtonTextActive: {
    color: "#ffffff",
  },
  continueText: {
    color: "#000000",
    fontSize: 14,
    marginTop: 10,
  },
  continueButton: {
    backgroundColor: "#39547f",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    textAlign:"center",
    width: "100%",
    alignItems: "center",
    marginVertical: 10,
  },
  continueButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  boldText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
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
  logo: {
    marginTop: 3,
    width: 80,
    height: 80,
    resizeMode: "contain", // Ensures the image scales properly
  },
  title: {
    marginBottom: -3,
    fontSize: 40,
    color: "#b0c4de",
    fontWeight: "bold",
    marginVertical: 10,
  },
  tagline: {
    color: "#d3d3d3",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 370,
  },
  logoContainer: {
    marginBottom: 4,
    height: 90,
    backgroundColor: "#ffffff",
  },
  chooseFileButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  chooseButton: {
    backgroundColor: "white",
    paddingVertical: 10,
    shadowColor: "black",
    shadowOpacity: 2,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 1 },
    elevation: 2,
    marginBottom: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
    marginVertical: 10,
  },
  roundedPerson: {
    width: 100,
    height: 100,
    alignItems: "center",
    borderRadius: 100 / 2,
    overflow: "hidden",
    borderWidth: 5,
    borderColor: "#DAD8C9",
    backgroundColor: "#DAD8C9",
  },
  personLogo: {
    bottom: 10,
    width: 130,
    height: 130,
    resizeMode: "contain",
  },
});
