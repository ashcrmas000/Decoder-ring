// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
let lookup = "abcdefghijklmnopqrstuvwxyz"
  function caesar(input, shift, encode = true) {
    // set a conditional for if the shift is greater than 25, less than 26, or 0/undefined to return false
    if (shift > 25 || shift < -25 || shift === 0 || shift === undefined){
      return false
    }
    //create conditional for if the enode is equal to false it will shift in the opposite direction for the decode
    let result = ""
    if(encode === false){
      shift = shift *-1
    }
    //use a for loop to go through the length of whatever word is inputted
    for (let i = 0; i < input.length; i++){
      const letter = input[i].toLowerCase();
      //find the index of the character in the lookup, add the shift to that index
      //find the character at the shifted index and push it to the result
      //create an if statememnt for when it goes over the end of the lookup, whether it is the beginning or end
      if (lookup.includes(letter)){
        const letterIndex = lookup.indexOf(letter);
        let shiftedIndex = letterIndex + shift

        if (shiftedIndex > 25){
          shiftedIndex += -26;
        }
        if (shiftedIndex < 0 && shiftedIndex > -25){
          shiftedIndex += 26
        }
        const shiftedLetter = lookup[shiftedIndex];
        result += shiftedLetter
      }else{
        result += letter
      }
    }

      return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
