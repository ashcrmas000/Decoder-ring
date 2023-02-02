// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const realAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const output = []; 
  function substitution(input, alphabet, encode = true) {

    const checkForRepeats = new Set(alphabet)
    if(alphabet === undefined|| alphabet.length < 26 || [...checkForRepeats].length < 26) return false;
    
    
    //look at each character in the input, for each character do this
    //look for the index of each letter in the input in the realAlphabet, store that in a variable
    //find the character at that index in the subAlphabet
    //then add it to the output
    //return output
    alphabet.split("");
    if (encode){
      for(let i = 0; i < 26; i++){
       output[realAlphabet[i]] = alphabet[i]
    }
      
    }else{
      for(let i = 0; i < 26; i++){
        output[alphabet[i]]=realAlphabet[i]
      }
    }
    let answer = input.toLowerCase().split("").map((letter)=>{
      if (letter === " ") return " ";
      return output[letter]
    })
    return answer.join("")
  }

  //substitution("hi", "xoyqmcgrukswaflnthdjpzibev");
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
