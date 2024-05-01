import { StyleSheet, Text, View } from "react-native";
import Btn from "../components/ui/Button";

function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>Start with...</Text>
      <Btn>Push</Btn>
      <Btn>Pull</Btn>
      <Btn>Legs</Btn>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
export default StartScreen;
