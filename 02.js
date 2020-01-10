const promise01 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('async operator 01 ...');
        resolve(1);
    }, 2000);
});

const promise02 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('async operator 01 ...');
        resolve(2);
    }, 2000);
});

Promise.all([promise01, promise02]).then(data => {
    console.log(data);
}).catch(error => {
    console.log(error.message);
});

Promise.race([promise01, promise02]).then(data => {
    console.log(data);
}).catch(error => {
    console.log(error.message);
});
