import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation, route }: any) {
  const message = route.params?.message;

  return (
    <View>
      <Text>Home Screen</Text>

      {message && <Text>{message}</Text>}

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details", { name: "Baron" })}
      />
    </View>
  );
}