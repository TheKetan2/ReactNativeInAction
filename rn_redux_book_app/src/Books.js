import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity
} from "react-native";

import { connect } from "react-redux";

const initialState = {
  name: "",
  author: ""
};
class Books extends React.Component {
  state = initialState;

  updateInput = (key, value) => {
    this.setState({ ...this.state, [key]: value });
  };

  addBook = () => {
    this.props.dispatchAddBook(this.state);
    this.setState({ initialState });
  };

  render() {
    const { books } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.in}></View>
        <Text style={styles.title}>Books</Text>
        <ScrollView
          keyboardShouldPersistTaps="always"
          style={styles.bookContainer}
        >
          {books.map((book, index) => (
            <View style={styles.book} key={index}>
              <Text style={styles.name}>{book.name}</Text>
              <Text style={styles.author}>{book.author}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 10,
    backgroundColor: "#ffffff",
    borderTopColor: "#ededed",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100
  },
  inputWrapper: {
    flex: 1
  },
  input: {
    height: 44,
    padding: 7,
    backgroundColor: "#ededed",
    borderColor: 1,
    borderRadius: 10,
    flex: 1,
    marginBottom: 5
  },
  addButton: {
    fontSize: 28,
    lineHeight: 28
  },
  container: {
    flex: 1
  },
  bookContainer: {
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    flex: 1
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: "center"
  },
  book: {
    padding: 20
  },
  name: {
    fontSize: 18
  },
  author: {
    fontSize: 14,
    color: "#999"
  }
});

const mapStateToProps = state => ({
  books: state.bookReducer.books
});

const mapDispatchToProps = {
  dispatchAddBook: book => addBook(book)
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
