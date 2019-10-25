import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import Heading from "./app/Heading";
import Input from "./app/Input";
import Button from "./app/Button";

let todoIndex = 0;
class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      todos: [],
      type: "All"
    };
    this.submitTodo = this.submitTodo.bind(this);
  }

  submitTodo() {
    if (this.state.inputValue.match(/^\s*$/)) {
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
          <Button submitTodo={this.submitTodo}></Button>
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
