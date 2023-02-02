const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("encoding a message", ()=>{
    it("should encode a message by tanslating each letter to a pair of numbers",()=>{
    const message = "thinkful";
    const actual = polybius(message);
    const expected = "4432423352125413";

    expect(actual).to.equal(expected)
    })
    it("should translate both i and j to 42",()=>{
        const message = "jingle";
        const actual = polybius(message);
        const expected = "424233221351"
    })
    it("should leave spaces as is",()=>{
        const message = "Hello world";
        const actual = polybius(message);
        const expected = "3251131343 2543241341"
    
        expect(actual).to.equal(expected)
    })

    describe("decoding a message", ()=>{
        it("should decode a message by translating each pair of numbers into a letter",()=>{
            const message = "4432423352125413";
            const actual = polybius(message, false);
            const expected = "th(i/j)nkful";

            expect(actual).to.equal(expected)
        })
        it("should put both i and j when translating 42",()=>{
            const message = "424233221351";
            const actual = polybius(message, false);

            expect(actual).to.include("j")
            expect(actual).to.include("i")
        })
        it("should still translate even with spaces",()=>{
            const message = "3251131343 2543241341";
            const actual = polybius(message, false);
            const expected = "hello world"
    
        expect(actual).to.equal(expected)
        })
        it("should return false if the amount of numbers is odd",()=>{
            const message = "3251131343 254324134"
            const actual = polybius(message, false)

            expect(actual).to.be.false
        })
    })
})