import {multiply, splitString, sum} from "./lesson_01";


let a:number
let b: number
let c:number

beforeEach(()=>{
    a=1
    b=2
    c=3
})

test('should get the sum of the numbers ',()=>{

    const res1= sum(a,b)
    const res2= sum(b,c)

    expect(res1).toBe(3)
    expect(res2).toBe(5)
})
test('should get the multiply of the numbers ',()=>{

    const res1= multiply(a,b)
    const res2= multiply(b,c)

    expect(res1).toBe(2)
    expect(res2).toBe(6)
})
test('should get the split of the string ',()=>{

    const res1= splitString('Hello Word')
    const res2= splitString('React-not fully studied')

    expect(res1[0]).toBe('hello')
    expect(res1[1]).toBe('word')
    expect(res2[0]).toBe('react')
    expect(res2[1]).toBe('not')
    expect(res2[2]).toBe('fully')
    expect(res2[3]).toBe('studied')
    expect(res2.length).toBe(4)
})

