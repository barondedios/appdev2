import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }: any) {
  return (
    <View>
      <Text>Home Screen</Text>

      {/* NORMAL NAVIGATION */}
      <Button
        title="Go to Details (navigate)"
        onPress={() => navigation.navigate("Details", { name: "Baron" })}
      />

      {/* MULTIPLE INSTANCES (KEY PART OF #9) */}
      <Button
        title="Push Details Screen Again"
        onPress={() =>
          navigation.push("Details", { name: "New Instance" })
        }
      />
    </View>
  );
}