import { TaskCard } from "@/components";
import { Task } from "@/types";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Appbar, FAB, Snackbar, Text, useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const mockTasks: Task[] = [
  {
    id: "task-1",
    title: "Configure Babel Settings",
    description: "Move the react-native-paper/babel plugin out of the production block into the main plugins array for global tree shaking.",
    status: "done",
    createdAt: 1782205200000,
  },
  {
    id: "task-2",
    title: "Clear Expo Bundler Cache",
    description: "Run the command npx expo start --clear to force Metro to rebuild using the newly updated babel config settings.",
    status: "done",
    createdAt: 1782209700000,
  },
  {
    id: "task-3",
    title: "Optimize Vector Icons Imports",
    description: "Audit the source files to change heavy general imports into direct family imports like @expo/vector-icons/MaterialCommunityIcons.",
    status: "todo",
    createdAt: 1782212400000,
  },
  {
    id: "task-4",
    title: "Bookmark Icon Directory",
    description: "Save the expo.fyi link to the browser toolbar for quick access to MaterialCommunityIcons kebab-case string names.",
    status: "todo",
    createdAt: 1782214200000,
  },
  {
    id: "task-5",
    title: "Test Production App Bundle",
    description: "Generate a production build binary to verify that tree shaking successfully dropped unused component assets.",
    status: "todo",
    createdAt: 1782216000000,
  },
];

export default function Index() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [showSnackBar, setShowSnackBar] = useState(false);
  const theme = useTheme();
  useEffect(() => {
    if (mockTasks.length > 5) {
      setShowSnackBar(true);
    }
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Appbar.Header>
        <Appbar.Content title="My Tasks" />
        <Appbar.Action icon="dots-vertical" onPress={() => router.push("/settings")} />
      </Appbar.Header>
      <FlatList
        contentContainerStyle={{ paddingBottom: insets.bottom + 88 }}
        data={tasks}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <TaskCard task={item} />}
        ListEmptyComponent={<Text variant="bodyLarge">No task added yet!!.</Text>}
      />
      <Snackbar visible={showSnackBar} onDismiss={() => setShowSnackBar(false)} duration={Snackbar.DURATION_SHORT}>
        Task Added Successfully.
      </Snackbar>
      <FAB accessibilityLabel="Add Task" style={{ ...styles.fab, bottom: insets.bottom + 16 }} icon="plus" onPress={() => router.push("/add-task")} />
    </View>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    right: 16,
  },
});
