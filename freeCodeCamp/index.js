/* eslint-disable no-unused-vars */

const username = 'JackOfAllTrades';
const userCheck = /(?=[a-z]{2,})/i; // Change this line
const result = userCheck.test(username);
module.exports = userCheck;
