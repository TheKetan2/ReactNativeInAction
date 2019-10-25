import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import Heading from "./app/Heading";
import Input from "./app/Input";

let todoIndex = 0;
class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      todos: [],
      type: "All"
    };
  }

  submitTodo() {
    if (this.state.inputValue.matchh(/^\s*$/)) {
      return;
    }

    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false
    };
    todoIndex++;
    const todos = [...this.state.todos, todo];
    this.setState({ todos, inputValue: "" }, () => {
      console.log("State: ", this.state);
    });
  }
  inputChange(inputValue) {
    this.setState({ inputValue });
  }
  render() {
    const { inputValue } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={text => this.inputChange(text)}
          ></Input>
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
