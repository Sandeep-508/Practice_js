// // // function somename(param1, param2) {
// // //     var a = param1 + "love" + param2;
// // //     return a;
// // //     console.log(a);
// // // }

// // // console.log(somename("1", "2"));

// // // somename("1", "2");
// // // var a = 12;
// // // console.log(a);

// // // var a = 12;

// // // function define_value() {
// // //     var a = 6;
// // //     console.log(a);

// // //     function least_scope() {
// // //         console.log(a);
// // //     }
// // //     least_scope();
// // // }

// // // console.log(define_value());

// // // var a = "12";
// // // var b = 12;

// // // // console.log(typeof (b));
// // // console.log(b instanceof b);

// // // const arr1 = [1, 2, 3];
// // // const arr2 = [4, 5, 6];
// // // const combinedArray = [...arr1, ...arr2];

// // // console.log(combinedArray);
// // // var a = 1;
// // // // if (a > 1) { console.log("a is smaller") } else {
// // // //     console.log("a is greater");
// // // // }

// // // console.log((a > 1) ? "a is greater" : "a is smaller");

// // // const dayOfWeek = 6;
// // // let dayName;

// // // switch (dayOfWeek) {
// // //     case 1:
// // //         dayName = "Monday";
// // //         break;
// // //     case 2:
// // //         dayName = "Tuesday";
// // //         break;
// // //     case 3:
// // //         dayName = "Wednesday";
// // //         break;
// // //     case 4:
// // //         dayName = "Thursday";
// // //         break;
// // //     case 5:
// // //         dayName = "Friday";
// // //         break;
// // //     case 6:
// // //         dayName = "Saturday";
// // //         break;
// // //     case 7:
// // //         dayName = "Sunday";
// // //         break;
// // //     default:
// // //         dayName = "Invalid day";
// // // }

// // // console.log("The day is:", dayName);

// // // let a = 3;
// // // let b;
// // // switch (a) {
// // //     case 1:
// // //         b = 4;
// // //         break;
// // //     default:
// // //         b = "not correct";
// // // }

// // // console.log(b);

// // let score = 85;

// // // switch (true) {
// // //     case (score >= 90):
// // //         console.log('Grade: A');
// // //         break;
// // //     case (score >= 80):
// // //         console.log('Grade: B');
// // //         break;
// // //     case (score >= 70):
// // //         console.log('Grade: C');
// // //         break;
// // //     case (score >= 60):
// // //         console.log('Grade: D');
// // //         break;
// // //     default:
// // //         console.log('Grade: F');
// // // }

// // if (score > 90) {
// //     console.log('Grade: A');
// // } else if (score > 80) {
// //     console.log('Grade: B');
// // }
// // else if (score > 70) {
// //     console.log('Grade: C');
// // }
// // else if (score > 60) {
// //     console.log('Grade: D');
// // } else {
// //     console.log('Grade: F');
// // }

// // let day = 8;

// // switch (day) {
// //     case 1:
// //         console.log("Monday");
// //         break;
// //     case 2:
// //         console.log("Tuesday");
// //         break;
// //     case 3:
// //         console.log("Wednesday");
// //         break;
// //     case 4:
// //         console.log("Thursday");
// //         break;
// //     case 5:
// //         console.log("Friday");
// //         break;
// //     case 6:
// //         console.log("Saturday");
// //         break;
// //     case 7:
// //         console.log("Sunday");
// //         break;
// //     default:
// //         console.log("Invalid day");
// // }

// // promise
// // let condition = true;
// // const p = new Promise((resolve, reject) => {
// //     // setTimeout(() => {
// //     if (condition) {
// //         resolve('Successful login');
// //     } else {
// //         reject('Login failed');
// //     }
// //     // }, 2000)
// // })

// // let div = document.createElement("div");
// // let a = document.createElement("p");

// // a.textContent = "olaf olaf olaf";

// // div.appendChild(a);
// // document.body.appendChild(div);

// // let btn = document.createElement("button");
// // btn.innerHTML = "click Here to Append";
// // let ul = document.createElement("ul");
// // btn.addEventListener("click", () => {
// //     let li = document.createElement("li");
// //     ul.appendChild(li);
// //     li.innerHTML = "olaf and olaf";
// // });
// // document.body.appendChild(ul);
// // document.body.appendChild(btn);

// // let grc_input = document.querySelector(".groccery-input");
// // let btn = document.querySelector(".btn-add");
// // let list_cont = document.querySelector(".list_cont");
// // let delete_btn = document.querySelector(".btn-delete");

// // btn.addEventListener("click", () => {
// //     let value_input = grc_input.value;
// //     if (value_input == "") {
// //         alert("write something");
// //     } else {
// //         let items = document.createElement("p");
// //         items.classList.add("simple-text");
// //         items.innerHTML = `Task is ${value_input}`;
// //         list_cont.appendChild(items);
// //         console.log(list_cont);
// //         items.addEventListener("click", () => {
// //             items.classList.toggle("text-decoration-line-through");
// //         });
// //     }
// // });

