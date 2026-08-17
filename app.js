// let d=Date()
// console.log(d);
// let  a= new Date()
// console.log(a);
let hours = document.querySelector("#hrs")
let minutes = document.querySelector("#min")
let seconds = document.querySelector("#sec")
setInterval(() => {
    // let clock = document.querySelector("#clock")





    // document.querySelector("#min").textContent = new Date().getMinutes()
    // document.querySelector("#hrs").textContent = new Date().getHours()
    // let CurrentSecond= new Date().getSeconds()
    if ( new Date().getSeconds() <= 9) {
        seconds.textContent = "0" + new Date().getSeconds()
    } else {
        seconds.textContent = "" + new Date().getSeconds()


    }
    if (new Date().getMinutes() <= 9) {
        minutes.textContent = "0" + new Date().getMinutes()
    } else {
        minutes.textContent = "" +new Date().getMinutes()


    }
    if ( new Date().getHours() <= 9) {
        hours.textContent = "0" + new Date().getHours()
    } else {
        hours.textContent = "" + new Date().getHours()


    }

}, 1000);
