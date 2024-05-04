import * as React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

function Btn({ children, onPress }) {
  return (
    <Button
      style={styles.button}
      mode="elevated"
      buttonColor="#F85F6A"
      textColor="white"
      onPress={onPress}
    >
      {children}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 5,
    borderRadius: 5,
    width: "80%",
  },
});
export default Btn;
