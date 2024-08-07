//Promise

//promise is a javascript object for asynchronous operation.
//state : pending -> fulfilled or rejected
//producer vs consumer

//1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work(network, file)
    console.log('doing somthing...');
    setTimeout(() => {
        // resolve('ellie');
        reject(new Error('no network'));
    }, 2000);
});

//2. Consumer : then, catch, finally
promise
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log(value);
    })
    .finally(() => {
        console.log('finally')
    })


    //3. promise chaining
    
