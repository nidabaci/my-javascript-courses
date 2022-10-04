// const formatNumbers = (number) => {
//   let integerNum = String(Math.floor(number));
//   let newNum = "";
//   for (let i = integerNum.length - 3; i > 0; i -= 3) {
//     newNum = integerNum.slice(0, i) + "," + integerNum.slice(i);
//     integerNum = newNum;
//   }
//   let decimal = String(number).split(".");
//   //handle case where the salary does not have a decimal
//   if (decimal[1] == true) {
//     return newNum + "." + decimal[1];
//   } else {
//     return number;
//   }
// };

// export default formatNumbers;


//////////////


 const formatNumber = number => {
  // Get rid of the decimals and convert to a string.
  let numStr = String(Math.floor(number));
 
  // Starting 3 from the end, add a comma every 3 digits.
  for (let i = numStr.length - 3; i > 0; i -= 3) {
    numStr = numStr.slice(0, i) + ',' + numStr.slice(i);
  }
 
  // And return!
  return numStr;
}
export default formatNumber;