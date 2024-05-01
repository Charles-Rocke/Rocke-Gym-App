import { PaperProvider } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CheckinScreen from "./screens/CheckinScreen";
import ScanScreen from "./screens/ScanScreen";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import WorkoutScreen from "./screens/WorkoutScreen";
import StartScreen from "./screens/StartScreen";

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabs() {
  return (
    <BottomTab.Navigator initialRouteName="Workout">
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Workout" component={WorkoutScreen} />
      <BottomTab.Screen name="Settings" component={SettingsScreen} />
    </BottomTab.Navigator>
  );
}

function App() {
  return (
    <>
      <PaperProvider>
        <StatusBar style="dark" />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Start">
            <Stack.Screen name="Start" component={StartScreen} />
            <Stack.Screen name="Scan" component={ScanScreen} />
            <Stack.Screen
              name="MainTabs"
              component={MainTabs}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}

export default App;
