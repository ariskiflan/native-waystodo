import { Image, StatusBar, Text, View } from "react-native";
import IndexPages from "@/pages/index/Index";
import AddCategory from "@/pages/AddCategory/Index";
import CategoryImage from "../../assets/images/🦆 icon _category_.png";
import AddList from "../../assets/images/Group.png";
import List from "../../assets/images/Vector (1).png";

import LoginPages from "@/pages/Login/Index";
import RegisterPages from "@/pages/register/Index";

export default function HomeScreen() {
  return (
    <>
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          padding: 32,
        }}
      >
        <RegisterPages></RegisterPages>
        {/* <LoginPages></LoginPages> */}
      </View>
      {/* 
      <View
        style={{
          width: "100%",
          height: 70,
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: 50,
          paddingVertical: 30,
          elevation: 20,
        }}
      >
        <Image style={{ width: 35 }} source={List}></Image>
        <Image style={{ width: 50 }} source={AddList}></Image>
        <Image style={{ width: 50 }} source={CategoryImage}></Image>
      </View> */}
    </>
  );
}
