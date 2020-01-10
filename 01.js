let isTrue = true;

let willNewPhone = new Promise((resolve, rejects) => {
    if (isTrue) {
        let phone = {
            brand: 'APPLE',
            color: 'black'
        };

        resolve(phone);
    }
    else {
        let reason = new Error('Problem!');
        rejects(reason);
    }
});

const showOff = (phone) => {
    const message = `I have new ${phone.brand} ${phone.color}`;
    return Promise.resolve(message);
};

let askPhone = () => {
    willNewPhone
        .then(showOff)
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error.message);
        });
};
askPhone();
