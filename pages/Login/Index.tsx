import React from "react";
import {
  Image,
  Pressable,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Login from "../../assets/images/Login Icon.png";

const LoginPages = () => {
  return (
    <View>
      <StatusBar
        backgroundColor={"black"}
        barStyle={"light-content"}
      ></StatusBar>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <Pressable
          onPressIn={() => console.log("Image pressedIn")}
          onLongPress={() => console.log("Image LongPress")}
          onPressOut={() => console.log("Image pressedOut")}
        >
          <Image source={Login} style={{ width: 350, height: 350 }}></Image>
        </Pressable>
      </View>

      <Text
        style={{
          fontSize: 30,
          color: "black",
          fontWeight: "bold",
          marginTop: 30,
        }}
      >
        Login
      </Text>

      <View style={{ marginTop: 30, display: "flex", gap: 20 }}>
        <TextInput
          style={{
            height: 50,
            borderColor: "gray",
            backgroundColor: "#e6e6e6",
            borderWidth: 1,
            fontSize: 20,
            padding: 10,
            borderRadius: 10,
          }}
          placeholder="Email"
        />

        <TextInput
          style={{
            height: 50,
            borderColor: "gray",
            backgroundColor: "#e6e6e6",
            borderWidth: 1,
            fontSize: 20,
            padding: 10,
            borderRadius: 10,
          }}
          placeholder="Password"
        />
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
          gap: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => console.log("Login")}
          style={{
            backgroundColor: "#ff5555",
            padding: 10,
            borderRadius: 10,
            width: "100%",
            height: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontSize: 18,
          color: "black",
          marginTop: 10,
          textAlign: "center",
        }}
      >
        New users? <Text style={{ color: "#ff5555" }}>Register</Text>
      </Text>
    </View>
  );
};

export default LoginPages;
