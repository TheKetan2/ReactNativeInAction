import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import Heading from "./app/Heading";
import Input from "./app/Input";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      todos: [],
      type: "All"
    };
  }
  inputChange(inputValue) {
    console.log("Input Value", inputValue);
    this.setState({ inputValue });
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input></Input>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
});

export default App;
