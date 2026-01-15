//timeout
setTimeout(()=>{
 console.log("hello");
},2000);

 //callbacks

function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
calculator(1,2,(a,b)=>{
    console.log(a+b);
});

 //callback hell-nested if-else
   
    let age=19;
    if(age>=18){
        if(age>=60){
            console.log("senior")
        }else{
            console.log('juiner');
        }
    }else{
        console.log('child');
    }
 //callback hell

    function getData(dataId,getNextData){
        setTimeout(()=>{
            console.log("data",dataId);
            if(getNextData){
                getNextData();
            }
        },2000);
    }

    getData(1,()=>{
        console.log("getting data2...");
        getData(2,()=>{
        console.log("getting data 3..");
        getData(3,()=>{
            console.log("getting data4...");
            getData(4);
        });
        });
    });
    
   //promises
    let promises=new Promise((resolve,reject)=>{
        console.log("i am a promises");
        reject('some error');
    });

    //promise use

    function getData(dataId,getNextData){
        return new promises((resolve,reject)=>{
            setTimeout(() => {
                console.log("data",dataId);
                resolve("success");
                if(getNextData){
                    getNextData();
                }
            }, 5000);
        });
    }


//.then and .catch
const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("i am a promise")
        reject("network error");
    });
};

let promise=getPromise();
promise.then((res)=>{
    console.log("promises fufilled",res);
});

promise.catch((err)=>{
    console.log("promises reject",err);
});

//promise chain

function asyncFun1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success");
        },4000);
    });
}

function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success");
        },4000);
    });
}
console.log("fetching data1....");
asyncFun1().then((res)=>{
    console.log("fetching data2...");
    asyncFunc2().then((res)=>{})
 })

//async await

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        },2000);
    });
}

  async function getWeatherData(){
    await api();
    await api();
}
