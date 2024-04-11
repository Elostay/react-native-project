import React, { useState } from "react";
import {
  Button,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const RegistrationScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Registration</Text>
      <TextInput
        style={styles.input}
        //   onChangeText={onChangeNumber}
        //   value={number}
        placeholder="Name"
        placeholderTextColor={"gray"}
      />
      <TextInput
        style={styles.input}
        //   onChangeText={onChangeNumber}
        //   value={number}
        placeholder="Email"
        placeholderTextColor={"gray"}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          secureTextEntry={showPassword}
          placeholder="Password"
          placeholderTextColor={"gray"}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          style={styles.showButton}
          onPress={() => setShowPassword((prev) => !prev)}
        >
          <Text style={styles.buttonText}>
            {showPassword ? "Hide" : "Show"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: screenHeight,
    top: screenHeight / 3,
    width: screenWidth,
    backgroundColor: "white",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Roboto-Bold",
    margin: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#E8E8E8",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    height: 45,
    margin: 8,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "#E8E8E8",
  },
  showButton: {
    position: "absolute",
    top: 10,
    right: 10,
    alignSelf: "flex-start",
  },
});

export default RegistrationScreen;
