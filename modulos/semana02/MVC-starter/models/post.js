const User = require('./user');

class Post {
  constructor(id, date, title, body, category, image, { user = new User() }) {
    this.id = id;
    this.date = date;
    this.title = title;
    this.body = body;
    this.category = category;
    this.image = image;
    this.author = user;
  }
}
module.export = Post;
