import React from "react";
import { StyleSheet, Text, View, Image, Platform } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            <Image
              style={styles.cardImage}
              source={require("./img/user.png")}
            ></Image>
          </View>
          <View>
            <Text style={styles.cardName}>Clark Kent</Text>
          </View>
          <View style={styles.cardOccupationContainer}>
            <Text style={styles.cardOccupation}>React Native Developer</Text>
          </View>
          <View>
            <Text style={styles.cardDescription}>
              Clark Kent is SuperDeveloper from planet Krypton, because of low
              pay he flew here on planet Earth to look out for good high paying
              Developer Jobs in Web and Mobile developement.
            </Text>
          </View>
        </View>
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
    alignItems: "center",
    borderColor: "black",
    borderWidth: 3,
    borderStyle: "solid",
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 400,
    height: 500,
    borderRadius: 20
  },
  cardImageContainer: {
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 3,
    borderBottomColor: "black",
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 15
  },
  cardImage: {
    width: 80,
    height: 80
  },
  cardName: {
    color: "white",
    marginTop: 30,
    fontWeight: "bold",
    textShadowColor: "black",
    textShadowOffset: {
      height: 2,
      width: 2
    },
    textShadowRadius: 4
  },
  cardOccupationContainer: {
    borderColor: "black",
    borderBottomWidth: 2.5
  },
  cardOccupation: {
    marginTop: 10,
    marginBottom: 10
  },
  cardDescription: {
    fontStyle: "italic",
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10
  }
});
