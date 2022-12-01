var date = document.querySelector('#Date');
var day = document.querySelector('#Day');
var Time = document.querySelector('#Time');
let days = [ "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

let timeNow = new Date();
console.log(timeNow);
var n = timeNow.toLocaleTimeString();
console.log(timeNow.toLocaleDateString())
console.log(n);


let dayNow = new Date().getDay();
console.log(days[dayNow]);
day.innerHTML=days[dayNow];


let dateNow = new Date().getDate();
console.log(dateNow);
if (dateNow<10)
{
    dateNow=`0${dateNow}`
}

let monthNow=new Date().getMonth();
console.log(monthNow+1);
if(monthNow<10){
monthNow=`0${monthNow}`
}


let yearNow=new Date().getFullYear();
console.log(yearNow);

date.innerHTML=`${dateNow}/${monthNow+1}/${yearNow}`


let timestamp = Date.now();
console.log(`timestamp1${timestamp}`);

var timestamp3 = new Date(["12/1/2022","08:20:24"]);
console.log(`timestamp2${timestamp3}`);
let b = timestamp-timestamp3;
console.log(b);
// let timestamp2 =()=>{setTimeout(() => {

//     let a = Date.now();
//     let b = a-timestamp3;
//     let c = b/(60*1000);
//     console.log(c);

//  }, 5000)
// }
// timestamp2()


let h = new Date().getHours();
console.log(h);
let m = new Date().getMinutes();
console.log(m);
let s = new Date().getSeconds();
console.log(s);

// function displayTime(){
//     let h = new Date().getHours();
// // console.log(h);
// let m = new Date().getMinutes();
// // console.log(m);
// let s = new Date().getSeconds();
// // console.log(s);

// if(h<10){h=`0${h}`};
// if(h>12){h=h-12};
// if(h==0){h=12}

// if(m<10){m=`0${m}`};
// if(s<10){s=`0${s}`};
// Time.innerHTML = `${h}:${m}:${s}`
// }
// setInterval(()=>{
// displayTime()
// },1000)


function dis(){
    setInterval(()=>{
        var time = new Date();
        var currenttime = time.toLocaleTimeString();
        Time.innerHTML = currenttime;
    },1000)
}
dis()

