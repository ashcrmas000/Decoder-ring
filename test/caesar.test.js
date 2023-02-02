// Write your tests here!
const expect = require("chai").expect
const {caesar} = require("../src/caesar");


    describe("error handling", ()=>{
        it("should return false if the shift amount is 0",()=>{
            const message = "azrael";
            const shift = 0;
            const actual = caesar(message, shift);

            expect(actual).to.be.false;
        });

        it("should return false if the shift amount is above 25",()=>{
            const message = "azrael";
            const shift = 26;
            const actual = caesar(message,shift);

            expect(actual).to.be.false;
        });

        it("should return false if the shift amount is below 25",()=>{
            const message = "azrael";
            const shift = -26;
            const actual = caesar(message,shift);

            expect(actual).to.be.false;
        });
    })

    describe("encoding a message", ()=>{
        it("should encode a message by shifting the letters",()=>{
            const message = "Thinkful";
            const shift = 3;
            const actual = caesar(message, shift)
            const expected = "wklqnixo"
            
            expect (actual).to.equal(expected) 
        })

        it("should leave spaces and other symbols as is", ()=>{
            const message = "This is a secret message!";
            const shift = 8;
            const actual = caesar(message, shift);
            const expected = "bpqa qa i amkzmb umaaiom!"

            expect(actual).to.equal(expected)
        })
        
        it("should ignore cpital letters",()=>{
            const message = "This is a secret message!";
            const shift = 8;
            const actual = caesar(message, shift);
            const expected = "bpqa qa i amkzmb umaaiom!"

            expect(actual).to.equal(expected)
        })

        it("should loop letters at the end of the alphabet to the beginning and vise versa", ()=>{
            const message = "azrael";
            const shift = 3;
            const actual = caesar(message,shift);
            const expected = "dcudho";

            expect(actual).to.equal(expected)
        })

        it("should allow for negative shifts, or shifts to the left", ()=>{
            const message = "Thinkful";
            const shift = -3;
            const actual = caesar(message, shift);
            const expected = "qefkhcri"

            expect(actual).to.equal(expected)
        })
    })

    describe("decoding a message", ()=>{
        it("should decode a message by shifting the letters in the opposite direction", ()=>{
            const message = "wklqnixo";
            const shift = 3;
            const actual = caesar(message, shift, false)
            const expected = "thinkful"
            
            expect (actual).to.equal(expected) 
        })

        it("should leave spaces and other symbols as is", ()=>{
            const message = "bpqa qa i amkzmb umaaiom!";
            const shift = 8;
            const actual = caesar(message, shift, false);
            const expected = "this is a secret message!"

            expect(actual).to.equal(expected)
        })

        it("should ignore capital letters",()=>{
            const message = "BPQA qa i amkzmb umaaiom!";
            const shift = 8;
            const actual = caesar(message, shift, false);
            const expected = "this is a secret message!"

            expect(actual).to.equal(expected)
        })

        it("should loop letters at the end of the alphabet to the beginning and vise versa", ()=>{
            const message = "dcudho";
            const shift = 3;
            const actual = caesar(message,shift, false);
            const expected = "azrael";

            expect(actual).to.equal(expected)
        })

        it("should allow for negative shifts, or shifts to the left", ()=>{
            const message = "qefkhcri";
            const shift = -3;
            const actual = caesar(message, shift, false);
            const expected = "thinkful"

            expect(actual).to.equal(expected)
        })
    })
