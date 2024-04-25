import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ProfileHeader from "../components/Home/ProfileHeader";
import { Title } from "react-native-paper";

// Static data representing user's gym activity
const activityData = [
  { date: "2024-04-02", active: false },
  { date: "2024-04-01", active: true },
  { date: "2024-04-03", active: true },
  { date: "2024-04-02", active: false },
  { date: "2024-04-02", active: false },
  { date: "2024-04-02", active: false },
  { date: "2024-04-02", active: false },
  // Add more dates and their corresponding activity status
];

// Home screen component
function HomeScreen() {
  return (
    <>
      <ProfileHeader />
      <View style={styles.container}>
        <Title>Progress</Title>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {activityData.map(function (day, index) {
            return (
              <View
                key={index}
                style={[
                  styles.square,
                  day.active ? styles.activeSquare : styles.inactiveSquare,
                ]}
              />
            );
          })}
        </View>
      </ScrollView>
    </>
  );
}

// Styles for the home screen
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  square: {
    width: 20,
    height: 20,
    margin: 10,
  },
  activeSquare: {
    backgroundColor: "green",
  },
  inactiveSquare: {
    backgroundColor: "gray",
  },
});

export default HomeScreen;
