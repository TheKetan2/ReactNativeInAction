import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}></View>
      </View>
    );
  }
}

const profileCardColor = "dodgerblue";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cardContainer: {
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
    borderRadius: 20
  }
});
