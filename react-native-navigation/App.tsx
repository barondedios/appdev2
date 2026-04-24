import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* HOME SCREEN */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        {/* DETAILS SCREEN */}
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}