import { useAppTheme } from "@/hooks/use-app-theme";
import { useRouter } from "expo-router";
import { View } from "react-native";
import { Appbar, Divider, List, Switch, useTheme } from "react-native-paper";

export default function SettingsScreen() {
  const router = useRouter();
  const { isDark, toggleTheme } = useAppTheme();
  const theme = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content title="Settings" />
      </Appbar.Header>
      <List.Section title="Appearance" titleStyle={{ fontSize: 20, fontWeight: "500", color: theme.colors.primary }}>
        <List.Item title="Dark Mode" description="Switch to Dark Mode" right={() => <Switch value={isDark} onValueChange={toggleTheme} />} />
      </List.Section>
      <Divider />
      <List.Section title="About" titleStyle={{ fontSize: 20, fontWeight: "500", color: theme.colors.primary }}>
        <List.Item title="Version" description="1.0.0" />
        <List.Item title="Built With" description="React Native Paper" />
      </List.Section>
    </View>
  );
}
