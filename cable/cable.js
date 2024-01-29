let form = document.querySelector("form");
let text1 = document.querySelector("#input1");
let text2 = document.querySelector("#input2");
let popup = document.querySelector("#popup");
let load = document.querySelector(".buttonload");
let close = document.getElementById("close");

let textField = {
  network: "",
  number: "",
  amount: "",
};

text1.addEventListener("change", (e) => {
  textField.network = e.target.value;
  console.log(textField);
});

text2.addEventListener("change", (e) => {
  textField.number = e.target.value;
  console.log(textField);
});

// form
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // loader
  if (load.classList.contains("loading")) {
    load.classList.add("loading");
    // console.log('true')
  } else {
    // console.log('false')
    load.classList.add("loading");
  }
  setTimeout(stopLoading, 3000);

  text1.value = "";
  text2.value = "";
});
function stopLoading () {
  load.classList.remove("loading");
  alert("Transaction Successful")
} 
// popup
// function popupInterval() {
//   if (popup.classList.contains("open-popup")) {
//     // console.log('true')
//     popup.classList.remove("open-popup");
//   } else {
//     // console.log('false')
//     popup.classList.add("open-popup");
//   }
//   load.classList.remove("loading");
// }

// // close button
// close.addEventListener("click", () => {
//   popup.classList.remove("open-popup");
// });
