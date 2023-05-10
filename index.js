import moment from 'moment';
console.log(moment().format());

console.log('hello i am in js')

console.log(moment().format('dddd'));
console.log(moment().format("MMM Do YY"));

// var datetime = moment().startOf("day")

// Lexical this
var bob = {
  _name: "Bob",
  _friends: ["James"],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
};
console.log(bob)