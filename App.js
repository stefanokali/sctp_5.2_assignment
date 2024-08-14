import { StatusBar } from "expo-status-bar";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { RadioButton } from "react-native-paper";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [likeCoffee, setLikeCoffee] = useState(false);

  const showAlert = () => {
    Alert.alert("Summary", `My name is ${name}, I am ${age} years old. ${likeCoffee ? "I like coffee." : "I hate coffee."}`, [
      {
        text: "Ok",
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_textinput}>
        <Text>Your name:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={setName}
          value={name}
        />
      </View>
      <View style={styles.container_textinput}>
        <Text>Your age:</Text>
        <TextInput style={styles.textInput} onChangeText={setAge} value={age} />
      </View>
      <View style={styles.container_textinput}>
        <Text>Like coffee?     </Text>
        <Text>Yes</Text>
        <RadioButton
          value="Yes"
          status={likeCoffee ? "checked" : "unchecked"}
          onPress={() => setLikeCoffee(true)}
        />
        <Text>No</Text>
        <RadioButton
          value="No"
          status={!likeCoffee ? "checked" : "unchecked"}
          onPress={() => setLikeCoffee(false)}
        />
      </View>
      <Button title="Submit" onPress={showAlert} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container_textinput: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "70%",
  },
});
