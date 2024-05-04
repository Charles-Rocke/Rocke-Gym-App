import { StyleSheet, Text, View } from "react-native";
import { darkTheme } from "../../styles/GlobalStyles";
import Btn from "../../components/ui/Button";

function StartScreen({ navigation }) {
  function pressHandler(muscleGroup) {
    navigation.navigate("Priority", {
      muscleGroup: muscleGroup,
    });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Start with...</Text>
      <Btn onPress={() => pressHandler("push")}>Push</Btn>
      <Btn onPress={() => pressHandler("pull")}>Pull</Btn>
      <Btn onPress={() => pressHandler("legs")}>Legs</Btn>
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
