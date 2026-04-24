import { View, Text, Button } from "react-native";

export default function DetailsScreen({ navigation, route }: any) {
  const { name } = route.params;

  return (
    <View>
      <Text>Details Screen</Text>
      <Text>Hello {name}</Text>

      {/* PASS PARAMS BACK TO HOME SCREEN */}
      <Button
        title="Send Message Back to Home"
        onPress={() =>
          navigation.navigate({
            name: "Home",
            params: { message: "Hello from Details Screen!" },
            merge: true,
          })
        }
      />
    </View>
  );
}