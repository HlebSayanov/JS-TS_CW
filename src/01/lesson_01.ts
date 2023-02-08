

export function sum(a:number,b:number){
    return a+b
}

export function multiply(a:number,b:number){
    return a*b
}

export function splitString(str:string){
    const arr = str.toLowerCase().replace(/-/g,' ').split(' ')
    return arr
}
