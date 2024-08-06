//Promise

//promise is a javascript object for asynchronous operation.
//state : pending -> fulfilled or rejected
//producer vs consumer

//1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work(network, file)
})
