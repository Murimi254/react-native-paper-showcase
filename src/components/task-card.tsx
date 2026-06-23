import type { Task } from "@/types";
import { StyleSheet } from "react-native";
import { Card, Chip, Text, useTheme } from "react-native-paper";

// Props: the task data + an optional press handler
interface TaskCardProps {
  task: Task;
  onPress?: () => void;
}

export function TaskCard({ task, onPress }: TaskCardProps) {
  const theme = useTheme(); // access the active theme

  const isDone = task.status === "done";

  return (
    <Card
      style={styles.card}
      onPress={onPress}
      mode="elevated" // gives a subtle shadow
    >
      <Card.Content>
        {/* MD3 Text with typographic variants */}
        <Text variant="titleMedium" style={[styles.title, isDone && { color: theme.colors.onSurfaceDisabled }]}>
          {task.title}
        </Text>

        <Text variant="bodySmall" style={styles.description} numberOfLines={2}>
          {task.description}
        </Text>

        {/* Chip shows the status with a compact label */}
        <Chip
          compact
          mode={isDone ? "flat" : "outlined"}
          style={[styles.chip, isDone && { backgroundColor: theme.colors.secondaryContainer }]}
          textStyle={{ fontSize: 11 }}
        >
          {isDone ? "Done" : "To do"}
        </Chip>
      </Card.Content>
    </Card>
  );
}

// Only layout/spacing here — colors come from the theme
const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 6,
  },
  title: {
    marginBottom: 4,
  },
  description: {
    opacity: 0.7,
    marginBottom: 10,
  },
  chip: {
    alignSelf: "flex-start",
  },
});
