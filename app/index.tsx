import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Finance!</Text>
      <StatusBar style="auto" />
      <Link href='./home' style={{color: 'blue'}}>Go to home!</Link>
    </SafeAreaView>
  );
}
