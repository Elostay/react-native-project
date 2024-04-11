import React from "react";
import { Dimensions, ImageBackground, Text, View } from "react-native";
import bg from "../src/assets/images/auth-bg.png";
import RegistrationScreen from "../src/components/Registration/RegistrationScreen";

const { width, height } = Dimensions.get("window");

const PostsScreen = () => {
  return (
    <View>
      <ImageBackground
        imageStyle={{
          width,
          height,
        }}
        source={bg}
      />
      <RegistrationScreen />
    </View>
  );
};

export default PostsScreen;
