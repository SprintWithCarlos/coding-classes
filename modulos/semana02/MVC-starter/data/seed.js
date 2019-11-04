/* eslint-disable no-plusplus */
const faker = require('faker');
const fs = require('fs');

const users = [];
const posts = [];

for (let i = 0; i < 7; i++) {
  const user = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    avatar: faker.image.avatar(),
    email: faker.internet.email(),
    title: faker.company.bsNoun(),
    id: i + 1,
    description: faker.lorem.paragraphs(5),
  };
  users.push(user);
}

class User {
  constructor() {
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.avatar = faker.image.avatar();
    this.email = faker.internet.email();
    this.id = faker.random.uuid();
  }
}

fs.writeFile('users.json', JSON.stringify(users), (err) => {
  if (err) throw console.error(err);
  console.log('The file was saved!');
});

for (let i = 0; i < 100; i++) {
  const post = {
    id: i + 1,
    date: faker.date.recent().toLocaleDateString('es-ES', {
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      seconds: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
    title: faker.lorem.sentence(),
    body: faker.lorem.paragraphs(5),
    category: faker.hacker.noun(),
    image: faker.image.image(),
    author: new User(),
  };
  posts.push(post);
}
fs.writeFile('posts.json', JSON.stringify(posts), (err) => {
  if (err) throw console.error(err);
  console.log('The file was saved!');
});
