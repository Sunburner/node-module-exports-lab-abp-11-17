'use strict';


class Icebreaker{
  question(){
    Question.Find()
  }
}

module.exports = Icebreaker

const Icebreaker = require(./Icebreaker.js)