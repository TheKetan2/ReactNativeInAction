import { ADD_BOOK } from "../actions";

const initialState = {
  books: [
    { name: "East of Eden", author: "John" },
    { name: "East of Eden", author: "John" }
  ]
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { books: [...state.books, action.book] };
    default:
      return state;
  }
};

export default bookReducer;
