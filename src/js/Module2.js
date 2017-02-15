var _  = require('lodash');


var people = [{
  "id": 1,
  "first_name": "Emily",
  "last_name": "Vasquez",
  "email": "evasquez0@amazon.de",
  "gender": "Female",
  "ip_address": "32.198.125.109"
}, {
  "id": 2,
  "first_name": "Ruby",
  "last_name": "Fox",
  "email": "rfox1@printfriendly.com",
  "gender": "Female",
  "ip_address": "139.70.156.154"
}, {
  "id": 3,
  "first_name": "Julie",
  "last_name": "Hunter",
  "email": "jhunter2@reference.com",
  "gender": "Female",
  "ip_address": "102.55.107.238"
}, {
  "id": 4,
  "first_name": "Nicholas",
  "last_name": "Romero",
  "email": "nromero3@shinystat.com",
  "gender": "Male",
  "ip_address": "146.81.202.65"
}, {
  "id": 5,
  "first_name": "Michelle",
  "last_name": "Davis",
  "email": "mdavis4@fotki.com",
  "gender": "Female",
  "ip_address": "137.96.216.137"
}];

var femaleCount = _.filter(people,{gender:"Female"}).length;

alert(femaleCount + " Females");
