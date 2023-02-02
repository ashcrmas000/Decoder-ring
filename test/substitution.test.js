const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("error message", ()=>{
    it("return false if there is no subsitution alphabet",()=>{
        const message = "thinkful"
        const actual = substitution(message)

        expect(actual).to.be.false
    })
    it("return false if the substitution alphabet is not 26 letters long",()=>{
        const message = "thinkful"
        const alphabet = "fghlkasdj"
        const actual = substitution(message, alphabet)

        expect(actual).to.be.false
    })
    it("return false if the subsitution alphabet has no unique characters", ()=>{
        const message = "thinkful"
        const alphabet = "abcabcabcabcabcabcabcabcyz"
        const actual = substitution(message, alphabet)

        expect(actual).to.be.false
    })
})

describe("encoding message",()=>{
    it("should encode a message with the substituted alphabet",()=>{
        const message = "thinkful"
        const alphabet = "xoyqmcgrukswaflnthdjpzibev"
        const actual = substitution(message, alphabet)
        const expected = "jrufscpw"

        expect(actual).to.eql(expected)
    })

    it("should work even with special characters",()=>{
        const message = "message"
        const alphabet = "$wae&zrdxtfcygvuhbijnokmpl"
        const actual = substitution(message, alphabet)
        const expected = "y&ii$r&"

        expect(actual).to.eql(expected)
    })
    
    it("should keep spaces where they are supposed to be", ()=>{
        const message = "You are an excellent spy"
        const alphabet = "xoyqmcgrukswaflnthdjpzibev"
        const actual = substitution(message, alphabet)
        const expected = "elp xhm xf mbymwwmfj dne"

        expect(actual).to.eql(expected)
    })
})

describe("decoding message",()=>{
    it("should decode a message with the substituted alphabet",()=>{
        const message = "jrufscpw"
        const alphabet = "xoyqmcgrukswaflnthdjpzibev"
        const actual = substitution(message, alphabet, false)
        const expected = "thinkful"

        expect(actual).to.eql(expected)
    })

    it("should work even with special characters",()=>{
        const message = "y&ii$r&"
        const alphabet = "$wae&zrdxtfcygvuhbijnokmpl"
        const actual = substitution(message, alphabet, false)
        const expected = "message"

        expect(actual).to.eql(expected)
    })
    
    it("should keep spaces where they are supposed to be", ()=>{
        const message = "elp xhm xf mbymwwmfj dne"
        const alphabet = "xoyqmcgrukswaflnthdjpzibev"
        const actual = substitution(message, alphabet, false)
        const expected = "you are an excellent spy"

        expect(actual).to.eql(expected)
    })
})
