const db = require("./con.js");

class postReview {
  constructor(id, user_id, post) {
    this.id = id;
    this.user_id;
    this.post;
    this.Author;
  }
  static async getpost() {
    try {
      const respose = await db.any(`SELECT * FROM blogPosts;`);
      return respose;
    } catch (error) {
      console.error("ERROR", error);
      return error;
    }
  }
  static async getpostId() {
    try {
      const response = await db.any(`SELECT * FROM blogPosts WHERE id = 1;`);
      return response;
    } catch (error) {
      console.error("ERROR", error);
      return error;
    }
  }
}

module.exports = postReview;