// // let index_current = 0;
// // delete_btn.addEventListener("click", () => {
// //     let simpleText = document.querySelectorAll(".simple-text");
// //     let index_current = 0;
// //     if (index_current < simpleText.length) {
// //         simpleText[index_current].remove();
// //         index_current++;
// //     }
// // });

// // pomodoro timer

// let inc_break_time = document.querySelector(".inc-break-time");
// let dec_break_time = document.querySelector(".dec-break-time");
// let inc_foc_time = document.querySelector(".inc-foc-time");
// let dec_foc_time = document.querySelector(".dec-foc-time");
// let break_time = document.querySelector(".break_time");
// let focus_time = document.querySelector(".focus_time");
// let timer = document.querySelector(".timer");
// let startButton = document.querySelector(".start-btn");
// let stopButton = document.querySelector(".stop-btn");

// let i = 0;
// inc_break_time.addEventListener("click", () => {
//     break_time.innerHTML = ++i;
// });
// dec_break_time.addEventListener("click", () => {
//     if (i <= 0) {
//         break_time.innerHTML = 0;
//         alert("Time can't be Negative");
//     } else {
//         break_time.innerHTML = --i;
//     }
// });

// let j = 0;
// inc_foc_time.addEventListener("click", () => {
//     focus_time.innerHTML = ++j;
//     pm_timer();
// });
// dec_foc_time.addEventListener("click", () => {
//     if (j <= 0) {
//         focus_time.innerHTML = 0;
//         alert("Time can't be Negative");
//     } else {
//         focus_time.innerHTML = --j;
//     }
//     pm_timer();
// });

// function pm_timer() {
//     timer.innerHTML = focus_time.innerHTML;
// }



// // let age = [12, 32, 28];

// // console.log(age.map(verify));

// // function verify(age) {
// //     return age * 18;
// // }

// // console.log(window);

// // let d = new Date('9/9/2005');

// // console.log(Date.now());

// // let change_red = document.querySelector(".red");
// // let change_green = document.querySelector(".green");
// // let change_blue = document.querySelector(".blue");
// // let body = document.body;

// // change_red.addEventListener("click", () => {
// //     // body.style.backgroundColor = "red";
// //     body.classList.add("bg-danger");
// //     body.classList.remove("bg-success");
// //     body.classList.remove("bg-primary");
// // });
// // change_green.addEventListener("click", () => {
// //     // body.style.backgroundColor = "red";
// //     body.classList.add("bg-success");
// //     body.classList.remove("bg-primary");
// //     body.classList.remove("bg-danger");
// // });
// // change_blue.addEventListener("click", () => {
// //     // body.style.backgroundColor = "red";
// //     body.classList.add("bg-primary");
// //     body.classList.remove("bg-success");
// //     body.classList.remove("bg-danger");
// // });

// // let buttons = [
// //     { element: document.querySelector(".red"), colorClass: "bg-danger" },
// //     { element: document.querySelector(".green"), colorClass: "bg-success" },
// //     { element: document.querySelector(".blue"), colorClass: "bg-primary" }
// // ];

// // let body = document.body;

// // buttons.forEach(button => {
// //     button.element.addEventListener("enter", () => {
// //         body.classList.remove("bg-danger", "bg-success", "bg-primary");
// //         body.classList.add(button.colorClass);
// //     });
// // });

// // let input_box = document.querySelector(".input_box");
// // let submit = document.querySelector(".submit");
// // let change_no = document.querySelector(".change_no");

// // submit.addEventListener("click", () => {
// //     let value_inp = input_box.value;
// //     if (value_inp > 100) {
// //         change_no.innerHTML = "you're too old to access this";
// //     }
// //     else if (value_inp > 18) {
// //         change_no.innerHTML = "you are eligible to access this";
// //     }
// //     else if (value_inp < 18) {
// //         change_no.innerHTML = "you are not eligible to access this";
// //     }
// // });
// let sub_check = document.querySelector("#sub_check");
// let Visa_radio = document.querySelector("#Visa_radio");
// let master_radio = document.querySelector("#master_radio");
// let paypal_check = document.querySelector("#paypal_check");
// let submit_btn = document.querySelector(".submit_btn");

// let sub_det = document.querySelector(".sub_det");
// let payment_det = document.querySelector(".payment_det");

// submit_btn.addEventListener("click", () => {
//     if (sub_check.checked) {
//         sub_det.innerHTML = "you are subscribed";

//         if (Visa_radio.checked) {
//             payment_det.innerHTML = "you have paid with visa";
//         }
//         else if (master_radio.checked) {
//             payment_det.innerHTML = "you have paid with master";
//         }
//         else if (paypal_check.checked) {
//             payment_det.innerHTML = "you have paid with PayPal";
//         }
//     }
//     else {
//         sub_det.innerHTML = "you're not subssscribed"
//     }
// });

// let number = document.querySelector(".num");
// let inc = document.querySelector(".incnum");
// let dec = document.querySelector(".decnum");
// let i = 10;
// inc.addEventListener("click", () => {
//     i++;
//     number.innerHTML = i;
// });
// dec.addEventListener("click", () => {
//     i--;
//     number.innerHTML = i;
// });