// // //synchrronous
// // //settimeout is used to dset a timers
// // console.log("hello");

// // for(let i=0;i<1000000000;i++){

// // }

// // setTimeout(()=>{console.log("m2")},1000);


// // setTimeout(()=>{console.log("movie")},0);

// // console.log("spinner");



// //callback functions



// let success=()=>{
//     console.log("payment success")
// }
// let failure=()=>{
//     console.log("payment failed")
// }

// let paymentprocess=(amount,onsuccess,onfailure)=>{
// setTimeout(()=>{
// let paymentstatus=true //simulating

// },2000);
// } ///--razorpay developers
// console.log("pending ....")
//  paymentprocess(1000,success,failure); //amazon developers



//promises


let paymentprocess=(amount)=>{
return   new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        let paymentstatus=true //simulating
        paymentstatus?resolve("payment success"):reject('payment failed')
        paymentstatus?resolve("payment success"):reject('payment failed')
    },2000);

});
}

let s=paymentprocess(1000).then((msg)=>{console.log(msg)}).catch((msg)=>{console.log(msg)})
console.log(s)






