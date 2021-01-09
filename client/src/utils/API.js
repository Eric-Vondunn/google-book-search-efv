import axios from "axios";

export default {
  //books from google api
  getBooks: function (q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },

  //get saved books
  getSavedBooks: function () {
    return axios.get("/api/book");
  },
  //delete svd books by id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // save book to db
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
};
