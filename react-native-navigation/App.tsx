import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";

export type RootStackParamList = {
  Home: undefined;
  Details: { name?: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* HOME */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home Screen",
          }}
        />

        {/* DETAILS WITH INITIAL PARAMS */}
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{
            name: "Default User"
          }}
          options={{
            title: "Details Page",
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}