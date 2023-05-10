import moment from 'moment';
console.log(moment().format());

console.log('hello i am in js')

console.log(moment().format('dddd'));
console.log(moment().format("MMM Do YY"));

var datetime = moment().startOf("day")