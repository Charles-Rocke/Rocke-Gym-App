import React from "react";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { darkTheme } from "./styles/GlobalStyles";
import CheckinScreen from "./screens/CheckinScreen";
import ScanScreen from "./screens/ScanScreen";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import WorkoutScreen from "./screens/WorkoutScreen";
import StartScreen from "./screens/Start/StartScreen";
import PriorityScreen from "./screens/Start/PriorityScreen";

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabs() {
  return (
    <BottomTab.Navigator
      initialRouteName="Workout"
      screenOptions={{
        tabBarStyle: { backgroundColor: darkTheme.colors.background },
        tabBarActiveTintColor: darkTheme.colors.primary,
        tabBarInactiveTintColor: darkTheme.colors.text,
      }}
    >
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Workout" component={WorkoutScreen} />
      <BottomTab.Screen name="Settings" component={SettingsScreen} />
    </BottomTab.Navigator>
  );
}

function App() {
  return (
    <PaperProvider theme={darkTheme}>
      <StatusBar style="light" />
      <NavigationContainer theme={darkTheme}>
        <Stack.Navigator
          initialRouteName="Start"
          screenOptions={{
            headerStyle: { backgroundColor: darkTheme.colors.background },
            headerTintColor: darkTheme.colors.text,
          }}
        >
          <Stack.Screen name="Start" component={StartScreen} />
          <Stack.Screen name="Priority" component={PriorityScreen} />
          <Stack.Screen
            name="MainTabs"
            component={MainTabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
