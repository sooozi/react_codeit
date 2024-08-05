const promise = new Promise ((resolve, reject) => {
    const success = true;

    if(success){
        resolve('성공');
    } else {
        reject('실패');
    }
})