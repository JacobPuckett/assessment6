import { isExportDeclaration } from "typescript"

const {shuffleArray} = require('./utils')

//im lost not sure if any of this works

describe('shuffleArray should', () => {
    let newArray = [1,2,3,4,5]
    test('returns a array', () => {
    //   let  shuffleArray = testArray
       expect(shuffleArray).toBe(shuffleArray)
    })
    test('return same length array', () => {
        expect(shuffleArray(newArray).length).toEqual(shuffleArray(newArray).length)
    })
    test('returns the same array', () => {
        expect(shuffleArray).toEqual(shuffleArray)
    })
   test('does shuffle array shuffle', () => {
    
    expect(shuffleArray(newArray).index).toBe(shuffleArray(newArray).index)
   })
})