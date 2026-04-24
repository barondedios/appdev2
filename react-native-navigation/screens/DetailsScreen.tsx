import { View, Text, Button } from "react-native";

export default function DetailsScreen({ route, navigation }: any) {
  const { name } = route.params;

  return (
    <View>
      <Text>Hello {name}</Text>

      {/* UPDATE PARAMS */}
      <Button
        title="Update Name"
        onPress={() =>
          navigation.setParams({ name: "Updated Baron" })
        }
      />
    </View>
  );
}