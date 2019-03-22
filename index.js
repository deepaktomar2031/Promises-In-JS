// var prom = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let rand = Math.random();
//         console.log(" value of random number is ", rand);
//         if (rand > 0.5) {
//             resolve("Promise Resolved");
//         } else {
//             reject("Promise rejected as You were late!");
//         }
//     }, 1000);
// });

// var promm = prom.then((value) => {
//     console.log("Promise :: ", value);
//     console.log("promoiseeeee ", promm);
// }).catch((value) => {
//     console.log("Promise ::: ", value);
// });

// console.log("promoise ", promm);

function ajaxWithPromise(url, data) {
    return new Promise((suceess, fail) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    suceess(xhr.responseText);
                } else {
                    fail(xhr.statusText);
                }
            }
        }

        xhr.onerror = function () {
            fail(xhr.statusText);
        }
        xhr.timeout = 1500;
        xhr.open("POST", url);

        xhr.send(data);
    })
}

ajaxWithPromise("http://localhost:9000/", `{
    "action": "refresh"
}`).then((response) => {
    console.log("response is ", response);
    var respJSON = JSON.parse(response);
    console.log("Next Action:", respJSON.game.nextAction);
}).catch((error) => {
    console.log("Error Message :: ", error);
})