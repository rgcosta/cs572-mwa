Array.prototype.even = async function () {
    let arr = this;
    try {
        let result = await getEven(arr);
        console.log(result.toString());
        // return result;
    } catch (e) {
        console.log(e);
    }
};

Array.prototype.odd = async function () {
    let arr = this;
    try {
        let result = await getOdd(arr);
        console.log(result.toString());
    } catch (e) {
        console.log(e);
    }
};

function getEven(arr) {
    return new Promise((resolve, reject) => {
        let even = [];
        let i = 0;
        for (const value of arr) {
            if (value % 2 === 0) {
                even[i] = value;
                i++;
            }
        }

        if (even.length >= 1)
            resolve(even);
        else
            reject("There is no even number.");
    })
}

function getOdd(arr) {
    return new Promise((resolve, reject) => {
        let odd = [];
        let i = 0;
        for (const value of arr) {
            if (value % 2 !== 0) {
                odd[i] = value;
                i++;
            }
        }

        if (odd.length >= 1)
            resolve(odd);
        else
            reject("There is no odd number.");
    })
}


console.log('start');
[1,2,3,4,5,6,7,8].even();
[1,2,3,4,5,6,7,8].odd();
console.log('end');