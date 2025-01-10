import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { addCarpooler } from "../tabs/posts";
import { moveToReservations } from "../tabs/page";

function PostScreen() {
  const navigation = useNavigation();
  return (
    
      <ScrollView
        style={{ flex: 1, }}
      >
        <View style={styles.genderSelectionContainer}>
          <Text style={styles.genderTitle}>Create a Post</Text>

          {/* flight Input */}
          <View style={styles.inputContainer}>
            <Image
              source={require("../../assets/images/email.png")}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Flight Number"
              placeholderTextColor="#a9a9a9"
            />
          </View>
          <Text style={[styles.orText, { bottom: 7 }]}>OR</Text>
          {/* Date Input */}
          <View style={styles.inputContainer}>
            <Image
              source={require("../../assets/images/lock.png")}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Date"
              placeholderTextColor="#a9a9a9"
              secureTextEntry
            />
          </View>

          {/* Time Input */}
          <View style={styles.inputContainer}>
            <Image
              source={require("../../assets/images/lock.png")}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Time"
              placeholderTextColor="#a9a9a9"
              secureTextEntry
            />
          </View>
          {/* From Input */}
          <View style={[styles.inputContainer, { marginTop: 4 }]}>
            <Image
              source={require("../../assets/images/lock.png")}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="From"
              placeholderTextColor="#a9a9a9"
              secureTextEntry
            />
          </View>
          {/* To Input */}
          <View style={styles.inputContainer}>
            <Image
              source={require("../../assets/images/lock.png")}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="To"
              placeholderTextColor="#a9a9a9"
              secureTextEntry
            />
          </View>
          {/* Message */}
          <View style={styles.inputMessageContainer}>
            <Image
              source={require("../../assets/images/lock.png")}
              style={[styles.inputIcon, { marginTop: -55 }]}
            />
            <TextInput
              style={[styles.input, { height: 100, textAlignVertical: "top" }]}
              placeholder="Message"
              multiline={true}
              numberOfLines={3}
              placeholderTextColor="#a9a9a9"
              secureTextEntry
            />
          </View>
          
          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => {moveToReservations();navigation.goBack();}}
          >
            <Text style={styles.continueButtonText}>Create Post</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
  );
}


const styles = StyleSheet.create({
    floatingButton: {
        position: "absolute",
        width: 55,
        height: 55,
        backgroundColor: "#294167",
        borderRadius: 30,
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
  inputMessageContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 100,
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
    // backgroundColor: "#ffffff",
    width: "100%",
    // borderRadius: 25,
    padding: 20,
    alignItems: "center",
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
    width: "100%",
    alignItems: "center",
    marginVertical: 10,
  },
  continueButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    color: "black",
    marginVertical: 10,
    fontSize: 16,
  },
});
export default PostScreen;
