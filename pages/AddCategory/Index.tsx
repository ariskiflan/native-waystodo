import React from "react";
import {
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const AddCategory = () => {
  return (
    <View>
      <StatusBar
        backgroundColor={"black"}
        barStyle={"light-content"}
      ></StatusBar>

      <Text
        style={{
          fontSize: 25,
          color: "black",
          fontWeight: "bold",
          marginTop: 50,
        }}
      >
        Add Category
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
          placeholder="Name"
        />
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
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
            Add Category
          </Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontSize: 25,
          color: "black",
          fontWeight: "bold",
          marginTop: 50,
        }}
      >
        List category
      </Text>

      <View
        style={{
          marginTop: 30,
          display: "flex",
          gap: 10,
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            padding: 10,
            backgroundColor: "#81C8FF",
            borderRadius: 10,
            color: "white",
          }}
        >
          Study
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            padding: 10,
            backgroundColor: "#FF8181",
            borderRadius: 10,
            color: "white",
          }}
        >
          Home Work
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            padding: 10,
            backgroundColor: "#FFB681",
            borderRadius: 10,
            color: "white",
          }}
        >
          Workout
        </Text>
      </View>
    </View>
  );
};

export default AddCategory;
