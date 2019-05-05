//Exercise 1: filterWords
//console.log("This house is nice!").filterWords(['house', 'nice']);
//output: "This *** is ***!"
String.prototype.filterWords = function (arr) {
    let str = this;
    arr.forEach(function (word) {
        str = str.replace(word, "***");
    });
    return str;
};

String.prototype.filterWords2 = function (arr) {
    let str = this;
    for (const word of arr) {
        str = str.replace(word, "***");
    }
    return str;
};

String.prototype.filterWords3 = function(arr) {
    let str = this;
    return new Promise( (resolve, reject) => {
        if (arr.length > 0) {
            for (const word of arr) {
                str = str.replace(word, "***");
            }
            resolve(str);
        } else {
            str = "It was not possible to filter. Check parameters!";
            reject(str);
        }
    })
};

String.prototype.filterWords4 = async function asyncFilter(arr) {
    let str = this;
    try {
        str = await str.filterWords3(arr);
        console.log(str);
        return str;
    } catch (e) {
        console.log(e);
    }
};

String.prototype.filterWords5 = function(arr) {
    let str = this;
    const { from } = rxjs;
    const { map, reduce } = rxjs.operators;

    from(str.split(" "))
        .pipe(
            map(word => {
                if (arr.includes(word))
                    return "***";
                else
                    return word;
            }),
            reduce( (previous, word) => previous + " " + word)
        ).subscribe(word => console.log(word));
};

console.log("This house is not nice!");
console.log("This house is not nice!".filterWords(["not", "house"]));
console.log("This house is not nice!2".filterWords2(["not", "house"]));
console.log("This house is not nice!3".filterWords3(["not", "house"])    //try .filterWords3([]) to catch the error
    .then(strFiltered => console.log(strFiltered))
    .catch(reason => console.log(reason)));
console.log("This house is not nice!4".filterWords4(["not", "house"]));
console.log("This house is not nice!5".filterWords5(["not", "house"]));
console.log("End of the exercise!!");


//===================================================
//Exercise 2: isWeekend()
function isWeekend() {
    const todayDate = new Date();
    const day = todayDate.getDate();

    let weekday = [];
    weekday[0] = 'Sunday';
    weekday[1] = 'Monnday';
    weekday[2] = 'Tuesday';
    weekday[3] = 'Wednesday';
    weekday[4] = 'Thursday';
    weekday[5] = 'Friday';
    weekday[6] = 'Saturday';

    return weekday[day];
}
console.log('Today is ' + isWeekend());

//==================================================
//Exercise 3: applyCoupon()
//applyCoupon(item)(10).price === 180
const item = {
    "name": "Avocado",
    "type": "Fruit",
    "category": "Food",
    "price": 200
};

function applyCoupon(item) {
    let currentPrice = item.price;
    return function (discount) {
        item.price = currentPrice - currentPrice*discount/100;
        return item;
    }
}

console.log("applyCoupon(item)(10).price === 180");
console.log(applyCoupon(item)(10).price === 180);