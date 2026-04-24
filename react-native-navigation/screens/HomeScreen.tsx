import { View, Button } from "react-native";

export default function HomeScreen({ navigation }: any) {
  return (
    <View>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}