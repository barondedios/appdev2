import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }: any) {
  return (
    <View>
      <Text>Home Screen</Text>

      {/* NORMAL NAVIGATION */}
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate("Details", { name: "Baron" })
        }
      />

      {/* NESTED PARAMS NAVIGATION */}
      <Button
        title="Nested Navigation to Details"
        onPress={() =>
          navigation.navigate("Home", {
            screen: "Details",
            params: {
              name: "Nested Baron",
            },
          })
        }
      />
    </View>
  );
}