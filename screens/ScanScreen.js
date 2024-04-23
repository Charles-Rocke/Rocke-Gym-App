import { Button, Text, View } from "react-native";

function ScanScreen({ navigation }) {
  return (
    <View>
      <Text>Scan Screen</Text>
      <Button
        title="Continue"
        onPress={() => navigation.navigate("MainTabs")}
      />
    </View>
  );
}

export default ScanScreen;
