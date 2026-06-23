import { Task } from "@/types";
import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Appbar, Button, HelperText, TextInput } from "react-native-paper";
import { mockTasks } from ".";

export default function AddTaskScreen() {
  const router = useRouter();
  const [userInput, setUserInput] = useState({ title: "", description: "" });
  const [userError, setUserError] = useState({ titleError: "", descriptionError: "" });

  function userInputHandler(identifier: string, text: string) {
    setUserError(errors => ({ ...errors, [`${identifier}Error`]: "" }));
    setUserInput(input => ({ ...input, [identifier]: text }));
  }

  function validate(text: string): boolean {
    return text.trim().length > 0;
  }

  function saveHandler() {
    const isTitleValid = validate(userInput.title);
    const isDescriptionValid = validate(userInput.description);

    if (!isTitleValid) {
      setUserError(errors => ({ ...errors, titleError: "Title Too Short." }));
      return;
    }
    if (!isDescriptionValid) {
      setUserError(errors => ({ ...errors, descriptionError: "Description cannot be empty." }));
      return;
    }

    const newTask: Task = {
      ...userInput,
      id: Date.now().toString(),
      status: "todo",
      createdAt: Date.now(),
    };
    mockTasks.unshift(newTask);
    router.replace({ pathname: "/" });
  }

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content title="Add Task" />
      </Appbar.Header>
      <KeyboardAvoidingView style={styles.inputContainer} behavior={Platform.OS === "android" ? "height" : "padding"}>
        <View>
          <TextInput error={userError.titleError !== ""} mode="outlined" label="Title" onChangeText={userInputHandler.bind(globalThis, "title")} />
          <HelperText type="error" visible={userError.titleError !== ""}>
            {userError.titleError}
          </HelperText>
        </View>
        <View>
          <TextInput
            error={userError.descriptionError !== ""}
            multiline
            numberOfLines={3}
            mode="outlined"
            label="Description"
            onChangeText={userInputHandler.bind(globalThis, "description")}
          />
          <HelperText type="error" visible={userError.descriptionError !== ""}>
            {userError.descriptionError}
          </HelperText>
        </View>
        <View style={styles.buttonsContainer}>
          <Button mode="outlined" onPress={() => router.back()}>
            Cancel
          </Button>
          <Button mode="contained" onPress={saveHandler}>
            Save Task
          </Button>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 16,
    gap: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    alignItems: "center",
  },
});
