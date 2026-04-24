import { View, Text, Button } from "react-native";

export default function DetailsScreen({ navigation, route }: any) {
  const { name } = route.params;

  return (
    <View>
      <Text>Details Screen</Text>
      <Text>Hello {name}</Text>

      {/* GO BACK BUTTON */}
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}