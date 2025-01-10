import { Link } from 'expo-router';
import React from 'react';
import { View,ScrollView, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>

    <ScrollView >
      <View style={styles.header}>
        <ImageBackground
          source={require("../../assets/images/bg.jpeg")}
          style={styles.backgroundImage}
        >
          <Text style={styles.userId}>User ID: 1 938 234 8345</Text>
          <Image
            style={styles.avatar}
            source={
              require("../../assets/images/john.png")
            }
          />
          <Text style={styles.name}>Kevin Ding</Text>
          <Text style={styles.email}>kevin_ding@pepperdine.edu</Text>
        </ImageBackground>
        {/* Overlay for blue shade */}
                      <View style={styles.overlay}></View>
      </View>

      <View style={styles.settings}>
        <Text style={styles.settingsTitle}>Settings</Text>
        {['Account', 'Notifications', 'FAQ', 'Terms & Conditions'].map((item, index) => (
          <TouchableOpacity key={index} style={styles.option}>
            <Text style={styles.optionText}>{item}</Text>
          </TouchableOpacity>
        ))}
        <Link href="/" style={styles.logoutButton}>
        <TouchableOpacity  >
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject, // Covers the entire ImageBackground
    backgroundColor: 'rgba(41, 65, 103, 0.7)', // Blue shade with 50% opacity
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  backgroundImage: {
      justifyContent: 'center',
    width: '100%', 
    height: '100%', 
    alignItems: 'center',
    resizeMode: 'cover',
  },
  
  header: {
    height:240,
    backgroundColor: '#2f3640',
    alignItems: 'center',
  },
  
  userId: {
    zIndex:50,
    color: '#fff',
    fontSize: 14,
    marginBottom: 10,
  },
  
  avatar: {
    zIndex:50,
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 10,
  },
  
  name: {
    zIndex:50,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  email: {
    zIndex:50,
    color: '#dcdde1',
    fontSize: 14,
  },
  
  settings: {
    backgroundColor: '#fff',
    marginTop: -10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    flex: 1,
  },
  
  settingsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  
  option: {
    backgroundColor: 'white',
    borderRadius: 20,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    boxShadow: "2px 4px 17px -6px rgba(0,0,0,0.75)",
  },
  
  optionText: {
    fontSize: 16,
    textAlign: "center",
    color: '#2f3640',
  },
  
  logoutButton: {
    backgroundColor: '#294167',
    borderRadius: 20,
    paddingVertical: 15,
    textAlign:"center",
    alignItems: 'center',
    marginTop: 20,
  },
  
  logoutText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
