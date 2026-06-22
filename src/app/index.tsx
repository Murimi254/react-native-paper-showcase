import { View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function Index() {
  return (
    <View>
      <Text variant="headlineMedium">Hello Paper.</Text>
      <Button style={{ marginTop: 16 }} mode="contained" onPress={() => console.log("It works")}>
        Press Me!!!
      </Button>
    </View>
  );
}
