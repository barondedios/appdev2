import { View, Button, Text } from "react-native";

export default function DetailsScreen({ navigation }: any) {
  return (
    <View>
      <Text>Details Screen</Text>

      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}