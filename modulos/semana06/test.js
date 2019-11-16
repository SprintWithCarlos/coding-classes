const person = {
  age: 10,
  setAge: function(newAge) {
    this.age = newAge;
  },
  refreshAge(userId) {
    fetchAgeFromDb(function (newAge) {
      person.setAge(newAge);
    });
  },
};
function fetchAgeFromDb(cb) { cb(20); }
person.refreshAge();
console.log(person.age);
