import { StyleSheet, Text, View } from "react-native";
import { darkTheme } from "../../styles/GlobalStyles";
import Btn from "../../components/ui/Button";
import { pushData } from "../../data/pushData";
import { pullData } from "../../data/pullData";
import { legData } from "../../data/legData";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

function PriorityScreen({ route }) {
  const navigation = useNavigation();
  const { muscleGroup } = route.params;
  console.log(muscleGroup);

  function getMuscleGroups() {
    let muscleGroups = [];

    if (muscleGroup === "push") {
      muscleGroups = Object.keys(pushData.strength).map((key) => {
        // Capitalize the first letter of the key
        return key.charAt(0).toUpperCase() + key.slice(1);
      });
    } else if (muscleGroup === "pull") {
      muscleGroups = Object.keys(pullData.strength).map((key) => {
        // Capitalize the first letter of the key
        return key.charAt(0).toUpperCase() + key.slice(1);
      });
    } else if (muscleGroup === "legs") {
      muscleGroups = Object.keys(legData.strength).map((key) => {
        // Capitalize the first letter of the key
        return key.charAt(0).toUpperCase() + key.slice(1);
      });
    }

    return muscleGroups;
  }
  useEffect(() => {
    // Update the header title when the muscleGroup changes
    const capitalizedMuscleGroup =
      route.params.muscleGroup.charAt(0).toUpperCase() +
      route.params.muscleGroup.slice(1);
    navigation.setOptions({
      title: capitalizedMuscleGroup,
    });
  }, [route.params.muscleGroup]);

  return (
    <View style={styles.container}>
      <Text numberOfLines={3} style={styles.text}>
        Any specific muscle to prioritize?
      </Text>
      {getMuscleGroups().map((key, index) => (
        <Btn key={index} onPress={() => console.log(key)}>
          {key}
        </Btn>
      ))}
      <Btn onPress={() => console.log("Pressed None")}>None</Btn>
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
export default PriorityScreen;
