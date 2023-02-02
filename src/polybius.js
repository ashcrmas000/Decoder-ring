// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const lookupEncode = {"a": 11, "b":21, "c":31, "d":41, "e":51, "f":12, "g":22, "h":32, "i":42, "j":42, "k":52, "l":13, "m":23, "n":33, "o":43, "p":53, "q":14, "r":24, "s":34, "t":44, "u":54, "v":15, "w":25, "x":35, "y":45, "z":55}
  const lookupDecode = {"11":"a" , "21":"b", "31":"c", "41":"d", "51":"e", "12":"f", "22":"g", "32":"h", "42":"(i/j)", "52":"k", "13":"l", "23":"m", "33":"n", "43":"o", "53":"p", "14":"q", "24":"r", "34":"s", "44":"t", "54":"u", "15":"v", "25":"w", "35":"x", "45":"y", "55":"z"}

//set an if statemement for if the amount of numbers is equal to an odd number  
function polybius(input, encode = true) {
  
  let encodeOutput = ""
  if(encode === true){
    for(let i=0; i < input.length; i++){
      if(input[i]===" "){
        encodeOutput += " "
      }else{
        encodeOutput += (lookupEncode[input[i].toLowerCase()])

    }
  }
  return encodeOutput
  }else{

    //need to be able to put in a set of numbers that translate to an actual message 
    //needs to return i and j when the number 42 is put in 42 = (i/j)
    //needs to leave spaces alone
    if(input.split(" ").join("").length%2!==0){
      return false
    }
    let decodeOutput = "";

    if(!encode){

      for(let i = 0; i < input.length; i++){
      
        
        if(input[i] === " "){
         
          decodeOutput += " "
       
        }else{
          //need to have two numbers paired together for the number to translate the message.
          let number = input[i] + input[i+1]
          
          decodeOutput += (lookupDecode[Number(number)])
          // console.log("line 45", decodeOutput)
          //don't want the index to repeat over the previous index so use something to skip to the next index
          i++
        }
      }
      return decodeOutput
    }
  }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius}