import { View, Text } from "react-native";

export default function DetailsScreen({ route }: any) {
  const { name } = route.params;

  return (
    <View>
      <Text>Details Screen</Text>
      <Text>Hello {name}</Text>
    </View>
  );
}