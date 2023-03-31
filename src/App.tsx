import React from 'react';
import './App.css';
import axios from "axios";




// const promise1 = axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
// promise1
//     .then((user) => {
//     return console.log(user.data)
// })
//     .catch(error => console.warn(error))
//
//
//
//
//
// const promise2 = fetch('https://jsonplaceholder.typicode.com/users/1/posts')
// promise2
//     .then((response) => {
//         return response.json()
//     })
//     .then(data=>console.log(data[0]))
//
//
// // const otherPromise1 = Promise.all([promise1,promise2])
// // otherPromise1.then(response=> console.log('all comleted'))
//
// const otherPromise2 = Promise.allSettled([promise1,promise2])
// otherPromise2.then(res=>{
//     console.log(res)
//     if(res[0].status === "fulfilled") {
//         return console.log(res[0].value)
//     }else{
//         return console.error(res[0].reason.message)
//     }
//     if(res[1].status === "fulfilled") {
//         return console.log(res[1])
//     }else{
//         return console.error(res[1])
//     }
//
// })


const getRequestSocialNet = (a:number)=>{
   return  axios.get(`https://social-network.samuraijs.com/api/1.0/users/${String(a)}`)
}
// getRequestSocialNet()
//     .then(res => console.log(res.data)).then(data=> console.log(data))
//
// axios.get('https://social-network.samuraijs.com/api/1.0/profile/')
//     .then(res=> res.data)
//     .then(data=> console.log(data.fullName))


getRequestSocialNet(2)
    .then(res=> res.data.items.length)
   .then(items=> {
       console.log(items);
      return getRequestSocialNet(items)
   })
    .then(data=> console.log(data))


function time(a:number){
   let id = setInterval(()=>{
        console.log(a++)

    },1000)
setTimeout(()=>clearInterval(id),3000)
}

function wait(a:number){
   const pr = new Promise((resolve, reject)=>{

       setTimeout(()=>{resolve('Promise')},a)

    })
    return pr

}


async function example (){
    await wait(1000)
    console.log(1)
    await wait(2000)
    console.log(2)
    await wait(3000)
    console.log(3)
}

example()


function App() {


    return (
        <>
            <h1>Promise</h1>
        </>
    );
}

export default App;
