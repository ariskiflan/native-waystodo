import React from "react";
import {
  Image,
  Pressable,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Logo from "../../assets/images/accept-request 1.png";
import WaysToDo from "../../assets/images/Ways ToDO.png";

const IndexPages = () => {
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
          marginTop: 100,
        }}
      >
        <Pressable
          onPressIn={() => console.log("Image pressedIn")}
          onLongPress={() => console.log("Image LongPress")}
          onPressOut={() => console.log("Image pressedOut")}
        >
          <Image source={Logo} style={{ width: 350, height: 350 }}></Image>
        </Pressable>

        <Pressable onPress={() => console.log("Image")}>
          <Image source={WaysToDo} style={{ width: 280, height: 50 }}></Image>
        </Pressable>
      </View>

      <Text
        style={{
          fontSize: 16,
          color: "black",
          textAlign: "center",
          marginTop: 50,
        }}
      >
        Write your activity and finish your activity. Fast, Simple and Easy to
        Use
      </Text>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
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

        <TouchableOpacity
          style={{
            backgroundColor: "#1E90FF",
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
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IndexPages;
