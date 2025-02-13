import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity,Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

type SignupViewProps = {
  onLoginPress: () => void;
};

const SignupView = ({ onLoginPress }: SignupViewProps) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    console.log("Signup pressed");
    
  };

  return (
    <View style={styles.container}>

        <Image 
          source={require('../(tabs)/assests/yellow.png')}
            style={{
              height: 200,
              width: 200,
              marginTop: 10,
              marginRight: 20,
              alignSelf: 'flex-end'                 
}}
          />
      
      
      <TouchableOpacity onPress={onLoginPress} style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="#007BFF" />
      </TouchableOpacity>

      
      <Text style={styles.signupTitle}>Create Account</Text>

      

      <View style={styles.inputContainer}>
        <Icon name="person" size={20} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="FULL NAME"
          value={fullName}
          onChangeText={setFullName}
          autoCapitalize="words"
        />
      </View>

      
      <View style={styles.inputContainer}>
        <Icon name="mail" size={20} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="EMAIL"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="PASSWORD"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />
      </View>

      
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="CONFIRM PASSWORD"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          autoCapitalize="none"
        />
      </View>

      
      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>SIGN UP</Text>
        <Icon name="arrow-forward" size={20} color="white" />
      </TouchableOpacity>

      
      <TouchableOpacity onPress={onLoginPress}>
        <Text style={styles.accountAsk}>Already have an account?{" "}
          <Text style={styles.linkText}> Sign in</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  signupTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "left",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: "left",
    color: "#666",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "#333",
  },
  signupButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "flex-end",
    backgroundColor: "#ffa500", 
    padding: 15,
    borderRadius: 25,
    marginTop: 20,
  },
  signupButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  accountAsk: {
    textAlign: "center",
    marginTop: 100,
    color: "#666",
  },
  linkText: {
    color: "#ffa500",
    textAlign: "center",
    marginTop: 100,
  },
});

export default SignupView;