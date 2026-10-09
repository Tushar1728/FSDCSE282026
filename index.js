// console.log("Hello... Using JS ")

// function sum(a,b){
//     return a+b;
// }
// sum(23,30);

// let a=34;
// if(a>20){
//     let a=45;
//     console.log("a inside a="+a)
// }
// console.log("a outside a="+a)


// const sum=function(a,b){
//     return a+b;
// }
// sum(23,30)



    // const sum=(a,b)=>{return Math.sqrt(a+b)}
    // sum(40,90);

 //IIFE
    // (()=>{console.log("hiiii")})();

//CAllback function

// function sum(a,b){
//     return a+b;
// }


// function sumWithMsg(clbk,msg){
//            const result=clbk(12,40);
//            console.log("Hiii"+msg+""+result)
// }

// sumWithMsg(sum,"Ram");




// function login(msg,error){
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log(msg)
//     }
// }



// function loginHandler(username,password,clbk){
//     // username="ptomer40";
//     // password="12345"
//     if(username=="ptomer40" && password=="12345" ){
//                    clbk("success",null)
//     }else
//     {
//         clbk(null,"Username or password is incorrect")
//     }
// }
// loginHandler("ptomer40","343453",login)
// loginHandler("ptomer40","",login)


//Callback Hell


// setTimeout(()=>{console.log("One")
//     setTimeout(()=>{
//         console.log("Two")
//         setTimeout(()=>{
//             console.log("Three")
//             setTimeout(()=>{
//                 console.log("Four"),
//                 setTimeout(()=>{
//                     console.log("Five")
//                     setTimeout(()=>{
//                         console.log("Six")
//                         setTimeout(()=>{
//                             console.log("Seven")
//                             setTimeout(()=>{console.log("Eight")
//                                 setTimeout(()=>{console.log("Nine")},1000)
//                             },
                            
//                             1000)
//                         },1000)
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },
// 1000)


  //Promise


        const myPromise=new Promise((resolve,reject)=>{
                let username="ptomer40";
                let password="1234";
                if(username=="ptomer40" && password=="1234"){
                    resolve("success");
                }else{
                    reject("invalid")
                }

        })

        // console.log(myPromise)

        // myPromise.then((msg)=>{console.log(msg)})
        // .catch(msg=>{console.log(msg)})
        // .finally(console.log("Resource closed"))

         async function orderRecieved(){
             return await new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve("One order recieved")
                },1000)
             })

         }

         async function orderPrepared(){
                      return await new Promise((resolve)=>{
                        setTimeout(()=>{
                            resolve("Order Prepared");
                        },1000)
                       })}

           function orderHandOver(){

           }

         let votp;
           function OrderCompleted(){
            console.log("Order Successfully Completed")
           }

                  function otp(){
                 votp= Math.random()*10000;
                return votp;

                  }
        async function handleLogin(){
            const status=await myPromise;
            console.log(status)
        }
        handleLogin();