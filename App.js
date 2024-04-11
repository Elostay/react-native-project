import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import PostsScreen from "./Screens/PostsScreen";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ fontFamily: "Roboto-Regular" }}>
      <PostsScreen />
      <StatusBar style="auto" />
    </View>
  );
}
