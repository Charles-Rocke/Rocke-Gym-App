import { StyleSheet, Text, View } from "react-native";
import { darkTheme } from "../styles/GlobalStyles";
import Btn from "../components/ui/Button";

function StartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Start with...</Text>
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
  text: {
    color: darkTheme.colors.primary,
  },
});
export default StartScreen;
