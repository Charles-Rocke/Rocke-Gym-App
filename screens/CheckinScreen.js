import { View, Button, StyleSheet } from "react-native";

const CheckinScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Checkin" onPress={() => navigation.navigate("Scan")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CheckinScreen;
