import React, { useState } from "react";
import { View, Text, TextInput,Alert,Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

type LoginViewProps = {
  onSignupPress: () => void;
};

const LoginView = ({ onSignupPress }: LoginViewProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = () => {
    Alert.alert("Login Successful");
    
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
      
      <Text style={styles.loginTitle}>Login</Text>

      
      <Text style={styles.subtitle}>Please sign in to continue</Text>

      
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
          autoCapitalize="none"
          
        />
      </View>

     
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
        <Icon name="arrow-forward" size={20} color="white" />
      </TouchableOpacity>

      
      <TouchableOpacity onPress={onSignupPress}>
        <Text style={styles.accountAsk}>
          Don't have an account?{" "}
            <Text style={styles.linkText}>Sign up</Text>
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
  loginTitle: {
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
  loginButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf:"flex-end",
    backgroundColor: "#ffa500", 
    padding: 15,
    borderRadius: 25,
    marginTop: 20,
  },
  loginButtonText: {
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



export default LoginView;